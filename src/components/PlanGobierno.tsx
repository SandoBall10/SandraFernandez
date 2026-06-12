import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, BookOpen, Clock, FileText, CheckCircle, Sparkles, Loader2, ArrowRight } from 'lucide-react';

export default function PlanGobierno() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(0);

  const chapters = [
    {
      num: 'Capítulo I',
      title: 'Diagnóstico y Transparencia Financiera',
      pages: '12-24',
      summary: 'Análisis minucioso del estado actual de las finanzas municipales, deudas contraídas, ineficiencias del gasto administrativo e inventariado de necesidades urgentes barrio por barrio.'
    },
    {
      num: 'Capítulo II',
      title: 'Plan Integral de Seguridad y Cohesión',
      pages: '25-42',
      summary: 'Propuesta de microcuadrantes articulados, tecnología de monitoreo con lectura de placas vehiculares, y el programa de recuperación con canchas y luminarias para alejar a jóvenes de la delincuencia.'
    },
    {
      num: 'Capítulo III',
      title: 'Infraestructura Sostenible e Integración',
      pages: '43-58',
      summary: 'Regulación del uso del suelo, expansión de la red de alcantarillado, fomento de techos Verdes y remodelación de andenes peatonales con accesibilidad de movilidad reducida.'
    },
    {
      num: 'Capítulo IV',
      title: 'Nodos Digitales y Reactivación Local',
      pages: '59-78',
      summary: 'Simplificación reglamentaria para pymes comerciales, incubación de emprendimientos tecnológicos, y becas escolares de inserción laboral en desarrollo de software de alta demanda.'
    }
  ];

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      // Create element anchor to trigger download
      const link = document.createElement('a');
      link.href = '#';
      // Simulate download action file
      console.log('Manifest file pdf downloaded successfully.');
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 5000);
    }, 1800);
  };

  return (
    <section id="plan" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      
      {/* Background visual detail */}
      <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-96 h-96 bg-gray-50 rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout: Grid 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column Left: Visual Graphic Card & Chapter Explorer (7 channels) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-left space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Documento de Trabajo
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
                Plan de Gobierno Definitivo: Técnico, Ético y Viable
              </h2>
              <p className="font-sans text-base text-gray-600 max-w-2xl">
                Nuestra propuesta no es una lista de promesas al azar. Es un documento de planificación pública estructurado bajo un riguroso marco de costo-beneficio y metas medibles.
              </p>
            </div>

            {/* Simulated Desktop Interactive Binder Reader / Chapter Explorer */}
            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
              
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center space-x-2.5">
                  <BookOpen size={20} className="text-black" />
                  <span className="font-sans font-bold text-sm text-black">Explorador de Capítulos</span>
                </div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                  ÍNDICE GENERAL
                </span>
              </div>

              {/* Selector Bar */}
              <div className="flex flex-wrap gap-2">
                {chapters.map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedChapter(idx)}
                    className={`font-sans text-xs font-bold px-3py-2 px-3 py-1.5 rounded-lg border transition-all cursor-pointer focus:outline-none ${
                      selectedChapter === idx
                        ? 'bg-black text-white border-black shadow-sm'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {ch.num}
                  </button>
                ))}
              </div>

              {/* Content Box */}
              <motion.div
                key={selectedChapter}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-3 min-h-[160px] flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-[#FFCA00] bg-black px-1.5 py-0.5 rounded leading-none uppercase tracking-wide">
                      {chapters[selectedChapter].num}
                    </span>
                    <span className="font-mono text-[11px] text-gray-400 font-medium">
                      Págs. {chapters[selectedChapter].pages}
                    </span>
                  </div>
                  <h4 className="font-sans font-black text-base text-gray-900">
                    {chapters[selectedChapter].title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {chapters[selectedChapter].summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-medium text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <CheckCircle size={12} className="text-black" />
                    Propuestas con viabilidad presupuestal
                  </span>
                  <span className="font-sans font-semibold text-black hover:underline cursor-pointer flex items-center gap-0.5" onClick={handleDownload}>
                    Descargar sección <ArrowRight size={12} />
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Column Right: Action Download Card (5 channels) */}
          <div className="lg:col-span-5 bg-black text-white p-8 rounded-3xl relative overflow-hidden border-2 border-black shadow-xl">
            {/* Ambient pattern decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCA00]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-zinc-800/80 rounded-full blur-xl" />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-8 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#FFCA00] rounded-xl flex items-center justify-center text-black shadow-lg">
                  <FileText size={24} />
                </div>
                <h3 className="font-sans font-black text-2xl text-white">
                  Descargar Plan Completo
                </h3>
                <p className="font-sans text-sm text-gray-400 leading-relaxed">
                  Descarga nuestro documento oficial en versión digital PDF de alta resolución. Conoce el detalle financiero, los microplazos y el cronograma técnico de implementación.
                </p>
              </div>

              {/* Informative Stats (Norman's principles - visibility of pages & times) */}
              <div className="grid grid-cols-2 gap-4 border-y border-zinc-800 py-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl text-zinc-400">
                    <BookOpen size={18} className="text-[#FFCA00]" />
                  </div>
                  <div>
                    <span className="block font-mono text-lg font-bold text-white tracking-tight">78 Págs.</span>
                    <span className="block font-sans text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Total Documento</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl text-zinc-400">
                    <Clock size={18} className="text-[#FFCA00]" />
                  </div>
                  <div>
                    <span className="block font-mono text-lg font-bold text-white tracking-tight">35 Min.</span>
                    <span className="block font-sans text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Tiempo Lectura</span>
                  </div>
                </div>
              </div>

              {/* CTA Action block with beautiful feedback states */}
              <div className="space-y-3">
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className={`w-full font-sans font-extrabold text-sm py-4 px-6 rounded-xl border-2 border-black flex items-center justify-center space-x-3 cursor-pointer focus:outline-none transition-all duration-300 ${
                    downloadSuccess
                      ? 'bg-zinc-900 text-white border-zinc-800 shadow-none'
                      : 'bg-[#FFCA00] text-black shadow-[0_4px_14px_rgba(255,202,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,202,0,0.55)] hover:bg-[#ffe066] transform hover:-translate-y-0.5'
                  }`}
                  id="action-manifesto-download"
                >
                  {isDownloading ? (
                    <>
                      <Loader2 size={18} className="animate-spin text-black" />
                      <span>Generando PDF oficial...</span>
                    </>
                  ) : downloadSuccess ? (
                    <>
                      <CheckCircle size={18} className="text-green-500" />
                      <span>¡Descargado Correctamente!</span>
                    </>
                  ) : (
                    <>
                      <Download size={18} />
                      <span>Descargar Plan de Gobierno (PDF)</span>
                    </>
                  )}
                </button>

                <p className="font-sans text-[11px] text-zinc-500 text-center leading-none">
                  Tamaño de archivo: <span className="font-mono text-zinc-400 font-semibold text-[10px]">4.2 MB</span> • Versión: <span className="font-mono text-zinc-400 font-semibold text-[10px]">v1.2 (Junio 2026)</span>
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
