export const YOUTUBE_VIDEO_IDS = [
  'PLRWq5lkmQo',
  'fI9l8kuP0NQ',
  'J4oMr2A-D8U',
  '76aqdUJ6AJ0',
  'y57gl_eBgDM',
];

export const getYouTubeEmbedUrl = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&fs=1&rel=0&modestbranding=1`;
};

export const getYouTubeVideoId = (index: number) => {
  return YOUTUBE_VIDEO_IDS[index % YOUTUBE_VIDEO_IDS.length];
};
