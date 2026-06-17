import React, { useEffect, useState } from 'react';
import fondoImg from '@/src/assets/fondo.png';

function measureHeaderHeight(): number {
  return document.getElementById('main-header')?.offsetHeight ?? 128;
}

export default function RoadScrollBackground() {
  const [headerHeight, setHeaderHeight] = useState(128);
  const [state, setState] = useState({ progress: 0, fade: 0, active: false });

  useEffect(() => {
    const update = () => {
      const headerH = measureHeaderHeight();
      setHeaderHeight(headerH);

      const zone = document.getElementById('light-sections');
      const join = document.getElementById('unete');
      if (!zone) return;

      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const zoneTop = zone.offsetTop;
      const zoneBottom = zoneTop + zone.offsetHeight;

      const inLightSections = scrollY + vh > zoneTop + headerH * 0.5 && scrollY < zoneBottom;

      if (!inLightSections) {
        setState({ progress: 0, fade: 0, active: false });
        return;
      }

      let fade = 1;
      if (join) {
        const joinTop = join.offsetTop;
        if (scrollY + vh > joinTop - vh * 0.15) {
          fade = Math.max(0, (joinTop - scrollY - vh * 0.15) / (vh * 0.35));
        }
      }

      const travel = Math.max(1, zone.offsetHeight - vh * 0.35);
      const progress = Math.min(1, Math.max(0, (scrollY - zoneTop) / travel));

      setState({ progress, fade, active: true });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  if (!state.active || state.fade <= 0.02) return null;

  const roadScale = 1.04 + state.progress * 0.06;
  const roadShift = state.progress * 8;
  const messageOpacity = Math.min(1, Math.max(0, (state.progress - 0.78) / 0.22)) * 0.85;

  return (
    <div
      className="fixed inset-x-0 pointer-events-none z-[1] overflow-hidden"
      style={{
        top: headerHeight,
        bottom: 0,
        opacity: state.fade,
      }}
      aria-hidden
    >
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white/80 to-transparent z-10" />

      <div className="absolute inset-0 flex justify-center overflow-hidden">
        <img
          src={fondoImg}
          alt=""
          className="h-full w-auto min-w-[min(58vw,380px)] max-w-none object-cover object-bottom opacity-[0.28] mix-blend-multiply will-change-transform"
          style={{
            transform: `translateY(-${roadShift}%) scale(${roadScale})`,
            transformOrigin: 'center bottom',
          }}
          draggable={false}
        />
      </div>

      <div
        className="absolute left-1/2 bottom-[16%] -translate-x-1/2 text-center z-20"
        style={{ opacity: messageOpacity }}
      >
        <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.4em] text-gray-700 drop-shadow-sm">
          País Para Todos
        </p>
        <div className="mt-2.5 mx-auto w-10 h-0.5 bg-[#FFCA00]/70 rounded-full" />
      </div>
    </div>
  );
}
