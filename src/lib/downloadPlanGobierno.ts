import planGobiernoPdf from '@/src/assets/PLAN DE GOBIERNO-2.pdf';

export const PLAN_GOBierno_FILE_NAME = 'PLAN DE GOBIERNO-2.pdf';

export function downloadPlanGobierno(): void {
  const link = document.createElement('a');
  link.href = planGobiernoPdf;
  link.download = PLAN_GOBierno_FILE_NAME;
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
