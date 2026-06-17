const HEADER_OFFSET = 80;

export function scrollToSectionById(
  sectionId: string,
  behavior: ScrollBehavior = 'smooth'
) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
}

export function scrollToSectionAfterPaint(sectionId: string) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scrollToSectionById(sectionId, sectionId === 'inicio' ? 'auto' : 'smooth');
    });
  });
}
