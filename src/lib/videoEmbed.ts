export type VideoPlatform = 'youtube' | 'tiktok' | 'facebook' | 'unknown';

export interface ParsedVideo {
  platform: VideoPlatform;
  embedUrl: string;
  thumbnailUrl: string | null;
  /** Reels de Facebook/TikTok son verticales */
  isVertical?: boolean;
}

function parseYouTube(url: URL): ParsedVideo | null {
  let videoId: string | null = null;

  if (url.hostname.includes('youtu.be')) {
    videoId = url.pathname.slice(1).split('/')[0] || null;
  } else if (url.pathname.startsWith('/embed/')) {
    videoId = url.pathname.split('/')[2] ?? null;
  } else if (url.pathname.startsWith('/shorts/')) {
    videoId = url.pathname.split('/')[2] ?? null;
  } else {
    videoId = url.searchParams.get('v');
  }

  if (!videoId) return null;

  return {
    platform: 'youtube',
    embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`,
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  };
}

function parseTikTok(url: URL): ParsedVideo | null {
  const match = url.pathname.match(/\/video\/(\d+)/);
  const videoId = match?.[1];
  if (!videoId) return null;

  return {
    platform: 'tiktok',
    embedUrl: `https://www.tiktok.com/embed/v2/${videoId}`,
    thumbnailUrl: null,
    isVertical: true,
  };
}

function parseFacebook(url: URL): ParsedVideo | null {
  if (!url.hostname.includes('facebook.com') && !url.hostname.includes('fb.watch')) {
    return null;
  }

  const canonicalUrl = `${url.origin}${url.pathname}`.replace(/\/$/, '') || url.href;
  const isVertical =
    /\/reel\//.test(url.pathname) ||
    /\/share\/v\//.test(url.pathname) ||
    /\/share\/r\//.test(url.pathname);
  const width = isVertical ? 400 : 560;
  const height = isVertical ? 711 : 315;

  return {
    platform: 'facebook',
    embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(canonicalUrl)}&show_text=false&width=${width}&height=${height}`,
    thumbnailUrl: null,
    isVertical,
  };
}

export function parseVideoUrl(rawUrl: string): ParsedVideo | null {
  try {
    const url = new URL(rawUrl.trim());

    if (url.hostname.includes('youtube.com') || url.hostname.includes('youtu.be')) {
      return parseYouTube(url);
    }
    if (url.hostname.includes('tiktok.com')) {
      return parseTikTok(url);
    }
    if (url.hostname.includes('facebook.com') || url.hostname.includes('fb.watch')) {
      return parseFacebook(url);
    }

    return {
      platform: 'unknown',
      embedUrl: rawUrl.trim(),
      thumbnailUrl: null,
    };
  } catch {
    return null;
  }
}

export function platformLabel(platform: VideoPlatform): string {
  switch (platform) {
    case 'youtube':
      return 'YouTube';
    case 'tiktok':
      return 'TikTok';
    case 'facebook':
      return 'Facebook';
    default:
      return 'Video';
  }
}
