import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import FlipClock from './FlipClock';
import logoImg from '@/src/assets/logo.png';

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of footer/navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'Inicio', target: 'inicio' },
    { label: 'Sandra', target: 'nosotros' },
    { label: 'Plan de Gobierno', target: 'plan' },
    { label: 'Agenda', target: 'agenda' },
  ];

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
            onClick={() => scrollToSection('inicio')}
            className="flex items-center space-x-3 group text-left focus:outline-none"
            id="brand-logo-btn"
          >
            {/* Actual custom Logo of "País Para Todos" with curving road and brand elements */}
            <div className="relative w-11 h-11 flex items-center justify-center rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img
                src={logoImg}
                alt="Logo País Para Todos"
                className="w-full h-full object-contain"
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
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="font-sans text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 relative py-1 group focus:outline-none"
                id={`nav-${link.target}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFCA00] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
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
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="font-sans text-base font-semibold text-gray-800 hover:text-[#FFCA00] text-left py-2 border-b border-gray-50 focus:outline-none"
                id={`nav-mob-${link.target}`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex justify-center pt-4 border-t border-gray-100">
              <FlipClock />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
