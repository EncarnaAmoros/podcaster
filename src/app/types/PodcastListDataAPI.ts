// Data from API

interface LinkAPI {
  rel: string;
  type?: string;
  href: string;
}

interface CategoryAPI {
  'im:id': string;
  term: string;
  scheme: string;
  label: string;
}

interface PodcastDetailAPI {
  'im:name': { label: string };
  'im:image': { label: string }[];
  summary: { label: string };
  title: { label: string };
  link: { attributes: { href: string } };
  id: { attributes: { 'im:id': string } };
  'im:artist': { label: string };
  category: { attributes: CategoryAPI };
}

interface FeedAPI {
  entry: PodcastDetailAPI[];
  link: { attributes: LinkAPI }[];
}

interface PodcastListResponseAPI {
  feed: FeedAPI;
}

export type { PodcastDetailAPI, PodcastListResponseAPI };
