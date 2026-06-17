import { motion, useReducedMotion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  amount?: number;
}

const offsetByDirection: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 56 },
  down: { x: 0, y: -56 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
  none: { x: 0, y: 0 },
};

const hiddenMotion = (offset: { x: number; y: number }) => ({
  opacity: 0,
  x: offset.x,
  y: offset.y,
  scale: 0.96,
  filter: 'blur(6px)',
});

const visibleMotion = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  filter: 'blur(0px)',
};

export default function RevealOnScroll({
  children,
  className,
  id,
  direction = 'up',
  delay = 0,
  duration = 0.75,
  amount = 0.18,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const offset = offsetByDirection[direction];

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: amount,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion, amount]);

  if (reduceMotion) {
    return (
      <div ref={ref} className={className} id={id}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={hiddenMotion(offset)}
      animate={isVisible ? visibleMotion : hiddenMotion(offset)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
