import { AgendaEvent, Testimonial, WalkCampaign } from './types';

export const CANDIDATE_INFO = {
  name: 'Sandra Fernández',
  tagline: 'Liderazgo, Gestión y Corazón para Nuestro Municipio',
  party: 'País Para Todos',
  briefBio: 'Sandra Fernández Beltrán es una abogada y política peruana con experiencia en asesoría legal y participación en procesos democráticos de alcance regional. Firme creyente en la renovación política y el liderazgo local, Sandra postuló como candidata al Congreso de la República por la región Áncash, enfocando sus propuestas en el desarrollo y representación de comunidades como Nuevo Chimbote. Con una visión orientada al servicio legal y la fiscalización, busca contribuir desde el ámbito profesional a la modernización institucional y el fortalecimiento de la transparencia en la gestión pública peruana.',
  experience: [
    { year: '2019 - 2020', role: 'Gestión de Procesos Administrativo-Electorales', desc: 'Manejo y subsanación de expedientes ante los organismos del sistema electoral peruano (JNE y ONPE), asumiendo la representación legal frente a las resoluciones institucionales del periodo fiscalizado 2020.' },
    { year: '2019 - 2020', role: 'Campaña Electoral y Postulación Parlamentaria', desc: 'Lideró mítines, debates públicos y formulación de propuestas legislativas enfocadas en la reforma institucional, fiscalización regional y seguridad en la provincia del Santa y Nuevo Chimbote.' },
    { year: '2014 - Presente', role: 'Asesoría Jurídica e Intervención Legal Privada', desc: 'Litigación oral, patrocinio de casos en el ámbito penal y civil, y consultoría jurídica para personas naturales y colectivos locales en la región Áncash.' }
  ],
  education: [
    { degree: 'Estudios de Postgrado (Derecho)', university: 'Egresada en formación avanzada dentro del ámbito jurídico penal o procesal.' },
    { degree: 'Pregrado en Derecho y Ciencias Políticas', university: 'Licenciada y abogada colegiada con mención en ciencias jurídicas y constitucionales.' }
  ],
  stats: [
    { label: 'Barrios Escuchados', value: '50' },
    { label: 'Propuestas de Gobierno', value: '4' },
    { label: 'Años de Servicio Público', value: '11+' },
    { label: 'Compromiso de Gobierno', value: '100%' }
  ]
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

export const WALKS_CAMPAIGN: WalkCampaign[] = [
  {
    id: 'walk-1',
    title: 'Caminata Barrio San José',
    shortDescription: 'Inspección de las luminarias comunitarias rotas y diálogo directo sobre la inseguridad local.',
    fullDescription: 'Durante este valioso recorrido nocturno por el sector central del Barrio San José, Sandra Fernández conversó con más de 80 vecinos, identificando puntos ciegos de iluminación pública y asumiendo el compromiso prioritario de conectar el vecindario al nuevo sistema centralizado de alarmas comunitarias de País Para Todos.',
    location: 'Barrio San José (Plaza Central y Calles Aledañas)',
    date: '04 de Junio, 2026',
    backgroundImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600',
    videoUrl: '/videos/walk-1.mp4',
    galleryImages: [
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
    ],
    achievements: [
      'Identificación de 18 puntos ciegos sin alumbrado.',
      'Pre-registro de 35 hogares para alertas integradas por WhatsApp.',
      'Acuerdo de conformación del comité preventivo de seguridad vecinal.'
    ]
  },
  {
    id: 'walk-2',
    title: 'Recorrido Comercial Centro',
    shortDescription: 'Plan de simplificación fiscal para pymes y diálogos con emprendedores del casco urbano.',
    fullDescription: 'Sandra recorrió la calle comercial principal del centro histórico. Escuchó de manos de los locatarios la urgencia de agilizar los permisos municipales y propuso formalmente su iniciativa "Trámites Cero", eliminando ventanillas inútiles e incentivando el consumo local mediante ferias digitales bimestrales.',
    location: 'Zona Comercial del Centro Histórico',
    date: '06 de Junio, 2026',
    backgroundImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
    videoUrl: '/videos/walk-2.mp4',
    galleryImages: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
    ],
    achievements: [
      'Reunión clave con el sindicato de comerciantes independientes.',
      'Explicación del plan fiscal de amnistía para licencias de bajo riesgo.',
      'Suscripción del acta de compromiso "Centro Peatonal Amigable".'
    ]
  },
  {
    id: 'walk-3',
    title: 'Caminata Verde en Parque Río Limpio',
    shortDescription: 'Diseño conjunto del corredor ecológico municipal con colectivos ambientalistas.',
    fullDescription: 'Un recorrido de 3 kilómetros a las orillas del río sirvió para mapear la erosión urbana y acordar un plan participativo de reforestación masiva de 20,000 especies nativas si Sandra llega a la alcaldía. Los jóvenes destacaron la necesidad de ciclorrutas seguras bajo iluminación led sostenible.',
    location: 'Parque Lineal y Ribera del Río Limpio',
    date: '08 de Junio, 2026',
    backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600',
    videoUrl: '/videos/walk-3.mp4',
    galleryImages: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800'
    ],
    achievements: [
      'Compromiso de conservación forestal para 15 hectáreas.',
      'Trazado preliminar de 4.5 kilómetros de senderos peatonales y ciclovías.',
      'Pacto de apoyo con 8 organizaciones de jóvenes voluntarios ecologistas.'
    ]
  },
  {
    id: 'walk-4',
    title: 'Asamblea Juvenil del Sector Norte',
    shortDescription: 'Planificación de aulas de innovación digital y becas de estudio técnico.',
    fullDescription: 'Con un foro interactivo de participación directa, Sandra Fernández debatió junto a jóvenes universitarios y egresados los lineamientos para crear el primer "Nodo Digital de Innovación" del Norte, que brindará entrenamiento certificado gratuito en programación e inteligencia artificial orientada al empleo moderno.',
    location: 'Estación de Juventud y Empleo del Norte',
    date: '09 de Junio, 2026',
    backgroundImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
    videoUrl: '/videos/walk-4.mp4',
    galleryImages: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800'
    ],
    achievements: [
      'Validación de la demanda académica e intereses tecnológicos del sector.',
      'Alianza voluntaria de capacitación online con empresarios locales.',
      'Propuesta de habilitación de transporte seguro nocturno para estudiantes.'
    ]
  }
];

