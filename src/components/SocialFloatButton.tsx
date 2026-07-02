import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronUp, X } from 'lucide-react';
import { FACEBOOK_URL, TIKTOK_URL, WHATSAPP_GROUP_URL } from '../data';

function WhatsAppIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TikTokIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.18 8.18 0 004.76 1.52V6.76a4.85 4.85 0 01-1-.07z" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6.5c0-.83.67-1.5 1.5-1.5h1.5V2h-3C9.75 2 7 4.75 7 8h2z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    id: 'whatsapp',
    label: 'Grupo de WhatsApp',
    hint: 'Únete al chat de la campaña',
    href: WHATSAPP_GROUP_URL,
    ariaLabel: 'Abrir grupo de WhatsApp de Sandra Fernández',
    className: 'bg-[#25D366] text-white',
    icon: <WhatsAppIcon />,
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    hint: 'Mira nuestros videos',
    href: TIKTOK_URL,
    ariaLabel: 'Abrir TikTok de Sandra Fernández',
    className: 'bg-black text-white',
    icon: <TikTokIcon />,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    hint: 'Síguenos en Facebook',
    href: FACEBOOK_URL,
    ariaLabel: 'Abrir Facebook de Sandra Fernández',
    className: 'bg-[#1877F2] text-white',
    icon: <FacebookIcon />,
  },
] as const;

function SocialPreviewIcons() {
  return (
    <span className="flex items-center -space-x-1.5 shrink-0" aria-hidden>
      <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-[#25D366] text-white">
        <WhatsAppIcon className="w-3.5 h-3.5" />
      </span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-black text-white">
        <TikTokIcon className="w-3.5 h-3.5" />
      </span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-[#1877F2] text-white">
        <FacebookIcon className="w-3.5 h-3.5" />
      </span>
    </span>
  );
}

export default function SocialFloatButton() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem('social-float-hint-seen');
    if (!seen) {
      const timer = window.setTimeout(() => setShowHint(true), 1800);
      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const handleToggle = () => {
    setShowHint(false);
    sessionStorage.setItem('social-float-hint-seen', '1');
    setOpen((prev) => !prev);
  };

  return (
    <div ref={rootRef} className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[60] flex flex-col items-end gap-3 max-w-[calc(100vw-2rem)]">
      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            className="rounded-2xl bg-black text-white text-sm font-semibold px-4 py-3 shadow-xl border border-zinc-700 max-w-[15rem] text-left leading-snug"
            role="status"
          >
            ¿Quieres escribirnos o seguirnos?
            <span className="block text-[#FFCA00] text-xs font-bold mt-1.5">
              Toca aquí: WhatsApp, TikTok y Facebook
            </span>
            <button
              type="button"
              onClick={() => {
                setShowHint(false);
                sessionStorage.setItem('social-float-hint-seen', '1');
              }}
              className="mt-2 text-[10px] uppercase tracking-wider text-zinc-400 hover:text-white"
            >
              Entendido
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="w-full min-w-[17rem] sm:min-w-[19rem] rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
            role="menu"
            aria-label="Redes sociales de la campaña"
          >
            <div className="bg-black text-white px-4 py-3 border-b-2 border-black">
              <p className="font-sans font-black text-sm">Redes sociales</p>
              <p className="font-sans text-xs text-zinc-300 mt-0.5">
                Elige dónde quieres contactarnos o seguirnos
              </p>
            </div>

            <div className="p-2 space-y-1.5">
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ delay: index * 0.04, duration: 0.2 }}
                  className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCA00] transition-colors"
                  aria-label={link.ariaLabel}
                  id={`social-float-${link.id}`}
                  onClick={() => setOpen(false)}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black shadow-sm ${link.className}`}
                  >
                    {link.icon}
                  </span>
                  <span className="text-left min-w-0">
                    <span className="block font-sans font-bold text-sm text-gray-900 leading-tight">
                      {link.label}
                    </span>
                    <span className="block font-sans text-xs text-gray-500 mt-0.5">
                      {link.hint}
                    </span>
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={
          open
            ? 'Cerrar menú de redes sociales'
            : 'Abrir redes sociales: WhatsApp, TikTok y Facebook'
        }
        id="social-float-toggle"
        className={`relative flex items-center gap-2.5 rounded-full border-2 border-black pl-2.5 pr-3 sm:pl-3 sm:pr-4 py-2 sm:py-2.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCA00] focus-visible:ring-offset-2 ${
          open
            ? 'bg-black text-[#FFCA00] shadow-[0_4px_20px_rgba(0,0,0,0.35)]'
            : 'bg-[#FFCA00] text-black shadow-[0_4px_20px_rgba(255,202,0,0.45)] hover:bg-[#ffe066]'
        }`}
      >
        {!open && (
          <span
            className="absolute inset-0 rounded-full bg-[#FFCA00] animate-ping opacity-20 pointer-events-none"
            aria-hidden
          />
        )}

        <SocialPreviewIcons />

        <span className="relative text-left leading-tight">
          <span className="block font-sans font-black text-sm sm:text-[0.95rem]">
            Redes sociales
          </span>
          <span
            className={`block font-mono text-[9px] sm:text-[10px] uppercase tracking-wide ${
              open ? 'text-[#FFCA00]/80' : 'text-black/65'
            }`}
          >
            {open ? 'Cerrar menú' : 'Toca para ver'}
          </span>
        </span>

        <span className="relative shrink-0 ml-0.5">
          {open ? (
            <X size={22} strokeWidth={2.5} />
          ) : (
            <ChevronUp size={22} strokeWidth={2.5} className="animate-bounce" />
          )}
        </span>
      </button>
    </div>
  );
}
