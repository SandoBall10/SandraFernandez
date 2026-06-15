import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Class to handle the leaf flip card countdown beautifully
interface FlipCardProps {
  digit: string;
}

function FlipDigit({ digit }: FlipCardProps) {
  const [displayDigit, setDisplayDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (digit !== displayDigit) {
      setIsFlipping(true);
      const timeout = setTimeout(() => {
        setDisplayDigit(digit);
        setIsFlipping(false);
      }, 300); // sync with animation timing
      return () => clearTimeout(timeout);
    }
  }, [digit, displayDigit]);

  return (
    <div className="relative w-[22px] h-[32px] bg-zinc-900 rounded-md border border-zinc-800 shadow-[0_2px_4px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col items-center justify-center font-mono font-black text-[13px] text-[#FFCA00] select-none perspective-500">
      
      {/* Top half of card */}
      <div className="absolute inset-x-0 top-0 h-[50%] bg-[#1c1c1e] overflow-hidden flex items-end justify-center border-b border-black/30">
        <span className="translate-y-[50%] leading-none text-[13px]">{digit}</span>
      </div>

      {/* Bottom half of card */}
      <div className="absolute inset-x-0 bottom-0 h-[50%] bg-[#121214] overflow-hidden flex items-start justify-center">
        <span className="-translate-y-[50%] leading-none text-[13px]">{displayDigit}</span>
      </div>

      {/* Folding Card Leaf (The actual flip leaf drop animation) */}
      <AnimatePresence mode="popLayout">
        {isFlipping && (
          <motion.div
            key={digit}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -180 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ transformOrigin: 'bottom center' }}
            className="absolute inset-x-0 top-0 h-[50%] bg-[#1c1c1e] overflow-hidden flex items-end justify-center border-b border-black/30 z-10"
          >
            <span className="translate-y-[50%] leading-none text-[13px] text-[#FFCA00]">
              {displayDigit}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle middle line crease */}
      <div className="absolute inset-x-0 top-[50%] h-[0.5px] bg-black/40 z-20" />
    </div>
  );
}

interface FlipUnitProps {
  value: number;
  label: string;
  digits?: 1 | 2;
}

function FlipUnit({ value, label, digits = 2 }: FlipUnitProps) {
  const paddedValue = value.toString().padStart(digits, '0');
  const digitChars = paddedValue.split('');

  return (
    <div className="flex flex-col items-center mx-[1.5px]">
      <div className="flex space-x-0.5">
        {digitChars.map((digit, index) => (
          <React.Fragment key={`${label}-${index}`}>
            <FlipDigit digit={digit} />
          </React.Fragment>
        ))}
      </div>
      <span className="text-[7px] font-mono font-bold text-zinc-500 mt-0.5 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

function calculateElectionCountdown(targetDate: Date) {
  const now = new Date();

  if (targetDate.getTime() <= now.getTime()) {
    return { months: 0, weeks: 0, days: 0, hours: 0 };
  }

  let cursor = new Date(now);
  let months = 0;

  while (true) {
    const nextMonth = new Date(cursor);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    if (nextMonth > targetDate) break;
    months += 1;
    cursor = nextMonth;
  }

  let remainingMs = targetDate.getTime() - cursor.getTime();
  const weekMs = 7 * 24 * 60 * 60 * 1000;
  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;

  const weeks = Math.floor(remainingMs / weekMs);
  remainingMs -= weeks * weekMs;

  const days = Math.floor(remainingMs / dayMs);
  remainingMs -= days * dayMs;

  const hours = Math.floor(remainingMs / hourMs);

  return { months, weeks, days, hours };
}

export default function FlipClock() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
  });

  useEffect(() => {
    // Elecciones: 4 de octubre de 2026, inicio del día (hora local)
    const targetDate = new Date(2026, 9, 4, 0, 0, 0);

    const updateTimer = () => {
      setTimeLeft(calculateElectionCountdown(targetDate));
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center bg-zinc-950 px-3 py-1.5 rounded-xl border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] select-none">
      
      {/* Title label placed ON TOP of the countdown, styled very small and clean */}
      <div className="flex items-center gap-1 mb-1 text-[8px] font-sans font-black leading-none uppercase tracking-wider">
        <span className="text-[#FFCA00]">Vota Sandra</span>
        <span className="text-zinc-600 font-mono text-[6px]">•</span>
        <span className="text-zinc-400 font-mono text-[7px] font-medium">Faltan para las Elecciones</span>
      </div>

      <div className="flex items-center">
        <FlipUnit value={timeLeft.months} label="Mes" digits={1} />
        <span className="text-zinc-600 font-bold text-[10px] mx-[1px] -mt-2.5 animate-pulse">:</span>
        <FlipUnit value={timeLeft.weeks} label="Sem" />
        <span className="text-zinc-600 font-bold text-[10px] mx-[1px] -mt-2.5 animate-pulse">:</span>
        <FlipUnit value={timeLeft.days} label="Días" />
        <span className="text-zinc-600 font-bold text-[10px] mx-[1px] -mt-2.5 animate-pulse">:</span>
        <FlipUnit value={timeLeft.hours} label="Hrs" />
      </div>
    </div>
  );
}
