import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Download, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { downloadPlanGobierno } from '../lib/downloadPlanGobierno';

const heroPhotoModules = import.meta.glob<string>('../assets/*.jpg', {
  eager: true,
  import: 'default',
});

const CANDIDATE_PHOTOS = Object.keys(heroPhotoModules)
  .filter((path) => /\/(\d+)\.jpg$/.test(path))
  .sort((a, b) => {
    const numA = Number(a.match(/\/(\d+)\.jpg$/)?.[1] ?? 0);
    const numB = Number(b.match(/\/(\d+)\.jpg$/)?.[1] ?? 0);
    return numA - numB;
  })
  .map((path) => heroPhotoModules[path]);

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % CANDIDATE_PHOTOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + CANDIDATE_PHOTOS.length) % CANDIDATE_PHOTOS.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % CANDIDATE_PHOTOS.length);
  };
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-36 lg:pt-48 pb-16 flex items-center bg-radial from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Background abstract graphic representing community and unity */}
      <div className="absolute inset-0 z-0 opacity-40 select-none pointer-events-none">
        <svg
          className="absolute right-0 top-0 w-1/2 h-full text-yellow-50"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M100,0 C80,20 60,10 40,50 C20,90 10,80 0,100 L100,100 Z" />
        </svg>
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Slogan and Text Columns - 7/12 */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-none" id="hero-title">
                Sandra Fernández <br />
                <span className="text-black inline-block relative">
                  Alcaldesa
                  <span className="absolute left-0 bottom-1 w-full h-3 bg-[#FFCA00] -z-10 transform -rotate-1" />
                </span>
              </h1>
              <p className="font-sans font-medium text-lg sm:text-xl text-gray-600 max-w-xl" id="hero-tagline">
                Un plan real, técnico y con rostro humano para devolverle la tranquilidad y prosperidad a todas las familias de nuestro municipio.
              </p>
            </motion.div>

            {/* Norman's Affordance CTA Button Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              id="hero-ctas"
            >
              <button
                onClick={onJoinClick}
                className="bg-[#FFCA00] text-black font-sans font-extrabold px-8 py-4 rounded-xl shadow-[0_6px_20px_rgba(255,202,0,0.35)] hover:shadow-[0_8px_25px_rgba(255,202,0,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 border-2 border-black focus:outline-none cursor-pointer"
                id="hero-btn-unete"
              >
                <span>Únete a nosotros</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={downloadPlanGobierno}
                className="bg-white hover:bg-gray-50 text-black font-sans font-bold px-8 py-4 rounded-xl border-2 border-black transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 shadow-sm hover:shadow focus:outline-none cursor-pointer"
                id="hero-btn-plan"
              >
                <Download size={20} />
                <span>Plan de Gobierno PDF</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-6 border-t border-gray-100 grid grid-cols-3 gap-4"
              id="hero-trust-indicators"
            >
              <div className="flex items-center space-x-2.5">
                <div className="bg-yellow-50 text-yellow-600 p-2 rounded-lg">
                  <Users size={18} className="text-black" />
                </div>
                <div>
                  <span className="block font-sans font-black text-base text-gray-900 leading-tight">100%</span>
                  <span className="block font-sans text-xs text-gray-500">Cercana al Vecino</span>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="bg-yellow-50 text-yellow-600 p-2 rounded-lg">
                  <svg className="w-[18px] h-[18px] text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-sans font-black text-base text-gray-900 leading-tight">Cero</span>
                  <span className="block font-sans text-xs text-gray-500">Corrupción</span>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="bg-yellow-50 text-yellow-600 p-2 rounded-lg">
                  <svg className="w-[18px] h-[18px] text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-sans font-black text-base text-gray-900 leading-tight">12 Años</span>
                  <span className="block font-sans text-xs text-gray-500">Gestión Técnica</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Candidate Image Feature Column - 5/12 */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] "
              id="hero-image-container"
            >

              
              {/* Main Candidate Photograph */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-950 border-2 border-black shadow-[0_12px_40px_rgba(0,0,0,0.08)] relative group">
                {/* Yellow background shape decoration behind Sandra */}
                <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#FFCA00] -z-10 opacity-80" />
                
                {/* Image Transition Slider */}
                <div className="absolute inset-0 w-full h-full">
                  <AnimatePresence>
                    <motion.img
                      key={currentIdx}
                      src={CANDIDATE_PHOTOS[currentIdx]}
                      alt="Sandra Fernández"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      className="absolute inset-0 w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-500 cursor-zoom-in"
                      id="sandra-portrait-img"
                    />
                  </AnimatePresence>
                </div>

                {/* Left and Right arrows (Interactive Norman indicator) */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#FFCA00] flex items-center justify-center border border-white/20 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none cursor-pointer"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#FFCA00] flex items-center justify-center border border-white/20 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none cursor-pointer"
                  aria-label="Siguiente foto"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Indicador de posición */}
                <div className="absolute bottom-22 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-full backdrop-blur-xs max-w-[85%]">
                  {CANDIDATE_PHOTOS.length <= 12 ? (
                    CANDIDATE_PHOTOS.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentIdx(index);
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-all shrink-0 ${
                          index === currentIdx ? 'bg-[#FFCA00] scale-125' : 'bg-white/60 hover:bg-white'
                        }`}
                        aria-label={`Ir a foto ${index + 1}`}
                      />
                    ))
                  ) : (
                    <span className="font-mono text-[10px] font-bold text-white px-1 whitespace-nowrap">
                      {currentIdx + 1} / {CANDIDATE_PHOTOS.length}
                    </span>
                  )}
                </div>

                {/* Info Overlay Panel */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-black shadow-lg flex items-center justify-between z-10">
                  <div>
                    <span className="block font-sans font-black text-sm text-black uppercase tracking-wider leading-none">
                      Sandra Fernández
                    </span>
                    <span className="block font-mono text-[10px] text-gray-500 uppercase mt-1">
                      Candidata Lista País Para Todos
                    </span>
                  </div>
                  <div className="bg-[#FFCA00] hover:bg-[#ffe066] text-black text-xs font-bold px-3 py-1.5 rounded-lg border border-black transition-colors">
                    #EsElMomento
                  </div>
                </div>
              </div>


            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
