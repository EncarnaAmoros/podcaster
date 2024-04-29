export const API_URL = 'https://itunes.apple.com';

export const getTopPodcasts = (searchText?: string) => {
  console.warn('searchText:', searchText);
  return `${API_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`;
};

export const getPodcast = (id: string) =>
  `${API_URL}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`;
