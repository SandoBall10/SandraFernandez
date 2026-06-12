import React from 'react';
import { motion } from 'motion/react';
import { CANDIDATE_INFO } from '../data';
import { Award, BookOpen, Briefcase, ChevronRight } from 'lucide-react';

export default function BioSection() {
  return (
    <section id="nosotros" className="py-24 bg-white border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            Conoce a la Candidata
          </span>
          <h2 className="mt-4 font-sans font-black text-3xl sm:text-4xl text-gray-900 tracking-tight" id="bio-header">
            Trayectoria, Preparación y Compromiso Real
          </h2>
          <div className="mt-2 w-16 h-1 bg-[#FFCA00] mx-auto rounded" />
        </div>

        {/* Bento Grid Layout - Proximity and Closure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column Left: Biography & Stats (7 channels / 12) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-200/60 shadow-sm space-y-6">
              <h3 className="font-sans font-extrabold text-2xl text-black">
                ¿Quién es Sandra Fernández?
              </h3>
              <p className="font-sans text-base text-gray-700 leading-relaxed">
                {CANDIDATE_INFO.briefBio}
              </p>
              <blockquote className="border-l-4 border-[#FFCA00] pl-4 py-1 italic font-sans text-gray-600 font-medium">
                "La alcaldía no es un cargo para lucirse, sino un puesto para servir con planificación técnica y proximidad absoluta al ciudadano."
              </blockquote>

              {/* Education Sub-block */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-gray-500 flex items-center gap-2">
                  <BookOpen size={16} className="text-black" />
                  Educación y Preparación Académica
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CANDIDATE_INFO.education.map((edu, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                      <span className="block font-sans font-bold text-sm text-black leading-snug">
                        {edu.degree}
                      </span>
                      <span className="block font-sans text-xs text-gray-500 mt-1">
                        {edu.university}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Campaign Stats Panel */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" id="bio-stats">
              {CANDIDATE_INFO.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#FFCA00] p-5 rounded-xl border-2 border-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default"
                >
                  <span className="block font-sans font-black text-3xl text-black">
                    {stat.value}
                  </span>
                  <span className="block font-sans text-xs font-bold text-black mt-1 uppercase tracking-wider leading-none">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column Right: Interactive Experience Timeline (5 channels / 12) */}
          <div className="lg:col-span-5 bg-black text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-gray-900 via-black to-black opacity-90 z-0" />
            
            <div className="relative z-10 space-y-6">
              <h3 className="font-sans font-black text-2xl text-[#FFCA00] flex items-center gap-2.5">
                <Briefcase size={22} className="text-[#FFCA00]" />
                Experiencia 
              </h3>
              <p className="font-sans text-sm text-gray-400">
                Doce años de resultados cuantificables en administración local y participación comunitaria ciudadana.
              </p>

              {/* Timeline Container */}
              <div className="mt-8 space-y-8 relative before:absolute before:top-1.5 before:bottom-1.5 before:left-3 before:w-0.5 before:bg-zinc-800">
                {CANDIDATE_INFO.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    {/* Bullet marker */}
                    <div className="absolute left-1.5 top-2 w-3 h-3 rounded-full bg-[#FFCA00] border-4 border-black group-hover:scale-125 transition-transform duration-200 z-10" />
                    
                    <span className="inline-block font-mono text-xs font-bold text-[#FFCA00] tracking-wider uppercase bg-[#FFCA00]/10 border border-[#FFCA00]/20 px-2.5 py-0.5 rounded-md">
                      {exp.year}
                    </span>
                    <h4 className="mt-2 font-sans font-black text-base text-white group-hover:text-[#FFCA00] transition-colors">
                      {exp.role}
                    </h4>
                    <p className="mt-1 font-sans text-sm text-gray-400 leading-snug">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-6 border-t border-zinc-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award size={18} className="text-[#FFCA00]" />
                  <span className="font-sans text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Perfil 100% Auditorado
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#FFCA00] uppercase font-bold tracking-widest bg-[#FFCA00]/10 px-2 py-0.5 rounded">
                  TRANSPARENTE
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
