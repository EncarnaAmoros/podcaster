// Data types for the app

interface Category {
  id: number;
  term: string;
  label: string;
}

interface PodcastDetail {
  name: string;
  image: string;
  summary: string;
  title: string;
  link: string;
  id: number;
  artist: string;
  category: Category;
}

interface PodcastList {
  feed: PodcastDetail[];
}

export type { PodcastDetail, PodcastList };
