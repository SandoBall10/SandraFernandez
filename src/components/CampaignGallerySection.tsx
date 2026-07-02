import StickyScrollGallery from './ui/sticky-scroll';

import hero1 from '../assets/hero/1.webp';
import hero4 from '../assets/hero/4.webp';
import hero7 from '../assets/hero/7.webp';
import hero10 from '../assets/hero/10.webp';
import hero14 from '../assets/hero/14.webp';
import hero16 from '../assets/hero/16.webp';
import hero18 from '../assets/hero/18.webp';
import hero20 from '../assets/hero/20.webp';
import caminata1 from '../assets/caminatas/caminata-vecinos/foto (1).webp';
import caminata5 from '../assets/caminatas/caminata-vecinos/foto (5).webp';
import caminata8 from '../assets/caminatas/caminata-vecinos/foto (8).webp';
import madres1 from '../assets/caminatas/homenaje-a-las-madres/foto (1).webp';
import aniv3 from '../assets/caminatas/aniversario32/foto (3).webp';

const LEFT_IMAGES = [
  { src: hero1, alt: 'Vecinos de Nuevo Chimbote en caminata de campaña' },
  { src: hero4, alt: 'Encuentro comunitario con familias del distrito' },
  { src: caminata1, alt: 'Recorrido territorial con vecinos' },
  { src: madres1, alt: 'Homenaje a las madres de Nuevo Chimbote' },
  { src: hero10, alt: 'Actividad de campaña País Para Todos' },
];

const CENTER_IMAGES = [
  { src: hero16, alt: 'Sandra Fernández junto a vecinos de Nuevo Chimbote' },
  { src: hero18, alt: 'Diálogo con la comunidad en territorio' },
  { src: hero20, alt: 'Compromiso con las familias del distrito' },
];

const RIGHT_IMAGES = [
  { src: caminata5, alt: 'Caminata vecinal en Nuevo Chimbote' },
  { src: caminata8, alt: 'Escucha comunitaria con vecinos' },
  { src: aniv3, alt: 'Celebración del aniversario de Nuevo Chimbote' },
  { src: hero7, alt: 'Trabajo de territorio y escucha activa' },
  { src: hero14, alt: 'Momentos de la campaña municipal' },
];

export default function CampaignGallerySection() {
  return (
    <StickyScrollGallery
      title={
        <>
          <span className="text-[#FFCA00]">Nuevo Chimbote</span>
          <br />
          en cada recorrido
        </>
      }
      subtitle="Desliza y descubre imágenes de nuestras caminatas, encuentros y actividades con vecinos de todo el distrito."
      leftImages={LEFT_IMAGES}
      centerImages={CENTER_IMAGES}
      rightImages={RIGHT_IMAGES}
    />
  );
}
