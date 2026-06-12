import React from 'react';
import { Heart } from 'lucide-react';
import logoImg from '@/src/assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 relative overflow-hidden" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left mb-12">
          
          {/* Logo & Manifesto Block - 5 columns */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden shadow-md bg-white">
                <img
                  src={logoImg}
                  alt="Logo País Para Todos"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block font-sans font-black text-lg text-white leading-none">
                  Sandra Fernández
                </span>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-[#FFCA00] mt-0.5">
                  País Para Todos
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Trabajamos por un gobierno municipal participativo, libre de sectarismos y enfocado plenamente en reactivación sostenible, seguridad de proximidad y transparencia absoluta del recurso común.
            </p>
          </div>

          {/* Quick Shortcuts - 3 columns */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-black text-sm uppercase tracking-widest text-[#FFCA00]">
              Campaña
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-[#FFCA00] transition-colors leading-none">Inicio</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#FFCA00] transition-colors leading-none">Sandra Fernández</a>
              </li>
              <li>
                <a href="#plan" className="hover:text-[#FFCA00] transition-colors leading-none">Plan de Gobierno</a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-[#FFCA00] transition-colors leading-none">Agenda de Encuentros</a>
              </li>
            </ul>
          </div>

          {/* Transparent Contact info & Socials - 4 columns */}
          <div className="md:col-span-4 space-y-5">
            <div>
              <h4 className="font-sans font-black text-sm uppercase tracking-widest text-[#FFCA00] mb-3">
                Contacto Oficial
              </h4>
              <p className="font-sans text-xs text-gray-400 leading-snug">
                Sede Central de Campaña: Calle de la Constitución #42, Oficina 301 <br />
                Contacto de prensa: <span className="text-zinc-200">prensa@sandraalcaldesa.org</span>
              </p>
            </div>

            {/* Micro networks elements */}
            <div className="flex items-center space-x-3.5" id="footer-socials">
              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#FFCA00] hover:text-black text-white flex items-center justify-center border border-zinc-800 hover:border-black transition-all shadow-sm"
                aria-label="Ir a Facebook de Sandra Fernández"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6.5c0-.83.67-1.5 1.5-1.5h1.5V2h-3C9.75 2 7 4.75 7 8h2z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#FFCA00] hover:text-black text-white flex items-center justify-center border border-zinc-800 hover:border-black transition-all shadow-sm"
                aria-label="Ir a Twitter de Sandra Fernández"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#FFCA00] hover:text-black text-white flex items-center justify-center border border-zinc-800 hover:border-black transition-all shadow-sm"
                aria-label="Ir a Instagram de Sandra Fernández"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Separator and Policy details */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4" id="footer-copyright-and-terms">
          
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <span className="hover:text-[#FFCA00] cursor-pointer">Defensa del Voto</span>
            <span>•</span>
            <span className="hover:text-[#FFCA00] cursor-pointer">Política de Privacidad</span>
            <span>•</span>
            <span className="hover:text-[#FFCA00] cursor-pointer">Código Ético del Candidato</span>
          </div>

          <div className="flex items-center space-x-1">
            <span>© 2026 Campaña Sandra Alcaldesa. Creatividad para </span>
            <span className="text-[#FFCA00] font-bold">País Para Todos</span>
            <Heart size={10} className="text-red-500 fill-current ml-1" />
          </div>

        </div>

      </div>
    </footer>
  );
}
