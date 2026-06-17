import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Video, Filter, ExternalLink, Sparkles } from 'lucide-react';
import { CAMPAIGN_VIDEOS } from '../data';
import { CampaignVideo } from '../types';
import { parseVideoUrl, platformLabel, VideoPlatform } from '../lib/videoEmbed';
import RevealOnScroll from './RevealOnScroll';

const VIDEO_TAGS = ['Todos', 'Caminata', 'Mensaje', 'Evento', 'Entrevista', 'Otro'] as const;

interface VideoItem extends CampaignVideo {
  embedUrl: string;
  thumbnailUrl: string | null;
  platform: VideoPlatform;
  isVertical: boolean;
}

function buildVideoItems(videos: CampaignVideo[]): VideoItem[] {
  return videos
    .map((video) => {
      const parsed = parseVideoUrl(video.url);
      if (!parsed) return null;
      return {
        ...video,
        embedUrl: parsed.embedUrl,
        thumbnailUrl: video.posterUrl ?? parsed.thumbnailUrl,
        platform: parsed.platform,
        isVertical: parsed.isVertical ?? false,
      };
    })
    .filter((item): item is VideoItem => item !== null);
}

function FeaturedVideoShowcase({ video }: { video: VideoItem }) {
  return (
    <RevealOnScroll className="relative z-10" id="videos-featured">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
        {/* Panel de texto */}
        <div className="lg:col-span-4 order-2 lg:order-1 text-left space-y-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-gray-900 bg-[#FFCA00] border-2 border-black px-3 py-1.5 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles size={14} />
              Video destacado
            </span>
            <h2
              className="font-sans font-black text-3xl sm:text-4xl lg:text-[2.6rem] text-gray-900 tracking-tight leading-[1.1]"
              id="videos-header"
            >
              La Campaña en{' '}
              <span className="relative inline-block">
                Movimiento
                <span className="absolute left-0 bottom-1 w-full h-3 bg-[#FFCA00] -z-10 -rotate-1" />
              </span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
              Mira el mensaje de Sandra Fernández y comparte la propuesta de un gobierno municipal
              participativo para todas las familias de Nuevo Chimbote.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-black p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-black text-[#FFCA00] px-2.5 py-1 rounded-md">
                {platformLabel(video.platform)}
              </span>
              {video.tag && (
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-900 bg-gray-100 border border-gray-300 px-2.5 py-1 rounded-full">
                  {video.tag}
                </span>
              )}
            </div>
            <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-gray-900 leading-snug">
              {video.title}
            </h3>
            {video.description && (
              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">
                {video.description}
              </p>
            )}
          </div>
        </div>

        {/* Reproductor */}
        <div className="lg:col-span-8 order-1 lg:order-2 flex justify-center lg:justify-end w-full">
          <div
            className={`relative w-full ${
              video.isVertical
                ? 'max-w-[min(100%,440px)]'
                : 'max-w-2xl sm:max-w-3xl lg:max-w-none'
            }`}
          >
            <div
              className="absolute -inset-3 sm:-inset-4 rounded-[1.75rem] bg-[#FFCA00] border-2 border-black -rotate-2 pointer-events-none"
              aria-hidden
            />
            <div className="relative bg-black rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <div
                className={`relative w-full bg-zinc-950 ${
                  video.isVertical
                    ? 'aspect-[9/16] max-h-[min(82vh,760px)]'
                    : 'aspect-video min-h-[220px] sm:min-h-[280px] lg:min-h-[360px]'
                }`}
              >
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
              <div className="px-4 py-3 bg-black border-t-2 border-[#FFCA00]/40 flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FFCA00]">
                  País Para Todos
                </span>
                <span className="font-sans text-[11px] text-zinc-400 font-medium">
                  Sandra Fernández
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function VideosSection() {
  const [selectedTag, setSelectedTag] = useState<string>('Todos');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const allVideos = useMemo(() => buildVideoItems(CAMPAIGN_VIDEOS), []);
  const isSingleFeatured = allVideos.length === 1;

  const filteredVideos =
    selectedTag === 'Todos'
      ? allVideos
      : allVideos.filter((video) => video.tag === selectedTag);

  const availableTags = useMemo(() => {
    const used = new Set(allVideos.map((v) => v.tag).filter(Boolean));
    return VIDEO_TAGS.filter((tag) => tag === 'Todos' || used.has(tag as CampaignVideo['tag']));
  }, [allVideos]);

  useEffect(() => {
    if (!activeVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeVideo]);

  return (
    <section id="videos" className="py-20 lg:py-28 bg-transparent relative border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isSingleFeatured && (
          <RevealOnScroll className="text-left max-w-2xl space-y-3 relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-6 border border-gray-200 shadow-sm mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-900 bg-gray-200 border border-gray-300 px-3 py-1 rounded-full">
              En Video
            </span>
            <h2
              className="font-sans font-black text-3xl sm:text-4xl text-gray-900 tracking-tight"
              id="videos-header"
            >
              La Campaña en Movimiento
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
              Caminatas, mensajes y momentos de la campaña. Los videos se cargan al reproducirlos para no
              ralentizar la página.
            </p>
          </RevealOnScroll>
        )}

        {allVideos.length > 1 && availableTags.length > 2 && (
          <div
            className="flex flex-wrap gap-2 items-center mb-10 pb-2 border-b border-gray-200/50 relative z-10"
            id="videos-filters"
          >
            <span className="text-xs font-sans font-bold text-gray-700 mr-2 flex items-center gap-1">
              <Filter size={12} /> Filtrar por:
            </span>
            {availableTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
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
        )}

        {filteredVideos.length > 0 ? (
          isSingleFeatured ? (
            <FeaturedVideoShowcase video={filteredVideos[0]} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {filteredVideos.map((video) => (
                <motion.article
                  key={video.id}
                  layout
                  className="group bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                >
                  <button
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className={`relative w-full bg-gray-900 overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCA00] focus-visible:ring-offset-2 ${
                      video.isVertical ? 'aspect-[9/16] max-h-[420px] mx-auto' : 'aspect-video'
                    }`}
                    aria-label={`Reproducir: ${video.title}`}
                  >
                    {video.thumbnailUrl ? (
                      <img
                        src={video.thumbnailUrl}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center">
                        <Video size={40} className="text-[#FFCA00]/60" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-14 h-14 rounded-full bg-[#FFCA00] border-2 border-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={24} className="text-black ml-1" fill="currentColor" />
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 font-mono text-[10px] font-bold uppercase tracking-wider bg-black/80 text-[#FFCA00] px-2 py-1 rounded-md border border-[#FFCA00]/30">
                      {platformLabel(video.platform)}
                    </span>
                  </button>

                  <div className="p-4 text-left space-y-2">
                    {video.tag && (
                      <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-gray-800 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">
                        {video.tag}
                      </span>
                    )}
                    <h3 className="font-sans font-extrabold text-base text-gray-900 leading-snug">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="font-sans text-sm text-gray-700 leading-relaxed line-clamp-2">
                        {video.description}
                      </p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )
        ) : (
          <div
            className="relative z-10 bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 sm:p-16 text-center max-w-2xl mx-auto"
            id="videos-empty"
          >
            <div className="w-16 h-16 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto mb-5">
              <Video size={28} className="text-gray-700" />
            </div>
            <p className="font-sans text-lg font-bold text-gray-900">
              Pronto publicaremos videos de la campaña
            </p>
            <p className="font-sans text-sm text-gray-700 mt-2 max-w-md mx-auto leading-relaxed">
              Aquí aparecerán clips de caminatas, mensajes y actividades. Se añaden desde{' '}
              <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">src/data.ts</code>{' '}
              pegando la URL de YouTube, TikTok o Facebook.
            </p>
          </div>
        )}
      </div>

      {activeVideo &&
        createPortal(
          <AnimatePresence>
            <motion.div
              key="videos-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                transition={{ duration: 0.2 }}
                className={`relative w-full bg-black rounded-2xl border-2 border-[#FFCA00] shadow-2xl overflow-hidden ${
                  activeVideo.isVertical ? 'max-w-md' : 'max-w-4xl'
                }`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={activeVideo.title}
              >
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-[#FFCA00] text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Cerrar video"
                >
                  <X size={20} />
                </button>

                <div
                  className={`relative w-full bg-black ${
                    activeVideo.isVertical ? 'aspect-[9/16] max-h-[80vh]' : 'aspect-video'
                  }`}
                >
                  <iframe
                    src={activeVideo.embedUrl}
                    title={activeVideo.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    scrolling="no"
                  />
                </div>

                <div className="px-5 py-4 text-left border-t border-zinc-800">
                  <h3 className="font-sans font-extrabold text-lg text-white">{activeVideo.title}</h3>
                  {activeVideo.description && (
                    <p className="font-sans text-sm text-zinc-300 mt-1">{activeVideo.description}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
