import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { AGENDA_EVENTS } from '../data';
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight, Share2, Sparkles, Filter } from 'lucide-react';

export default function AgendaSlider() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string>('Todos');

  const tags = ['Todos', 'Conversatorio', 'Visita Barrio', 'Debate', 'Conferencia'];

  // Filter events based on selected tag
  const filteredEvents = selectedTag === 'Todos'
    ? AGENDA_EVENTS
    : AGENDA_EVENTS.filter(evt => evt.tag === selectedTag);

  // Safely index current event
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredEvents.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredEvents.length - 1 ? 0 : prev + 1));
  };

  const currentEvent = filteredEvents[currentIndex] || null;

  const handleShare = (eventTitle: string) => {
    if (navigator.share) {
      navigator.share({
        title: `Acompaña a Sandra Fernández`,
        text: `Estaré en el evento: "${eventTitle}". ¡Acompáñanos!`,
        url: window.location.href
      }).catch(err => console.log(err));
    } else {
      // Fallback alert clipboard copy
      navigator.clipboard.writeText(`Acompaña a Sandra Fernández en: "${eventTitle}" - Súmate a la campaña.`);
      alert('¡Enlace copiado al portapapeles para compartir con tus vecinos!');
    }
  };

  // Reset slider index when tag changes
  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
    setCurrentIndex(0);
  };

  return (
    <section id="agenda" className="py-24 bg-transparent relative border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="text-left max-w-2xl space-y-3 relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-6 border border-gray-200 shadow-sm">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-900 bg-gray-200 border border-gray-300 px-3 py-1 rounded-full">
              Agenda Electoral
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-gray-900 tracking-tight" id="agenda-header">
              Próximos Eventos y Encuentros Vecinales
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
              Queremos escucharte de primera mano. Revisa nuestra agenda e inscríbete para acompañarnos en tu sector o barrio.
            </p>
          </div>

          {/* Navigation Arrows (Natural mapping) */}
          {filteredEvents.length > 1 && (
            <div className="flex items-center space-x-2 mr-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-black text-black flex items-center justify-center transition-all shadow-sm focus:outline-none cursor-pointer"
                id="agenda-slide-prev"
                title="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-black text-black flex items-center justify-center transition-all shadow-sm focus:outline-none cursor-pointer"
                id="agenda-slide-next"
                title="Siguiente"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Filter Pills Tag Row */}
        <div className="flex flex-wrap gap-2 items-center mb-10 pb-2 border-b border-gray-200/50" id="agenda-filters">
          <span className="text-xs font-sans font-bold text-gray-700 mr-2 flex items-center gap-1">
            <Filter size={12} /> Filtrar por:
          </span>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`font-sans text-xs font-bold py-2 px-4 rounded-full border transition-all cursor-pointer focus:outline-none ${
                selectedTag === tag
                  ? 'bg-black text-white border-black shadow-xs'
                  : 'bg-white text-gray-800 border-gray-300 hover:border-gray-500'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Active Content Carousel Display */}
        <div className="relative max-w-4xl mx-auto min-h-[300px]">
          <AnimatePresence mode="wait">
            {filteredEvents.length > 0 ? (
              <motion.div
                key={currentIndex + (currentEvent ? currentEvent.id : '')}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-12 overflow-hidden"
                id={`agenda-event-card-${currentIndex}`}
              >
                {/* Date Left Card Block (3/12 column) */}
                <div className="md:col-span-3 bg-black text-[#FFCA00] p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r-2 md:border-black">
                  <Calendar size={28} className="text-[#FFCA00] mb-3" />
                  <span className="block font-sans font-black text-3xl tracking-tight leading-none text-white">
                    {currentEvent.date.split(' ')[0]}
                  </span>
                  <span className="block font-mono text-xs font-bold uppercase tracking-widest mt-1 text-[#FFCA00]">
                    {currentEvent.date.split(' ')[1]}
                  </span>
                  <div className="mt-4 border-t border-zinc-800 pt-3 w-full flex justify-center items-center space-x-1.5 text-zinc-100 font-mono text-xs font-semibold">
                    <Clock size={12} className="text-[#FFCA00]" />
                    <span>{currentEvent.time} hrs</span>
                  </div>
                </div>

                {/* Event text info block (9/12 column) */}
                <div className="md:col-span-9 p-8 flex flex-col justify-between space-y-6 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-black bg-[#FFCA00] border border-black px-2.5 py-0.5 rounded uppercase tracking-wider">
                        {currentEvent.tag}
                      </span>
                      <span className="font-mono text-[10px] text-gray-600 font-bold tracking-widest uppercase">
                        Confirmado
                      </span>
                    </div>

                    <h3 className="font-sans font-black text-2xl text-black leading-tight">
                      {currentEvent.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                      {currentEvent.description}
                    </p>
                  </div>

                  {/* Actions & Venue detail */}
                  <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <MapPin size={18} className="text-black" />
                      <span className="font-sans font-bold text-xs sm:text-sm text-gray-900 leading-none">
                        Lugar: <span className="font-sans font-medium text-gray-600">{currentEvent.location}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleShare(currentEvent.title)}
                        className="p-3 rounded-xl border border-gray-200 hover:border-black text-gray-700 hover:text-black transition-all flex items-center justify-center space-x-1.5 text-xs font-bold bg-white cursor-pointer focus:outline-none"
                        title="Compartir evento"
                      >
                        <Share2 size={14} />
                        <span className="hidden sm:inline">Compartir</span>
                      </button>
                      <button
                        onClick={() => navigate('/unete')}
                        className="bg-[#FFCA00] text-black border-2 border-black font-sans font-extrabold text-xs px-5 py-3 rounded-xl hover:bg-black hover:text-[#FFCA00] hover:shadow-[0_4px_12px_rgba(255,202,0,0.3)] transition-all cursor-pointer focus:outline-none flex items-center gap-1.5"
                      >
                        <Sparkles size={12} />
                        <span>Anotarme</span>
                      </button>
                    </div>
                  </div>
                </div>

              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center" id="agenda-empty">
                <p className="font-sans text-base text-gray-700 font-medium">
                  No hay eventos programados en este momento bajo la categoría "{selectedTag}".
                </p>
                <button
                  onClick={() => setSelectedTag('Todos')}
                  className="mt-4 font-sans font-bold text-xs bg-black text-[#FFCA00] px-4 py-2 rounded-lg"
                >
                  Ver todos los eventos
                </button>
              </div>
            )}
          </AnimatePresence>

          {/* Indicator Dot Counters */}
          {filteredEvents.length > 1 && (
            <div className="flex justify-center items-center space-x-1.5 mt-8">
              {filteredEvents.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none ${
                    currentIndex === idx ? 'bg-black w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir al evento ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
