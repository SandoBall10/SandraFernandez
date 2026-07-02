import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Download, ExternalLink, X } from 'lucide-react';
import { CampaignPlanDocument, downloadCampaignPlan } from '../lib/campaignPlans';

interface PlanPdfPreviewModalProps {
  plan: CampaignPlanDocument | null;
  onClose: () => void;
}

export default function PlanPdfPreviewModal({ plan, onClose }: PlanPdfPreviewModalProps) {
  useEffect(() => {
    if (!plan) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [plan, onClose]);

  if (!plan) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key={`plan-preview-${plan.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.22 }}
          className="relative flex h-[min(92dvh,900px)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border-2 border-[#FFCA00] bg-zinc-950 shadow-2xl"
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="plan-preview-title"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 bg-black px-4 py-3 sm:px-5">
            <div className="min-w-0 text-left">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FFCA00]">
                Vista previa
              </p>
              <h3
                id="plan-preview-title"
                className="font-sans font-black text-base sm:text-lg text-white truncate"
              >
                {plan.shortLabel}
              </h3>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={plan.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 px-3 py-2 text-xs font-semibold text-zinc-200 hover:border-[#FFCA00] hover:text-[#FFCA00] transition-colors"
              >
                <ExternalLink size={14} />
                Abrir en pestaña
              </a>
              <button
                type="button"
                onClick={() => downloadCampaignPlan(plan)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FFCA00] px-3 py-2 text-xs font-bold text-black hover:bg-[#ffe066] transition-colors"
              >
                <Download size={14} />
                Descargar
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-white hover:bg-[#FFCA00] hover:text-black hover:border-black transition-colors"
                aria-label="Cerrar vista previa"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="relative min-h-0 flex-1 bg-zinc-900">
            <iframe
              src={`${plan.fileUrl}#view=FitH`}
              title={`Vista previa de ${plan.shortLabel}`}
              className="absolute inset-0 h-full w-full border-0 bg-white"
            />
          </div>

          <p className="border-t border-zinc-800 bg-black px-4 py-2 text-center font-sans text-[11px] text-zinc-500 sm:hidden">
            Si no ves el documento,{' '}
            <a
              href={plan.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFCA00] font-semibold underline"
            >
              ábrelo aquí
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
