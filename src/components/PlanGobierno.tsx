import React, { useState } from 'react';
import { Download, BookOpen, Clock, FileText, CheckCircle, Loader2 } from 'lucide-react';
import { downloadPlanGobierno } from '../lib/downloadPlanGobierno';

export default function PlanGobierno() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    downloadPlanGobierno();
    setIsDownloading(false);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  return (
    <section id="plan" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Columna izquierda — texto */}
          <div className="text-left space-y-5">
            <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Documento de Trabajo
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-tight">
              <span className="text-gray-900">Plan de Gobierno Definitivo:</span>
              <br />
              <span className="text-gray-400">Técnico, Ético y Viable</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
              Nuestra propuesta no es una lista de promesas al azar. Es un documento de planificación pública
              estructurado bajo un riguroso marco de costo-beneficio y metas medibles para transformar Nuevo Chimbote.
            </p>
          </div>

          {/* Columna derecha — tarjeta de descarga */}
          <div className="bg-zinc-900 text-white p-7 sm:p-8 rounded-3xl relative overflow-hidden border border-zinc-800 shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCA00]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl border-2 border-[#FFCA00] flex items-center justify-center text-[#FFCA00]">
                  <FileText size={22} strokeWidth={2} />
                </div>
                <h3 className="font-sans font-black text-xl sm:text-2xl text-white">
                  Descargar Plan Completo
                </h3>
                <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                  Descarga nuestro documento oficial en versión digital PDF de alta resolución. Conoce el detalle
                  financiero, los proyectos por sector y el cronograma técnico de implementación.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-y border-zinc-800 py-5">
                <div className="flex items-center gap-3">
                  <BookOpen size={20} className="text-[#FFCA00] shrink-0" />
                  <div>
                    <span className="block font-sans font-black text-lg text-white leading-tight">58 Págs.</span>
                    <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-wider mt-0.5">
                      Total Documento
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-[#FFCA00] shrink-0" />
                  <div>
                    <span className="block font-sans font-black text-lg text-white leading-tight">25 Min.</span>
                    <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-wider mt-0.5">
                      Tiempo Lectura
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className={`w-full font-sans font-extrabold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer focus:outline-none transition-all duration-300 ${
                    downloadSuccess
                      ? 'bg-zinc-800 text-white border border-zinc-700'
                      : 'bg-[#FFCA00] text-black hover:bg-[#ffe066] shadow-[0_4px_14px_rgba(255,202,0,0.25)]'
                  }`}
                  id="action-manifesto-download"
                >
                  {isDownloading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Descargando...</span>
                    </>
                  ) : downloadSuccess ? (
                    <>
                      <CheckCircle size={18} className="text-green-400" />
                      <span>¡Descargado!</span>
                    </>
                  ) : (
                    <>
                      <Download size={18} />
                      <span>Descargar PDF</span>
                    </>
                  )}
                </button>
                <p className="font-sans text-[11px] text-zinc-500 text-center">
                  Tamaño: <span className="text-zinc-400">4.2 MB</span>
                  {' • '}
                  Versión: <span className="text-zinc-400">Final (Junio 2026)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
