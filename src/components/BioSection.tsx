import React from 'react';
import { motion } from 'motion/react';
import { CANDIDATE_INFO } from '../data';
import { Award, BookOpen, Briefcase, ShieldCheck } from 'lucide-react';

const { perfil, educacion, experiencia, auditoria } = CANDIDATE_INFO;

export default function BioSection() {
  return (
    <section id="nosotros" className="py-24 bg-transparent border-y border-gray-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            Conoce a la Candidata
          </span>
          <h2 className="mt-4 font-sans font-black text-3xl sm:text-4xl text-gray-900 tracking-tight" id="bio-header">
            {perfil.titulo}
          </h2>
          <p className="mt-3 font-mono text-[10px] text-gray-400 uppercase tracking-wider">
            Información verificada — Certificado Único Laboral MTPE N° {auditoria.certificado}
          </p>
          <div className="mt-2 w-16 h-1 bg-[#FFCA00] mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-200/60 shadow-sm space-y-6">
              <h3 className="font-sans font-extrabold text-2xl text-black">
                {perfil.nombre}
              </h3>
              <p className="font-sans text-base text-gray-700 leading-relaxed">
                {perfil.bio}
              </p>

              <div className="space-y-4 pt-4 border-t border-gray-200">
                <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-gray-500 flex items-center gap-2">
                  <BookOpen size={16} className="text-black" />
                  Formación universitaria
                  <span className="font-mono text-[9px] text-gray-400 normal-case tracking-normal">— Fuente SUNEDU</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {educacion.map((edu, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                      <span className="block font-sans font-bold text-sm text-black leading-snug uppercase">
                        {edu.grado}
                      </span>
                      <span className="block font-sans text-xs text-gray-500 mt-1">
                        {edu.detalle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" id="bio-stats">
              {perfil.estadisticas.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#FFCA00] p-5 rounded-xl border-2 border-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default"
                >
                  <span className="block font-sans font-black text-3xl text-black">
                    {stat.valor}
                  </span>
                  <span className="block font-sans text-[10px] font-bold text-black mt-1 uppercase tracking-wider leading-tight">
                    {stat.etiqueta}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-black text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-gray-900 via-black to-black opacity-90 z-0" />
            
            <div className="relative z-10 space-y-6">
              <h3 className="font-sans font-black text-2xl text-[#FFCA00] flex items-center gap-2.5">
                <Briefcase size={22} className="text-[#FFCA00]" />
                Experiencia laboral
              </h3>
              <p className="font-sans text-sm text-gray-400">
                Registros en planillas electrónicas del sector público, región Áncash.
                <span className="block font-mono text-[10px] text-gray-500 mt-1">Fuente: MTPE — Planillas Electrónicas</span>
              </p>

              <div className="mt-6 space-y-6 relative before:absolute before:top-1.5 before:bottom-1.5 before:left-3 before:w-0.5 before:bg-zinc-800">
                {experiencia.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    <div className="absolute left-1.5 top-2 w-3 h-3 rounded-full bg-[#FFCA00] border-4 border-black group-hover:scale-125 transition-transform duration-200 z-10" />
                    
                    <span className="inline-block font-mono text-[10px] font-bold text-[#FFCA00] tracking-wider bg-[#FFCA00]/10 border border-[#FFCA00]/20 px-2 py-0.5 rounded-md">
                      {exp.periodo}
                    </span>
                    <h4 className="mt-2 font-sans font-bold text-sm text-white group-hover:text-[#FFCA00] transition-colors leading-snug">
                      {exp.entidad}
                    </h4>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-800 space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#FFCA00] shrink-0" />
                  <span className="font-sans text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Antecedentes — CUL {auditoria.certificado}
                  </span>
                </div>

                <ul className="space-y-2">
                  {auditoria.antecedentes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-gray-400 leading-snug">
                      <Award size={12} className="text-[#FFCA00] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-300">{item.tipo}</strong>
                        {' '}({item.fuente}): {item.resultado}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="font-mono text-[9px] text-gray-500 leading-relaxed">
                  Emitido el {auditoria.emision}. Vigencia: {auditoria.vigencia}.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
