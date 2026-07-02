import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Download, BookOpen, Clock, FileText, CheckCircle, Loader2, Shield } from 'lucide-react';
import {
  CAMPAIGN_PLAN_DOCUMENTS,
  CampaignPlanDocument,
  downloadCampaignPlan,
} from '../lib/campaignPlans';
import RevealOnScroll from './RevealOnScroll';

const ROTATE_MS = 8000;
const PAUSE_AFTER_MANUAL_MS = 14000;

export default function PlanGobierno() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const activePlan = CAMPAIGN_PLAN_DOCUMENTS[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAMPAIGN_PLAN_DOCUMENTS.length);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const selectPlan = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    window.setTimeout(() => setIsPaused(false), PAUSE_AFTER_MANUAL_MS);
  };

  const handleDownload = (plan: CampaignPlanDocument) => {
    setIsDownloading(true);
    downloadCampaignPlan(plan);
    setIsDownloading(false);
    setDownloadSuccess(true);
    window.setTimeout(() => setDownloadSuccess(false), 5000);
  };

  return (
    <section id="plan" className="py-20 lg:py-24 bg-transparent relative overflow-hidden border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 lg:mb-10">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-600">
            Documentos oficiales de campaña
          </p>
          <div
            className="inline-flex flex-wrap gap-2 p-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm"
            role="tablist"
            aria-label="Seleccionar documento"
          >
            {CAMPAIGN_PLAN_DOCUMENTS.map((plan, index) => {
              const selected = activeIndex === index;
              return (
                <button
                  key={plan.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => selectPlan(index)}
                  className={`font-sans text-sm font-bold px-4 py-2.5 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCA00] focus-visible:ring-offset-2 ${
                    selected
                      ? 'bg-black text-[#FFCA00] shadow-md'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  }`}
                  id={`plan-tab-${plan.id}`}
                >
                  {plan.shortLabel}
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`copy-${activePlan.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="text-left space-y-5 bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-gray-800 bg-[#FFCA00]/30 border border-[#FFCA00]/50 px-3 py-1 rounded-full">
                {activePlan.tag}
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-tight">
                <span className="text-black">{activePlan.title}</span>
                <br />
                <span className="text-gray-900">{activePlan.titleAccent}</span>
              </h2>
              <p className="font-sans text-base sm:text-lg text-gray-800 leading-relaxed max-w-xl font-medium">
                {activePlan.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`card-${activePlan.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="bg-zinc-900 text-white p-7 sm:p-8 rounded-3xl relative overflow-hidden border border-zinc-800 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCA00]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl border-2 border-[#FFCA00] flex items-center justify-center text-[#FFCA00]">
                    {activePlan.id === 'seguridad' ? (
                      <Shield size={22} strokeWidth={2} />
                    ) : (
                      <FileText size={22} strokeWidth={2} />
                    )}
                  </div>
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-white">
                    {activePlan.downloadTitle}
                  </h3>
                  <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                    {activePlan.downloadDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-zinc-800 py-5">
                  <div className="flex items-center gap-3">
                    <BookOpen size={20} className="text-[#FFCA00] shrink-0" />
                    <div>
                      <span className="block font-sans font-black text-lg text-white leading-tight">
                        {activePlan.pages}
                      </span>
                      <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-wider mt-0.5">
                        {activePlan.pagesLabel}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-[#FFCA00] shrink-0" />
                    <div>
                      <span className="block font-sans font-black text-lg text-white leading-tight">
                        {activePlan.readTime}
                      </span>
                      <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-wider mt-0.5">
                        {activePlan.readTimeLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => handleDownload(activePlan)}
                    disabled={isDownloading}
                    className={`w-full font-sans font-extrabold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer focus:outline-none transition-all duration-300 ${
                      downloadSuccess
                        ? 'bg-zinc-800 text-white border border-zinc-700'
                        : 'bg-[#FFCA00] text-black hover:bg-[#ffe066] shadow-[0_4px_14px_rgba(255,202,0,0.25)]'
                    }`}
                    id={`action-download-${activePlan.id}`}
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
                    Tamaño: <span className="text-zinc-400">{activePlan.fileSize}</span>
                    {' • '}
                    Versión: <span className="text-zinc-400">{activePlan.version}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
