import { CampaignVideo, Testimonial, WalkCampaignMeta } from './types';
import { buildWalkCampaigns } from './lib/walkAssets';

export const WHATSAPP_GROUP_URL =
  'https://chat.whatsapp.com/EA8xrmsvSd6LDBZ0nnsOWI';

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

/**
 * Añade videos pegando la URL de YouTube, TikTok o Facebook.
 *
 * Ejemplo:
 * {
 *   id: 'vid-1',
 *   url: 'https://www.youtube.com/watch?v=XXXXXXXX',
 *   title: 'Caminata en Lomas del Sur',
 *   description: 'Recorrido con vecinos del sector.',
 *   tag: 'Caminata',
 * },
 */
export const CAMPAIGN_VIDEOS: CampaignVideo[] = [
  {
    id: 'vid-featured-1',
    url: 'https://youtu.be/_HtpRQgGn4o',
    title: 'El mensaje de Sandra Fernández',
    description:
      'Conoce la visión de País Para Todos: una campaña cercana, con escucha vecinal y propuestas concretas para un mejor Nuevo Chimbote.',
    tag: 'Mensaje',
  },
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
    title: 'Homenaje a las madres de Nuevo Chimbote',
    shortDescription:
      'Momentos que nos llenan el alma. Así vivimos el gran homenaje a las madres de Nuevo Chimbote.',
    fullDescription:
      'Momentos que nos llenan el alma. Así vivimos el gran homenaje a las madres de Nuevo Chimbote. Compartimos sonrisas, premios, baile y el compromiso firme de trabajar por nuestro distrito. ¡Gracias a todas las mamitas que nos acompañaron y confiaron en este gran proyecto! Desliza para ver los mejores momentos del evento.',
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
    title: 'Visita y planificación con vecinos',
    shortDescription:
      'Seguimos sumando esfuerzos por nuestra gente. En Nuevo Chimbote planificamos próximas actividades junto a regidoras y vecinos.',
    fullDescription:
      'Seguimos sumando esfuerzos por nuestra gente. En nuestros recorridos por Nuevo Chimbote nos sentamos a planificar las próximas actividades y a conocer más de cerca las necesidades de las familias, junto a la regidora Lorena. Qué gran charla compartimos. Escuchar a una madre, mujer luchadora y emprendedora como ella nos motiva a seguir trabajando fuerte por quienes más lo necesitan. ¡Haremos un gran equipo!',
    location: 'Nuevo Chimbote',
    date: 'Visita territorial',
    achievements: [
      'Planificación de próximas actividades con vecinos de Nuevo Chimbote.',
      'Encuentro y diálogo con regidoras y líderes comunitarias.',
      'Compromiso de seguir trabajando por quienes más lo necesitan.',
    ],
  },
  {
    id: 'walk-san-luis-segunda-etapa',
    slug: 'San-Luis-Segunda-Etapa',
    title: 'Escucha comunitaria con vecinos',
    shortDescription:
      'Las verdaderas necesidades no se leen en un informe, se escuchan de nuestra propia gente.',
    fullDescription:
      'Las verdaderas necesidades no se leen en un informe, se escuchan de nuestra propia gente. Agradezco infinitamente a los vecinos de Nuevo Chimbote por el espacio para conversar con tanta sinceridad sobre sus urgencias. Tienen mi compromiso: muy pronto estaremos de regreso con nuestro equipo técnico para realizar las evaluaciones profundas que se requieren. ¡Pasaremos del diálogo a la acción!',
    location: 'Nuevo Chimbote',
    date: 'Escucha comunitaria',
    achievements: [
      'Diálogo sincero con vecinos sobre las urgencias de Nuevo Chimbote.',
      'Compromiso de regresar con equipo técnico para evaluaciones profundas.',
      'Del diálogo a la acción en beneficio de toda la comunidad.',
    ],
  },
  {
    id: 'walk-talleres-gratuito',
    slug: 'talleres-gratuito',
    title: 'Inauguración de talleres gratuitos',
    shortDescription:
      'Así vivimos la gran inauguración de nuestros talleres gratuitos, un espacio pensado en soluciones reales para el día a día de las familias de Nuevo Chimbote.',
    fullDescription:
      'Así vivimos la gran inauguración de nuestros talleres gratuitos. Un espacio que diseñamos pensando especialmente en ustedes, en darles soluciones reales para el día a día: desde el bienestar de sus familias y asesoría profesional, hasta herramientas prácticas para que puedan emprender y generar sus propios ingresos. ¡Gracias infinitas a todos los vecinos de Nuevo Chimbote que se dieron cita desde temprano! Su energía y respaldo nos llenan de fuerza para seguir trabajando por el futuro de nuestras familias. ¡El conocimiento es el primer paso para cambiar nuestro futuro!',
    location: 'Nuevo Chimbote',
    date: 'Inauguración comunitaria',
    achievements: [
      'Talleres gratuitos para el bienestar familiar y asesoría profesional.',
      'Herramientas prácticas para emprender y generar ingresos propios.',
      'Gran respaldo de vecinos que se dieron cita desde temprano.',
    ],
  },
  {
    id: 'walk-lomas-del-sur-2',
    slug: 'lomas-del-sur-2',
    title: 'Caminando juntos con vecinos',
    shortDescription:
      '¡Qué energía tan bonita se siente en Nuevo Chimbote! Compartir de cerca con nuestros vecinos siempre nos llena de fuerza.',
    fullDescription:
      '¡Qué energía tan bonita se siente en Nuevo Chimbote! Compartir de cerca con nuestros vecinos siempre nos llena de fuerza y renueva nuestro compromiso con la comunidad. Queremos agradecer profundamente a Lorena Saldaña por sus sentidas palabras y por sumarse a este gran reto con tanta convicción. Caminando juntos, tenemos muy claras cuáles son las necesidades urgentes de nuestra gente y por las que vamos a trabajar: agua, desagüe, pistas dignas y áreas verdes para nuestras familias. Asumimos esta responsabilidad con la firmeza de una abogada y el corazón de una mujer del pueblo, dispuesta a ser el puente que haga realidad sus justos pedidos. ¡Si llega una, llegamos todas!',
    location: 'Nuevo Chimbote',
    date: 'Encuentro comunitario',
    achievements: [
      'Agua, desagüe, pistas dignas y áreas verdes como prioridades urgentes.',
      'Agradecimiento a Lorena Saldaña por sumarse con convicción.',
      'Compromiso de ser el puente para hacer realidad los pedidos de los vecinos.',
    ],
  },
  {
    id: 'walk-caminata-vecinos',
    slug: 'caminata-vecinos',
    title: 'Caminata con vecinos',
    shortDescription:
      'Hay abrazos y sonrisas que recargan el alma y confirman que todo el esfuerzo vale la pena.',
    fullDescription:
      'Hay abrazos y sonrisas que recargan el alma y confirman que todo el esfuerzo vale la pena. Recorrer y conversar frente a frente con ustedes es el mayor motor de este proyecto. Escuchar sus preocupaciones y anhelos nos compromete cada día más, porque las verdaderas soluciones nacen al comprender la realidad de los vecinos de Nuevo Chimbote. Gracias por cada palabra de aliento y por esos abrazos sinceros de respaldo en cada recorrido. Sentir su confianza nos demuestra que no estamos solos y que juntos vamos a construir el Nuevo Chimbote que merecemos.',
    location: 'Nuevo Chimbote',
    date: 'Caminata vecinal',
    achievements: [
      'Escucha directa de preocupaciones y anhelos de los vecinos.',
      'Soluciones nacidas de comprender la realidad de Nuevo Chimbote.',
      'Compromiso de construir juntos el distrito que merecemos.',
    ],
  },
  {
    id: 'walk-caso-nina',
    slug: 'caso-niña',
    title: 'Justicia y seguridad para nuestros niños',
    shortDescription:
      'Una niña de Nuevo Chimbote fue atropellada cerca de su colegio. Exigimos presencia policial, apoyo a las brigadas escolares y justicia para nuestra comunidad.',
    fullDescription:
      'Hace dos días, una pequeña de nuestra comunidad, una niña de Nuevo Chimbote, fue atropellada cerca de su colegio. El responsable la dejó tirada en la pista y se dio a la fuga como un cobarde. Hoy, ella se debate en una situación crítica en el Hospital Regional, esperando una operación de emergencia porque las trabas del seguro en accidentes de tránsito complican su atención. Las brigadas de autoprotección escolar, madres y padres de familia salen a las calles a cuidar a nuestros hijos armados únicamente con un chaleco, una gorra y todo el amor del mundo. El serenazgo y la policía deben estar presentes para la seguridad de nuestros niños, en cada institución educativa de Nuevo Chimbote. A quienes defienden a nuestros hijos en las calles, les decimos: no están solos. Vamos a seguir firmes exigiendo la presencia policial y el apoyo que por derecho les corresponde. ¡Justicia y seguridad para nuestros niños de Nuevo Chimbote ya! El cambio se hace con acciones, no con fotos de compromiso.',
    location: 'Nuevo Chimbote',
    date: 'Seguridad escolar',
    achievements: [
      'Solidaridad con las brigadas escolares y las familias de Nuevo Chimbote.',
      'Exigencia de serenazgo y policía presentes en cada institución educativa.',
      'Compromiso de justicia y seguridad para los niños de Nuevo Chimbote.',
    ],
  },
  {
    id: 'walk-aniversario32',
    slug: 'aniversario32',
    title: '32° aniversario de Nuevo Chimbote',
    shortDescription:
      'Un abrazo y una sonrisa sincera es el mejor regalo en estas fechas. Recorrimos Nuevo Chimbote conversando con los vecinos.',
    fullDescription:
      'Un abrazo y una sonrisa sincera es el mejor regalo en estas fechas. Recorrimos Nuevo Chimbote conversando frente a frente con ustedes, vecinos. Más allá de compartir la inmensa felicidad que todos sentimos por celebrar el 32° aniversario de nuestro amado distrito, pudimos escuchar de cerca sus necesidades, sus inquietudes y sus esperanzas. Estar cerca de ustedes y escucharlos siempre será nuestra prioridad. ¡Feliz aniversario, nuestro querido Nuevo Chimbote!',
    location: 'Nuevo Chimbote',
    date: '32° aniversario del distrito',
    achievements: [
      'Celebración del 32° aniversario de Nuevo Chimbote con la comunidad.',
      'Escucha cercana de necesidades, inquietudes y esperanzas vecinales.',
      'Compromiso de seguir cerca y priorizando el diálogo con los vecinos.',
    ],
  },
];

export const WALKS_CAMPAIGN = buildWalkCampaigns(WALKS_CAMPAIGN_META);

