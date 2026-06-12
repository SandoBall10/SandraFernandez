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
}

function FlipUnit({ value, label }: FlipUnitProps) {
  const paddedValue = value.toString().padStart(2, '0');
  const d1 = paddedValue[0];
  const d2 = paddedValue[1];

  return (
    <div className="flex flex-col items-center mx-[1.5px]">
      <div className="flex space-x-0.5">
        <FlipDigit digit={d1} />
        <FlipDigit digit={d2} />
      </div>
      <span className="text-[7px] font-mono font-bold text-zinc-500 mt-0.5 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function FlipClock() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Elections Target Date: October 25, 2026, 08:00:00 (Standard Local Elections Morning)
    const targetDate = new Date('2026-10-25T08:00:00').getTime();

    const updateTimer = () => {
      // In Gemini AI Studio preview sandbox environment, we calculate against the simulated current local time: 2026-06-10T13:51:58Z
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

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
        <FlipUnit value={timeLeft.days} label="Días" />
        <span className="text-zinc-600 font-bold text-[10px] mx-[1px] -mt-2.5 animate-pulse">:</span>
        <FlipUnit value={timeLeft.hours} label="Hrs" />
        <span className="text-zinc-600 font-bold text-[10px] mx-[1px] -mt-2.5 animate-pulse">:</span>
        <FlipUnit value={timeLeft.minutes} label="Min" />
        <span className="text-zinc-600 font-bold text-[10px] mx-[1px] -mt-2.5 animate-pulse">:</span>
        <FlipUnit value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  );
}
