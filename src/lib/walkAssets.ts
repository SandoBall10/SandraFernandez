import { WalkCampaign, WalkCampaignMeta } from '../types';

const walkImageModules = import.meta.glob<string>(
  '../assets/caminatas/**/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' }
);

function normalizePath(path: string) {
  return path.replace(/\\/g, '/');
}

function photoSortKey(path: string): number {
  const normalized = normalizePath(path);
  if (/\/cover\.(jpg|jpeg|png|webp)$/i.test(normalized)) return -1;

  const fotoMatch = normalized.match(/foto\s*\((\d+)\)/i);
  if (fotoMatch) return Number(fotoMatch[1]);

  const numberedMatch = normalized.match(/\/(\d+)\.(jpg|jpeg|png|webp)$/i);
  if (numberedMatch) return Number(numberedMatch[1]);

  return 999;
}

export function getWalkImages(slug: string): string[] {
  const folder = `/caminatas/${slug}/`;

  return Object.entries(walkImageModules)
    .filter(([path]) => normalizePath(path).includes(folder))
    .sort(([pathA], [pathB]) => photoSortKey(pathA) - photoSortKey(pathB))
    .map(([, url]) => url);
}

export function buildWalkCampaign(meta: WalkCampaignMeta): WalkCampaign {
  const images = getWalkImages(meta.slug);
  const cover = images[0] ?? '';

  return {
    ...meta,
    backgroundImage: cover,
    galleryImages: images.length > 0 ? images : [],
    videoUrl: meta.videoUrl ?? '',
  };
}

export function buildWalkCampaigns(metas: WalkCampaignMeta[]): WalkCampaign[] {
  return metas.map(buildWalkCampaign);
}
