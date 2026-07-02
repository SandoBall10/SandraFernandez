import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import FlipClock from './FlipClock';
import logoImg from '@/src/assets/logo.webp';
import { NAV_ROUTES } from '../lib/routes';
import { scrollToSectionById } from '../lib/scrollToSection';

function measureHeaderHeight(): number {
  return document.getElementById('main-header')?.offsetHeight ?? 128;
}

function getActiveNavSectionId(): string {
  const headerH = measureHeaderHeight();
  const probe = window.scrollY + headerH + 96;

  let current = NAV_ROUTES[0].sectionId;
  for (const route of NAV_ROUTES) {
    const element = document.getElementById(route.sectionId);
    if (element && element.offsetTop <= probe) {
      current = route.sectionId;
    }
  }

  return current;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(NAV_ROUTES[0].sectionId);
  const navigate = useNavigate();
  const location = useLocation();

  const syncActiveSection = useCallback(() => {
    setActiveSectionId(getActiveNavSectionId());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      syncActiveSection();
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [syncActiveSection]);

  useEffect(() => {
    const navRoute = NAV_ROUTES.find((route) => route.path === location.pathname);
    if (navRoute) {
      setActiveSectionId(navRoute.sectionId);
    }

    const timer = window.setTimeout(syncActiveSection, 400);
    return () => window.clearTimeout(timer);
  }, [location.pathname, syncActiveSection]);

  const goToRoute = (path: string, sectionId: string) => {
    setIsOpen(false);
    setActiveSectionId(sectionId);
    if (location.pathname === path) {
      scrollToSectionById(sectionId);
    } else {
      navigate(path);
    }
  };

  const isNavActive = (sectionId: string) => activeSectionId === sectionId;

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
    >
      {/* Campaign urgent announcement tier */}
      <div className="bg-black text-[#FFCA00] text-[11px] font-mono py-2 px-4 shadow-inner text-center z-40 relative flex items-center justify-center gap-2 w-full">
        <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#FFCA00] animate-ping" />
        <span className="uppercase tracking-widest font-semibold text-center leading-snug max-w-4xl">
          Muy pronto te mostraremos los próximos eventos para que nos acompañes. ¡Mantente atento!
        </span>
      </div>

      <div
        className={`transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => goToRoute('/', 'inicio')}
            className="flex items-center space-x-3 group text-left focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="relative w-11 h-11 flex items-center justify-center rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img
                src={logoImg}
                alt="Logo País Para Todos"
                className="w-full h-full object-contain"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div>
              <span className="block font-sans font-extrabold text-lg text-black tracking-tight leading-none">
                Sandra <span className="text-[#FFCA00] bg-black px-1.5 py-0.5 rounded ml-0.5">Fernández</span>
              </span>
              <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-0.5 font-medium">
                País Para Todos
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {NAV_ROUTES.map((link) => {
              const active = isNavActive(link.sectionId);
              return (
              <button
                key={link.path}
                onClick={() => goToRoute(link.path, link.sectionId)}
                className={`group font-sans text-sm font-medium transition-colors duration-200 relative py-1 focus:outline-none ${
                  active ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
                }`}
                id={`nav-${link.sectionId}`}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#FFCA00] transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
            })}
          </nav>

          {/* Action CTA / Flip Clock Elections Countdown */}
          <div className="hidden md:flex items-center">
            <FlipClock />
          </div>

          {/* Mobile Hamburguer Menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-[#FFCA00] transition-colors p-1"
              id="mobile-menu-btn"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl px-4 py-6 md:hidden animate-fade-in"
        >
          <div className="flex flex-col space-y-4">
            {NAV_ROUTES.map((link) => {
              const active = isNavActive(link.sectionId);
              return (
              <button
                key={link.path}
                onClick={() => goToRoute(link.path, link.sectionId)}
                className={`font-sans text-base font-semibold text-left py-2 border-b border-gray-50 focus:outline-none transition-colors ${
                  active ? 'text-black' : 'text-gray-800 hover:text-black'
                }`}
                id={`nav-mob-${link.sectionId}`}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </button>
            );
            })}
            <div className="flex justify-center pt-4 border-t border-gray-100">
              <FlipClock />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
