export const API_URL = 'https://itunes.apple.com';

export const getTopPodcastsURL = () => {
  return `${API_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`;
};

export const getPodcastDetailURL = (id: string) =>
  `https://api.allorigins.win/get?url=${encodeURIComponent(`${API_URL}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`)}`;
