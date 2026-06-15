import { AgendaEvent, Testimonial, WalkCampaignMeta } from './types';
import { buildWalkCampaigns } from './lib/walkAssets';

export const CANDIDATE_INFO = {
  name: 'Sandra Fernández',
  tagline: 'Liderazgo, Gestión y Corazón para Nuestro Municipio',
  party: 'País Para Todos',
  perfil: {
    nombre: 'Sandra Verónica Fernández Beltrán',
    titulo: 'Trayectoria, Preparación y Compromiso Real',
    bio: 'Según el Certificado Único Laboral del MTPE, es abogada de la Universidad Nacional Pedro Ruiz Gallo y bachiller en Derecho de la Universidad San Pedro (fuente SUNEDU). Su experiencia laboral registrada en planillas electrónicas incluye municipalidades distritales y provinciales de la región Áncash, entre otras entidades del sector público.',
    estadisticas: [
      { valor: '0', etiqueta: 'ANTECEDENTES REGISTRADOS' },
      { valor: '2', etiqueta: 'TÍTULOS SUNEDU' },
      { valor: '3', etiqueta: 'MUNICIPALIDADES' },
      { valor: '10', etiqueta: 'REGISTROS EN CUL' },
    ],
  },
  educacion: [
    {
      grado: 'Abogada',
      detalle: 'Universidad Nacional Pedro Ruiz Gallo',
      fuente: 'SUNEDU',
    },
    {
      grado: 'Bachiller en Derecho',
      detalle: 'Universidad San Pedro',
      fuente: 'SUNEDU',
    },
  ],
  experiencia: [
    {
      periodo: '10/10/2022 – 07/02/2023',
      entidad: 'Municipalidad Distrital de Samanco',
    },
    {
      periodo: '01/10/2017 – 31/10/2018',
      entidad: 'Municipalidad Distrital de Quillo',
    },
    {
      periodo: '01/09/2017 – 31/10/2017',
      entidad: 'Municipalidad Provincial de Casma',
    },
    {
      periodo: '01/04/2016 – 31/12/2016',
      entidad: 'Municipalidad Distrital de Quillo',
    },
    {
      periodo: '26/01/2021 – 02/03/2021',
      entidad: 'Dirección de Red de Salud Huaylas Norte',
    },
  ],
  auditoria: {
    certificado: '20269107026',
    emision: '07 de junio de 2026',
    vigencia: '3 meses',
    antecedentes: [
      { tipo: 'Policiales', fuente: 'PNP', resultado: 'No registra antecedentes.' },
      { tipo: 'Judiciales', fuente: 'INPE', resultado: 'No registra antecedentes.' },
      { tipo: 'Penales', fuente: 'Poder Judicial', resultado: 'No registra antecedentes.' },
    ],
  },
};

export const AGENDA_EVENTS: AgendaEvent[] = [
  {
    id: 'evt-1',
    date: '12 Jun',
    time: '18:00',
    title: 'Gran Encuentro Ciudadano por la Seguridad',
    location: 'Polideportivo San Martín',
    description: 'Presentación oficial de nuestro plan de seguridad comunitaria. Diálogo abierto con vecinas y vecinos.',
    tag: 'Conversatorio'
  },
  {
    id: 'evt-2',
    date: '15 Jun',
    time: '10:00',
    title: 'Caminata y Siembra de Árboles Nativos',
    location: 'Parque Lineal El Bosque',
    description: 'Acto simbólico de reforestación urbana junto a colectivos juveniles y ambientalistas locales.',
    tag: 'Visita Barrio'
  },
  {
    id: 'evt-3',
    date: '19 Jun',
    time: '19:30',
    title: 'Debate de Candidatos a la Alcaldía',
    location: 'Teatro Municipal de la Ciudad',
    description: 'Sandra Fernández expone propuestas técnicas de desarrollo económico frente a los demás candidatos.',
    tag: 'Debate'
  },
  {
    id: 'evt-4',
    date: '22 Jun',
    time: '17:00',
    title: 'Presentación del Programa de Becas e Innovación',
    location: 'Auditorio Tecnológico del Norte',
    description: 'Lanzamiento de las becas "Futuro Digital" para jóvenes emprendedores y estudiantes de institutos.',
    tag: 'Conferencia'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Martín Cárdenas',
    role: 'Comerciante y Líder del Barrio San Martín',
    text: 'He trabajado con Sandra en proyectos comunitarios y su capacidad de gestión es intachable. Es la única candidata que realmente viene sin compromisos con la vieja política.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-2',
    name: 'Dra. Elena Ruiz',
    role: 'Docente y Especialista Ambiental',
    text: 'Su plan verde no es propaganda electoral, tiene bases técnicas reales, metas medibles y de bajo costo. Sandra entiende lo que nuestro municipio necesita para el siglo XXI.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-3',
    name: 'Julián Ortega',
    role: 'Representante de la Juventud Emprendedora',
    text: 'El proyecto de Nodos Digitales nos abrirá puertas gigantescas a quienes queremos trabajar en tecnología. Ella nos escucha y nos da herramientas reales.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

const WALKS_CAMPAIGN_META: WalkCampaignMeta[] = [
  {
    id: 'walk-homenaje-madres',
    slug: 'homenaje-a-las-madres',
    title: 'Homenaje a las Madres de Nuevo Chimbote',
    shortDescription:
      'Momentos que nos llenan el alma. Así se vivió el gran homenaje a las madres de Nuevo Chimbote.',
    fullDescription:
      'Momentos que nos llenan el alma. Así se vivió el gran homenaje a las madres de Nuevo Chimbote. Compartimos sonrisas, premios, baile y el compromiso firme de trabajar por nuestro distrito. ¡Gracias a todas las mamitas que nos acompañaron y confiaron en este gran proyecto! Desliza para ver los mejores momentos del evento.',
    location: 'Nuevo Chimbote',
    date: 'Homenaje comunitario',
    achievements: [
      'Sonrisas, premios y baile con las familias del distrito.',
      'Reconocimiento y homenaje a las madres de Nuevo Chimbote.',
      'Compromiso firme de seguir trabajando por nuestro distrito.',
    ],
  },
  {
    id: 'walk-lomas-del-sur',
    slug: 'lomas-del-sur',
    title: 'Visita y planificación en Lomas del Sur',
    shortDescription:
      'Seguimos sumando esfuerzos por nuestra gente. En Lomas del Sur planificamos próximas actividades junto a la regidora Lorena.',
    fullDescription:
      'Seguimos sumando esfuerzos por nuestra gente. En mi visita a Lomas del Sur, me senté a planificar nuestras próximas actividades y conocer más sobre la zona junto a la regidora Lorena. Qué gran charla compartimos. Escuchar a una madre, mujer luchadora y emprendedora como ella nos motiva a seguir trabajando fuerte por los que más lo necesitan. ¡Haremos un gran equipo!',
    location: 'Lomas del Sur',
    date: 'Visita territorial',
    achievements: [
      'Planificación de próximas actividades en la zona.',
      'Encuentro y diálogo con la regidora Lorena.',
      'Compromiso de seguir trabajando por quienes más lo necesitan.',
    ],
  },
  {
    id: 'walk-san-luis-segunda-etapa',
    slug: 'San-Luis-Segunda-Etapa',
    title: 'Escucha comunitaria en San Luis Segunda Etapa',
    shortDescription:
      'Las verdaderas necesidades no se leen en un informe, se escuchan de su propia gente.',
    fullDescription:
      'Las verdaderas necesidades no se leen en un informe, se escuchan de su propia gente. Agradezco infinitamente a los vecinos de San Luis Segunda Etapa por el espacio para conversar con tanta sinceridad sobre sus urgencias. Tienen mi compromiso: muy pronto estaré de regreso con mi equipo técnico para realizar las examinaciones profundas que se requieren. ¡Pasaremos del diálogo a la acción!',
    location: 'San Luis Segunda Etapa',
    date: 'Escucha comunitaria',
    achievements: [
      'Diálogo sincero con vecinos sobre las urgencias del sector.',
      'Compromiso de regresar con equipo técnico para evaluaciones profundas.',
      'Del diálogo a la acción en beneficio de la comunidad.',
    ],
  },
];

export const WALKS_CAMPAIGN = buildWalkCampaigns(WALKS_CAMPAIGN_META);

