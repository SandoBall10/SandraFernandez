import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '@/src/assets/logo.png';
import ztLogoImg from '@/src/assets/zt.png';
import { SITE_ROUTES } from '../lib/routes';

const ZENTRITSOFT_INSTAGRAM = 'https://www.instagram.com/zentritsoft/';
const TIKTOK_URL = 'https://www.tiktok.com/@laabogadadelpuebloof?is_from_webapp=1&sender_device=pc';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100063531207297';

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
              {SITE_ROUTES.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className="hover:text-[#FFCA00] transition-colors leading-none"
                  >
                    {route.path === '/sandra'
                      ? 'Sandra Fernández'
                      : route.path === '/agenda'
                        ? 'Agenda de Encuentros'
                        : route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto oficial — redes sociales */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans font-black text-sm uppercase tracking-widest text-[#FFCA00]">
              Contacto Oficial
            </h4>

            <div className="flex items-center space-x-3.5" id="footer-socials">
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#FFCA00] hover:text-black text-white flex items-center justify-center border border-zinc-800 hover:border-black transition-all shadow-sm"
                aria-label="Ir a TikTok de Sandra Fernández"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.18 8.18 0 004.76 1.52V6.76a4.85 4.85 0 01-1-.07z" />
                </svg>
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-[#FFCA00] hover:text-black text-white flex items-center justify-center border border-zinc-800 hover:border-black transition-all shadow-sm"
                aria-label="Ir a Facebook de Sandra Fernández"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6.5c0-.83.67-1.5 1.5-1.5h1.5V2h-3C9.75 2 7 4.75 7 8h2z" />
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

          <a
            href={ZENTRITSOFT_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#FFCA00] transition-colors"
            aria-label="Desarrollado por ZentrIT - Instagram"
          >
            <span>Desarrollado por</span>
            <img
              src={ztLogoImg}
              alt="ZentrIT"
              className="h-5 w-auto object-contain"
            />
            <span className="font-medium">zentritsoft</span>
          </a>

        </div>

      </div>
    </footer>
  );
}
