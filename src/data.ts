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
  {
    id: 'walk-talleres-gratuito',
    slug: 'talleres-gratuito',
    title: 'Inauguración de talleres gratuitos',
    shortDescription:
      'Así vivimos la gran inauguración de nuestros talleres gratuitos, un espacio pensado en soluciones reales para el día a día.',
    fullDescription:
      'Así vivimos la gran inauguración de nuestros talleres gratuitos. Un espacio que diseñamos pensando especialmente en ustedes, en darles soluciones reales para el día a día: desde el bienestar de sus familias y asesoría profesional, hasta herramientas prácticas para que puedan emprender y generar sus propios ingresos. ¡Gracias infinitas a todos los vecinos que se dieron cita desde temprano! Su energía y respaldo me llenan de fuerza para seguir trabajando por el futuro de nuestras familias. ¡El conocimiento es el primer paso para cambiar nuestro futuro!',
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
    title: 'Caminando juntos en Lomas del Sur',
    shortDescription:
      '¡Qué energía tan bonita se siente en Lomas del Sur! Compartir de cerca con mis vecinos siempre me llena de fuerza.',
    fullDescription:
      '¡Qué energía tan bonita se siente en Lomas del Sur! Compartir de cerca con mis vecinos siempre me llena de fuerza y renueva mi compromiso con nuestra comunidad. Quiero agradecer profundamente a Lorena Saldaña por sus sentidas palabras y por sumarse a este gran reto con tanta convicción. Caminando juntos, tenemos muy claras cuáles son las necesidades urgentes de nuestra gente y por las que vamos a trabajar: agua, desagüe, pistas dignas y áreas verdes para nuestras familias. Asumo esta responsabilidad con la firmeza de una abogada y el corazón de una mujer del pueblo, dispuesta a ser el puente que haga realidad sus justos pedidos. ¡Si llega una, llegamos todas!',
    location: 'Lomas del Sur',
    date: 'Encuentro comunitario',
    achievements: [
      'Agua, desagüe, pistas dignas y áreas verdes como prioridades urgentes.',
      'Agradecimiento a Lorena Saldaña por sumarse con convicción.',
      'Compromiso de ser el puente para hacer realidad los pedidos de la comunidad.',
    ],
  },
  {
    id: 'walk-caminata-vecinos',
    slug: 'caminata-vecinos',
    title: 'Caminata con vecinos',
    shortDescription:
      'Hay abrazos y sonrisas que te recargan el alma y te confirman que todo el esfuerzo vale la pena.',
    fullDescription:
      'Hay abrazos y sonrisas que te recargan el alma y te confirman que todo el esfuerzo vale la pena. Recorrer y conversar frente a frente con ustedes es el mayor motor de este proyecto. Escuchar sus preocupaciones y anhelos me compromete cada día más, porque las verdaderas soluciones nacen al comprender la realidad de nuestros barrios. Gracias por cada palabra de aliento y por esos abrazos sinceros de respaldo en cada calle. Sentir su confianza me demuestra que no estamos solos y que juntos vamos a construir el Nuevo Chimbote que merecemos.',
    location: 'Nuevo Chimbote',
    date: 'Caminata vecinal',
    achievements: [
      'Escucha directa de preocupaciones y anhelos en cada barrio.',
      'Soluciones nacidas de comprender la realidad de la comunidad.',
      'Compromiso de construir juntos el Nuevo Chimbote que merecemos.',
    ],
  },
  {
    id: 'walk-caso-nina',
    slug: 'caso-niña',
    title: 'Justicia y seguridad para nuestros niños',
    shortDescription:
      'Una niña de Nuevo Chimbote fue atropellada cerca del colegio San Luis de la Paz. Exigimos presencia policial, apoyo a BAPES y justicia para nuestra comunidad.',
    fullDescription:
      'Hace dos días, una pequeña de nuestra comunidad, una niña de Nuevo Chimbote, fue atropellada cerca de su colegio, San Luis de la Paz. El responsable la dejó tirada en la pista y se dio a la fuga como un cobarde. Hoy, ella se debate en una situación crítica en el Hospital Regional, esperando una operación de emergencia porque las trabas del seguro en accidentes de tránsito complican su atención. El equipo de BAPES (Brigadas de Autoprotección Escolar) del colegio San Luis de la Paz, madres y padres de familia salen a las calles a cuidar a nuestros hijos armados únicamente con un chaleco, una gorra y todo el amor del mundo. El serenazgo y la policía deben estar perennes para la seguridad de nuestros niños, en cada institución educativa de cada pueblo de nuestro distrito. A mis valientes hermanos de BAPES, les digo: no están solos. Vamos a seguir firmes exigiendo la presencia policial y el apoyo que por derecho les corresponde. ¡Justicia y seguridad para nuestros niños de Nuevo Chimbote ya! El cambio se hace con acciones, no con fotos de compromiso.',
    location: 'Colegio San Luis de la Paz, Nuevo Chimbote',
    date: 'Seguridad escolar',
    achievements: [
      'Solidaridad con BAPES y las familias del colegio San Luis de la Paz.',
      'Exigencia de serenazgo y policía perennes en cada institución educativa.',
      'Compromiso de justicia y seguridad para los niños de Nuevo Chimbote.',
    ],
  },
  {
    id: 'walk-aniversario32',
    slug: 'aniversario32',
    title: '32° aniversario de Nuevo Chimbote',
    shortDescription:
      'Un abrazo y una sonrisa sincera es el mejor regalo en estas fechas. Recorrí la Plaza Mayor conversando con los vecinos.',
    fullDescription:
      'Un abrazo y una sonrisa sincera es el mejor regalo en estas fechas. Estuve recorriendo nuestra Plaza Mayor conversando frente a frente con ustedes, vecinos. Más allá de compartir la inmensa felicidad que todos sentimos por celebrar el 32° aniversario de nuestro amado Nuevo Chimbote, pude escuchar de cerca sus necesidades, sus inquietudes y sus esperanzas. Estar cerca de ustedes y escucharlos siempre será mi prioridad. ¡Feliz aniversario, mi querido distrito!',
    location: 'Plaza Mayor, Nuevo Chimbote',
    date: '32° aniversario del distrito',
    achievements: [
      'Celebración del 32° aniversario de Nuevo Chimbote con la comunidad.',
      'Escucha cercana de necesidades, inquietudes y esperanzas vecinales.',
      'Compromiso de seguir cerca y priorizando el diálogo con los vecinos.',
    ],
  },
];

export const WALKS_CAMPAIGN = buildWalkCampaigns(WALKS_CAMPAIGN_META);

