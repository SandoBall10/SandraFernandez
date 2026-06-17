export interface CampaignVideo {
  id: string;
  /** URL de YouTube, TikTok o Facebook */
  url: string;
  title: string;
  description?: string;
  tag?: 'Caminata' | 'Mensaje' | 'Evento' | 'Entrevista' | 'Otro';
  /** Miniatura opcional si la plataforma no la provee (p. ej. TikTok) */
  posterUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface WalkCampaignMeta {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  date: string;
  achievements: string[];
  videoUrl?: string;
}

export interface WalkCampaign extends WalkCampaignMeta {
  backgroundImage: string;
  galleryImages: string[];
  videoUrl: string;
  videoPoster?: string;
}

