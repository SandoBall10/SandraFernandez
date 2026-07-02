import planGobiernoPdf from '@/src/assets/PLAN DE GOBIERNO-2.pdf';
import planSeguridadPdf from '@/src/assets/PLAN DE SEGURIDAD.pdf';

export type CampaignPlanId = 'gobierno' | 'seguridad';

export interface CampaignPlanDocument {
  id: CampaignPlanId;
  shortLabel: string;
  tag: string;
  title: string;
  titleAccent: string;
  description: string;
  downloadTitle: string;
  downloadDescription: string;
  pages: string;
  pagesLabel: string;
  readTime: string;
  readTimeLabel: string;
  fileSize: string;
  version: string;
  fileName: string;
  fileUrl: string;
}

export const CAMPAIGN_PLAN_DOCUMENTS: CampaignPlanDocument[] = [
  {
    id: 'gobierno',
    shortLabel: 'Plan de Gobierno',
    tag: 'Documento de Trabajo',
    title: 'Plan de Gobierno Definitivo:',
    titleAccent: 'Técnico, Ético y Viable',
    description:
      'Nuestra propuesta no es una lista de promesas al azar. Es un documento de planificación pública estructurado bajo un riguroso marco de costo-beneficio y metas medibles para transformar Nuevo Chimbote.',
    downloadTitle: 'Descargar Plan Completo',
    downloadDescription:
      'Descarga nuestro documento oficial en versión digital PDF de alta resolución. Conoce el detalle financiero, los proyectos por sector y el cronograma técnico de implementación.',
    pages: '58 Págs.',
    pagesLabel: 'Total Documento',
    readTime: '25 Min.',
    readTimeLabel: 'Tiempo Lectura',
    fileSize: '683 KB',
    version: 'Final (Junio 2026)',
    fileName: 'PLAN DE GOBIERNO-2.pdf',
    fileUrl: planGobiernoPdf,
  },
  {
    id: 'seguridad',
    shortLabel: 'Plan de Seguridad',
    tag: 'Propuesta de Seguridad',
    title: 'Plan de Seguridad:',
    titleAccent: 'Protección para Nuevo Chimbote',
    description:
      'Una propuesta concreta para reforzar la seguridad ciudadana, el orden público y la tranquilidad de las familias. Acciones medibles, enfoque territorial y compromiso con la protección de nuestros vecinos.',
    downloadTitle: 'Descargar Plan de Seguridad',
    downloadDescription:
      'Consulta el documento oficial con las medidas, prioridades y lineamientos de seguridad que proponemos para un municipio más seguro y organizado.',
    pages: 'PDF Oficial',
    pagesLabel: 'Documento',
    readTime: '15 Min.',
    readTimeLabel: 'Tiempo Lectura',
    fileSize: '345 KB',
    version: 'Final (Junio 2026)',
    fileName: 'PLAN DE SEGURIDAD.pdf',
    fileUrl: planSeguridadPdf,
  },
];

export function downloadCampaignPlan(plan: CampaignPlanDocument): void {
  const link = document.createElement('a');
  link.href = plan.fileUrl;
  link.download = plan.fileName;
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
