import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { WALKS_CAMPAIGN } from '../data';
import { WalkCampaign } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ImageIcon,
} from 'lucide-react';

const AUTOPLAY_MS = 3000;

function formatSlideCounter(index: number, total: number) {
  return `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
}

function locationLabel(location: string) {
  return location.split('(')[0].trim();
}

function dateLabel(date: string) {
  return date.split(',')[0];
}

export default function WalksCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedWalk, setSelectedWalk] = useState<WalkCampaign | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeWalk = WALKS_CAMPAIGN[activeIndex];
  const total = WALKS_CAMPAIGN.length;
  const hasMultipleWalks = total > 1;

  useEffect(() => {
    if (!hasMultipleWalks || selectedWalk || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [hasMultipleWalks, selectedWalk, isPaused, activeIndex, total]);

  useEffect(() => {
    if (!selectedWalk) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedWalk(null);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedWalk]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goPrev = () => goToSlide(activeIndex === 0 ? total - 1 : activeIndex - 1);
  const goNext = () => goToSlide(activeIndex === total - 1 ? 0 : activeIndex + 1);

  const openWalkModal = (walk: WalkCampaign) => {
    setSelectedWalk(walk);
    setActiveGalleryIndex(0);
  };

  const closeWalkModal = () => {
    setSelectedWalk(null);
  };

  const nextGalleryImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedWalk) return;
    setActiveGalleryIndex((prev) =>
      prev === selectedWalk.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevGalleryImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedWalk) return;
    setActiveGalleryIndex((prev) =>
      prev === 0 ? selectedWalk.galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="caminatas"
      className="py-12 lg:py-16 bg-transparent relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div className="min-w-0">
            <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Territorio y Escucha
            </span>
            <h2
              className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight mt-3"
              id="walks-title"
            >
              Las Caminatas de Sandra
            </h2>
          </div>

          {hasMultipleWalks && (
            <div className="flex items-center gap-2 shrink-0" id="walks-arrow-controls">
              <span className="font-mono text-xs text-gray-400 tabular-nums mr-1">
                {formatSlideCounter(activeIndex, total)}
              </span>
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Caminata anterior"
                id="walks-prev-btn"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Caminata siguiente"
                id="walks-next-btn"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Tarjeta principal */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100"
          id="walks-carousel-container"
        >
          {/* Imagen */}
          <div className="relative bg-gray-100 aspect-[4/3] lg:aspect-auto lg:min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeWalk.id}
                src={activeWalk.backgroundImage}
                alt={activeWalk.title}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Contenido */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWalk.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-mono font-black text-[#FFCA00] bg-black px-3 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin size={11} />
                    {locationLabel(activeWalk.location)}
                  </span>
                  <span className="font-mono text-gray-500 flex items-center gap-1.5">
                    <Calendar size={11} />
                    {dateLabel(activeWalk.date)}
                  </span>
                </div>

                <h3 className="font-sans font-black text-2xl sm:text-3xl text-gray-900 leading-tight">
                  {activeWalk.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                  {activeWalk.shortDescription}
                </p>

                <button
                  onClick={() => openWalkModal(activeWalk)}
                  className="inline-flex items-center gap-2 bg-[#FFCA00] hover:bg-[#e6b800] text-black font-sans font-bold text-sm px-5 py-3 rounded-xl transition-colors cursor-pointer mt-2"
                  id={`walk-open-${activeWalk.id}`}
                >
                  Ver fotos y detalle
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Miniaturas — solo si hay más de una caminata */}
        {hasMultipleWalks && (
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {WALKS_CAMPAIGN.map((walk, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={walk.id}
                onClick={() => goToSlide(idx)}
                className={`flex items-center gap-3 p-3 rounded-2xl border-2 text-left transition-all cursor-pointer bg-white ${
                  isActive
                    ? 'border-[#FFCA00] shadow-[0_0_0_1px_rgba(255,202,0,0.3)]'
                    : 'border-gray-100 hover:border-gray-200'
                }`}
                aria-label={`Ver ${walk.title}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={walk.backgroundImage}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className={`font-sans font-bold text-xs sm:text-sm leading-snug line-clamp-2 ${
                    isActive ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  {walk.title}
                </span>
              </button>
            );
          })}
        </div>
        )}
      </div>

      {selectedWalk &&
        createPortal(
          <div
            id="walk-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="walk-modal-title"
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-sm"
            onClick={closeWalkModal}
          >
            <div
              id="walk-modal-content"
              className="relative w-full max-w-5xl max-h-[94dvh] bg-white rounded-2xl border border-gray-200 shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50 shrink-0">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-black text-black bg-[#FFCA00] px-2 py-0.5 rounded">
                  <ImageIcon size={10} />
                  Galería de la caminata
                </span>
                <button
                  type="button"
                  onClick={closeWalkModal}
                  className="w-8 h-8 rounded-full bg-white hover:bg-black text-gray-500 hover:text-white flex items-center justify-center transition-colors border border-gray-200 cursor-pointer"
                  id="close-walk-modal-btn"
                  title="Cerrar"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 min-h-0 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
                {/* Columna galería */}
                <div className="md:w-[58%] flex flex-col min-h-0 border-b md:border-b-0 md:border-r border-gray-100 shrink-0 md:shrink">
                  <div className="relative bg-gray-50 flex items-center justify-center px-2 py-2 sm:px-3 sm:py-3">
                    <img
                      src={selectedWalk.galleryImages[activeGalleryIndex]}
                      alt={`Foto ${activeGalleryIndex + 1} — ${selectedWalk.title}`}
                      className="w-full h-auto max-h-[38dvh] md:max-h-[min(48dvh,520px)] object-contain"
                    />

                    {selectedWalk.galleryImages.length > 1 && (
                      <>
                        <span className="absolute top-3 right-3 font-mono text-[11px] font-bold text-gray-700 bg-white/95 px-2.5 py-1 rounded-full tabular-nums border border-gray-200 shadow-sm">
                          {activeGalleryIndex + 1} / {selectedWalk.galleryImages.length}
                        </span>

                        <div className="absolute inset-x-2 sm:inset-x-3 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                          <button
                            type="button"
                            onClick={prevGalleryImage}
                            className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center cursor-pointer border border-gray-200 shadow-md transition-colors"
                            aria-label="Foto anterior"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            type="button"
                            onClick={nextGalleryImage}
                            className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center cursor-pointer border border-gray-200 shadow-md transition-colors"
                            aria-label="Foto siguiente"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {selectedWalk.galleryImages.length > 1 && (
                    <div className="shrink-0 bg-gray-50 px-3 py-2.5 border-t border-gray-100">
                      <div className="flex gap-2 overflow-x-auto pb-0.5">
                        {selectedWalk.galleryImages.map((img, gIdx) => (
                          <button
                            key={gIdx}
                            type="button"
                            onClick={() => setActiveGalleryIndex(gIdx)}
                            className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                              activeGalleryIndex === gIdx
                                ? 'border-[#FFCA00] ring-2 ring-[#FFCA00]/40'
                                : 'border-gray-200 opacity-75 hover:opacity-100 hover:border-gray-300'
                            }`}
                            aria-label={`Ver foto ${gIdx + 1}`}
                            aria-current={activeGalleryIndex === gIdx ? 'true' : undefined}
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Columna información — siempre legible */}
                <div className="md:w-[42%] flex flex-col shrink-0 md:shrink md:min-h-0 md:flex-1 md:overflow-hidden bg-white">
                  <div className="p-4 sm:p-5 space-y-4 md:flex-1 md:overflow-y-auto md:min-h-0">
                    <div>
                      <h3 id="walk-modal-title" className="font-sans font-black text-lg sm:text-xl text-black leading-tight">
                        {selectedWalk.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1 font-bold text-gray-700">
                          <MapPin size={13} /> {selectedWalk.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={13} /> {selectedWalk.date}
                        </span>
                      </div>
                    </div>

                    <p className="font-sans text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                      {selectedWalk.fullDescription}
                    </p>

                    <ul className="space-y-2 pt-1">
                      {selectedWalk.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 size={15} className="text-[#FFCA00] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="shrink-0 px-4 sm:px-5 py-3 border-t border-gray-100 flex flex-col gap-2">
                    <span className="flex items-center gap-1.5 text-gray-500 text-[11px]">
                      <Sparkles size={13} className="text-[#FFCA00]" />
                      País Para Todos
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        closeWalkModal();
                        document.getElementById('unete')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-[#FFCA00] text-black font-extrabold text-xs px-4 py-2.5 rounded-xl hover:bg-[#e6b800] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      Acompañar en la próxima
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
