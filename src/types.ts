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

export interface WalkCampaign {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  date: string;
  backgroundImage: string;
  videoUrl: string;
  videoPoster?: string;
  galleryImages: string[];
  achievements: string[];
}

