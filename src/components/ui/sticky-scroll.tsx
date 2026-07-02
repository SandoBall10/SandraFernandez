import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

export interface StickyScrollGalleryProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  leftImages: { src: string; alt: string }[];
  centerImages: { src: string; alt: string }[];
  rightImages: { src: string; alt: string }[];
  /** Solo para demos a pantalla completa; no usar en páginas con scroll global. */
  useLenisRoot?: boolean;
}

const StickyScrollGallery = forwardRef<HTMLElement, StickyScrollGalleryProps>(
  (
    {
      title,
      subtitle,
      leftImages,
      centerImages,
      rightImages,
      useLenisRoot = false,
    },
    ref
  ) => {
    const content = (
      <section
        ref={ref}
        id="galeria"
        className="relative z-10 bg-black text-white"
        aria-label="Galería de la campaña"
      >
        <div className="wrapper">
          <section className="text-white min-h-[min(38vh,20rem)] py-10 sm:py-12 w-full bg-zinc-950 grid place-content-center sticky top-0 z-20 isolate">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="relative z-10 px-6 sm:px-10 text-center space-y-3 max-w-4xl mx-auto">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
                Territorio y comunidad
              </p>
              <h2 className="font-sans font-black text-4xl sm:text-5xl 2xl:text-6xl tracking-tight leading-[115%] text-white">
                {title}
              </h2>
              {subtitle && (
                <p className="font-sans text-base sm:text-lg text-gray-200 font-medium leading-relaxed max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          </section>
        </div>

        <section className="text-white w-full bg-zinc-950 px-2 sm:px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-start">
            <div className="grid gap-2 lg:col-span-4">
              {leftImages.map((image) => (
                <figure key={image.src} className="w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="transition-all duration-300 w-full h-72 sm:h-80 lg:h-96 object-cover rounded-md border border-zinc-800"
                  />
                </figure>
              ))}
            </div>

            <div className="hidden lg:grid lg:col-span-4 gap-2 sticky top-0 h-screen w-full grid-rows-3 self-start">
              {centerImages.map((image) => (
                <figure key={image.src} className="w-full h-full min-h-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="transition-all duration-300 h-full w-full object-cover rounded-md border border-zinc-800"
                  />
                </figure>
              ))}
            </div>

            <div className="grid gap-2 lg:col-span-4">
              {centerImages.map((image) => (
                <figure key={`mobile-${image.src}`} className="w-full lg:hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="transition-all duration-300 w-full h-72 sm:h-80 object-cover rounded-md border border-zinc-800"
                  />
                </figure>
              ))}
              {rightImages.map((image) => (
                <figure key={image.src} className="w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="transition-all duration-300 w-full h-72 sm:h-80 lg:h-96 object-cover rounded-md border border-zinc-800"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      </section>
    );

    if (useLenisRoot) {
      return <ReactLenis root>{content}</ReactLenis>;
    }

    return content;
  }
);

StickyScrollGallery.displayName = 'StickyScrollGallery';

export default StickyScrollGallery;
