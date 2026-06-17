import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, CheckCircle, Send, Users, Phone, MapPin } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const CAMPAIGN_WHATSAPP = '51912855894';

function buildWhatsAppMessage(data: {
  name: string;
  whatsapp: string;
  barrio: string;
  volunteerRole: string;
  proposal: string;
}) {
  const lines = [
    '¡Hola! Quiero unirme al proyecto de Sandra Fernández.',
    '',
    `*Nombre:* ${data.name}`,
    `*WhatsApp:* ${data.whatsapp}`,
    `*Barrio o sector:* ${data.barrio}`,
    `*Cómo deseo apoyar:* ${data.volunteerRole}`,
  ];

  if (data.proposal.trim()) {
    lines.push(`*Cómo apoyaría / Propuesta:* ${data.proposal.trim()}`);
  }

  lines.push('', '_Enviado desde la web de campaña País Para Todos_');

  return lines.join('\n');
}

export default function JoinForm() {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [barrio, setBarrio] = useState('');
  const [volunteerRole, setVolunteerRole] = useState('Difundir Propuestas');
  const [proposal, setProposal] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState({
    barrio: '',
    volunteerRole: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'El nombre es requerido.';
    if (!whatsapp.trim()) {
      newErrors.whatsapp = 'El número de WhatsApp es requerido.';
    } else if (!/^[0-9+ ]{8,15}$/.test(whatsapp.replace(/\s/g, ''))) {
      newErrors.whatsapp = 'Ingresa un número de celular válido.';
    }
    if (!barrio.trim()) newErrors.barrio = 'El barrio o comuna es requerido.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const message = buildWhatsAppMessage({
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      barrio: barrio.trim(),
      volunteerRole,
      proposal,
    });

    const whatsappUrl = `https://wa.me/${CAMPAIGN_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmittedSummary({ barrio: barrio.trim(), volunteerRole });
    setSubmitted(true);
    setName('');
    setWhatsapp('');
    setBarrio('');
    setProposal('');
    setVolunteerRole('Difundir Propuestas');
    setIsSubmitting(false);
  };

  return (
    <section id="unete" className="py-24 bg-[#FFCA00] relative border-b-2 border-black overflow-hidden">
      
      {/* Visual grids ambient decoration */}
      <div className="absolute inset-0 opacity-15 pointer-events-none select-none z-0">
        <svg className="w-full h-full text-black" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Information panel (5/12) */}
            <div className="lg:col-span-5 bg-black text-white p-8 sm:p-10 flex flex-col justify-between text-left relative">
              <div className="absolute inset-0 bg-radial from-gray-900 via-black to-black opacity-90 z-0" />
              
              <div className="relative z-10 space-y-6">
                <span className="inline-block font-mono text-[10px] font-bold text-[#FFCA00] bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full uppercase tracking-wider">
                  SÚMATE HOY
                </span>
                <h3 className="font-sans font-black text-3xl text-[#FFCA00] leading-tight">
                  Construyamos Juntos un Mejor Municipio
                </h3>
                <p className="font-sans text-sm text-gray-300 leading-relaxed font-medium">
                  El cambio verdadero no se hace detrás de un escritorio, se hace caminando las calles y sumando voluntades. Déjanos tus datos y sé parte del equipo oficial de Sandra Fernández.
                </p>
              </div>

              {/* Informative Items */}
              <div className="relative z-10 space-y-4 pt-8 border-t border-zinc-800 mt-8">
                <div className="flex items-start space-x-3 text-sm">
                  <div className="bg-zinc-950 p-2 rounded-lg text-[#FFCA00] mt-0.5 border border-zinc-800">
                    <Users size={16} />
                  </div>
                  <div>
                    <span className="font-sans font-bold text-white block">Súmate como Voluntario</span>
                    <span className="font-sans text-xs text-zinc-300">Ayúdanos a llevar las propuestas a tu propio barrio.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-sm">
                  <div className="bg-zinc-950 p-2 rounded-lg text-[#FFCA00] mt-0.5 border border-zinc-800">
                    <Send size={16} />
                  </div>
                  <div>
                    <span className="font-sans font-bold text-white block">Actualizaciones Exclusivas</span>
                    <span className="font-sans text-xs text-zinc-300">Recibe las alertas de eventos, debates y noticias directamente en tu móvil.</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 text-[11px] font-mono text-zinc-500">
                Respetamos tu privacidad. Tus datos están 100% seguros y se usarán únicamente para fines informativos de la campaña.
              </div>
            </div>

            {/* Form Capture Panel (7/12) */}
            <div className="lg:col-span-7 p-8 sm:p-10 relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form-join"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    id="volunteer-capture-form"
                  >
                    <div className="space-y-1">
                      <h4 className="font-sans font-black text-xl text-black">
                        Registra tus Datos
                      </h4>
                      <p className="font-sans text-xs text-gray-700 font-medium">
                        Completa los campos para ponernos en contacto contigo en menos de 24 horas.
                      </p>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">
                      {/* Name Fields */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-xs font-black text-black uppercase tracking-wider">
                          Nombre Completo
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Ej. Juan Pérez"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                              if (errors.name) setErrors({ ...errors, name: '' });
                            }}
                            className={`w-full font-sans text-sm p-3.5 pl-4 rounded-xl border-2 bg-gray-50/55 focus:bg-white text-black focus:outline-none transition-all ${
                              errors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-black'
                            }`}
                            id="form-input-name"
                          />
                        </div>
                        {errors.name && (
                          <span className="block font-sans text-xs text-red-500 font-semibold">{errors.name}</span>
                        )}
                      </div>

                      {/* Side by side inputs (WhatsApp + Barrio) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* WhatsApp Celular */}
                        <div className="space-y-1.5 col-span-1">
                          <label className="block font-sans text-xs font-black text-black uppercase tracking-wider flex items-center gap-1.5">
                            <Phone size={12} /> WhatsApp
                          </label>
                          <input
                            type="tel"
                            placeholder="Ej. 912 345 678"
                            value={whatsapp}
                            onChange={(e) => {
                              setWhatsapp(e.target.value);
                              if (errors.whatsapp) setErrors({ ...errors, whatsapp: '' });
                            }}
                            className={`w-full font-sans text-sm p-3.5 pl-4 rounded-xl border-2 bg-gray-50/55 focus:bg-white text-black focus:outline-none transition-all ${
                              errors.whatsapp ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-black'
                            }`}
                            id="form-input-whatsapp"
                          />
                          {errors.whatsapp ? (
                            <span className="block font-sans text-xs text-red-500 font-semibold">{errors.whatsapp}</span>
                          ) : (
                            <span className="block font-sans text-[10px] text-gray-600 font-medium">Ej. 912 345 678</span>
                          )}
                        </div>

                        {/* Barrio o Comuna */}
                        <div className="space-y-1.5 col-span-1">
                          <label className="block font-sans text-xs font-black text-black uppercase tracking-wider flex items-center gap-1.5">
                            <MapPin size={12} /> Barrio o Sector
                          </label>
                          <input
                            type="text"
                            placeholder="Ej. San Martín"
                            value={barrio}
                            onChange={(e) => {
                              setBarrio(e.target.value);
                              if (errors.barrio) setErrors({ ...errors, barrio: '' });
                            }}
                            className={`w-full font-sans text-sm p-3.5 pl-4 rounded-xl border-2 bg-gray-50/55 focus:bg-white text-black focus:outline-none transition-all ${
                              errors.barrio ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-black'
                            }`}
                            id="form-input-barrio"
                          />
                          {errors.barrio && (
                            <span className="block font-sans text-xs text-red-500 font-semibold">{errors.barrio}</span>
                          )}
                        </div>

                      </div>

                      {/* Volunteer Role */}
                      <div className="space-y-1.5">
                        <label className="block font-sans text-xs font-black text-black uppercase tracking-wider">
                          ¿Cómo deseas apoyar?
                        </label>
                        <select
                          value={volunteerRole}
                          onChange={(e) => setVolunteerRole(e.target.value)}
                          className="w-full font-sans text-sm p-3.5 px-4 rounded-xl border-2 border-gray-200 focus:border-black bg-gray-50/55 focus:bg-white text-black focus:outline-none transition-all cursor-pointer"
                          id="form-select-role"
                        >
                          <option value="Difundir Propuestas">Quiero difundir propuestas (Digital/Físico)</option>
                          <option value="Colocar Afiche en Mi Casa">Deseo colocar un afiche en mi fachada</option>
                          <option value="Asistir a Eventos">Quiero asistir a eventos y mitines</option>
                          <option value="Ser Testigo de Mesa">Quiero postularme como Testigo/Defensor del Voto</option>
                          <option value="Donar Ideas">Solo aportar sugerencias técnicas</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="form-input-proposal"
                          className="block font-sans text-xs font-black text-black uppercase tracking-wider"
                        >
                          ¿Cómo apoyarías o qué propuesta tienes?
                        </label>
                        <textarea
                          id="form-input-proposal"
                          rows={4}
                          placeholder="Cuéntanos cómo te gustaría colaborar o comparte una propuesta para tu barrio..."
                          value={proposal}
                          onChange={(e) => setProposal(e.target.value)}
                          className="w-full font-sans text-sm p-3.5 px-4 rounded-xl border-2 border-gray-200 focus:border-black bg-gray-50/55 focus:bg-white text-black focus:outline-none transition-all resize-y min-h-[110px]"
                        />
                      </div>

                    </div>

                    {/* Don Norman's Affordance Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FFCA00] text-black font-sans font-extrabold py-4 px-6 rounded-xl border-2 border-black shadow-[0_4px_12px_rgba(255,202,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,202,0,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5 focus:outline-none cursor-pointer"
                      id="form-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin text-black" />
                          <span>Abriendo WhatsApp...</span>
                        </>
                      ) : (
                        <>
                          <span>Unirme al Proyecto de Sandra</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="form-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="flex flex-col justify-center items-center text-center h-full py-10 space-y-6"
                    id="volunteer-success-view"
                  >
                    <div className="w-16 h-16 bg-[#FFCA00] text-black rounded-full border-2 border-black flex items-center justify-center shadow-lg">
                      <CheckCircle size={32} />
                    </div>
                    
                    <div className="space-y-2 max-w-md">
                      <h4 className="font-sans font-black text-2xl text-black">
                        ¡Gracias por sumarte!
                      </h4>
                      <p className="font-sans text-sm text-gray-600">
                        Tu mensaje se abrió en WhatsApp para el equipo de campaña. Opción seleccionada:
                        <span className="font-sans font-bold text-black border-b-2 border-[#FFCA00] ml-1">
                          &ldquo;{submittedSummary.volunteerRole}&rdquo;
                        </span>.
                      </p>
                      <p className="font-sans text-xs text-gray-700 leading-normal pt-2">
                        Solo falta que envíes el mensaje en WhatsApp para completar tu registro desde{' '}
                        <span className="font-semibold text-black">{submittedSummary.barrio}</span>. Un coordinador de{' '}
                        <strong>País Para Todos</strong> te contactará pronto.
                      </p>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="font-mono text-[10px] font-bold text-gray-700 hover:text-black uppercase tracking-widest border border-gray-300 hover:border-gray-500 px-5 py-2.5 rounded-lg bg-white transition-all focus:outline-none cursor-pointer"
                    >
                      Registrar otro voluntario
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
