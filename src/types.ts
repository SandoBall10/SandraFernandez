export interface AgendaEvent {
  id: string;
  date: string;
  time: string;
  title: string;
  location: string;
  description: string;
  tag: 'Mitin' | 'Debate' | 'Conversatorio' | 'Visita Barrio' | 'Conferencia';
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

