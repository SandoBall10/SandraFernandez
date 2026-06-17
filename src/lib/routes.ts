export interface SiteRoute {
  path: string;
  sectionId: string;
  label: string;
  title: string;
  description: string;
  sitemapPriority: number;
  sitemapChangefreq: 'weekly' | 'monthly';
}

export const SITE_URL = 'https://sandrafernandez.pe';

export const SITE_ROUTES: SiteRoute[] = [
  {
    path: '/',
    sectionId: 'inicio',
    label: 'Inicio',
    title: 'Sandra Fernández | País Para Todos — Candidata a la Alcaldía',
    description:
      'Conoce a Sandra Fernández, su plan de gobierno, caminatas con vecinos y agenda de campaña para Nuevo Chimbote. País Para Todos.',
    sitemapPriority: 1.0,
    sitemapChangefreq: 'weekly',
  },
  {
    path: '/sandra',
    sectionId: 'nosotros',
    label: 'Sandra',
    title: 'Sandra Fernández — Trayectoria y Compromiso | País Para Todos',
    description:
      'Trayectoria, formación y experiencia de Sandra Verónica Fernández Beltrán. Abogada comprometida con Nuevo Chimbote.',
    sitemapPriority: 0.9,
    sitemapChangefreq: 'monthly',
  },
  {
    path: '/plan-gobierno',
    sectionId: 'plan',
    label: 'Plan de Gobierno',
    title: 'Plan de Gobierno Municipal | Sandra Fernández',
    description:
      'Descarga y conoce el plan de gobierno de Sandra Fernández para un Nuevo Chimbote moderno, seguro y participativo.',
    sitemapPriority: 0.9,
    sitemapChangefreq: 'monthly',
  },
  {
    path: '/caminatas',
    sectionId: 'caminatas',
    label: 'Caminatas',
    title: 'Las Caminatas de Sandra | Territorio y Escucha',
    description:
      'Recorridos y encuentros con vecinos de Nuevo Chimbote. Fotos y relatos de las caminatas de campaña de Sandra Fernández.',
    sitemapPriority: 0.85,
    sitemapChangefreq: 'weekly',
  },
  {
    path: '/agenda',
    sectionId: 'agenda',
    label: 'Agenda',
    title: 'Agenda de Encuentros | Campaña Sandra Fernández',
    description:
      'Eventos, mitines y actividades de la campaña País Para Todos. Acompaña a Sandra Fernández en Nuevo Chimbote.',
    sitemapPriority: 0.8,
    sitemapChangefreq: 'weekly',
  },
  {
    path: '/unete',
    sectionId: 'unete',
    label: 'Únete',
    title: 'Únete a la Campaña | Sandra Fernández',
    description:
      'Regístrate como voluntario y suma tu apoyo a la campaña de Sandra Fernández por un mejor municipio en Nuevo Chimbote.',
    sitemapPriority: 0.75,
    sitemapChangefreq: 'monthly',
  },
];

export const NAV_ROUTES = SITE_ROUTES.filter((route) =>
  ['/', '/sandra', '/plan-gobierno', '/agenda'].includes(route.path)
);

export function getRouteByPath(pathname: string): SiteRoute {
  return SITE_ROUTES.find((route) => route.path === pathname) ?? SITE_ROUTES[0];
}
