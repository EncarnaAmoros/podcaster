interface EpisodeListResponse {
  contents: string;
  status: Status;
}

interface EpisodeList {
  resultCount: number;
  results: Episode[];
}

interface Status {
  url: string;
  content_type: string;
  http_code: number;
  response_time: number;
  content_length: number;
}

interface Episode {
  wrapperType: string;
  kind: string;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: string;
  currency?: string;
  primaryGenreName?: string;
  artworkUrl600: string;
  genreIds?: string[];
  genres: (Genre | string)[];
  previewUrl?: string;
  artistIds?: number[];
  closedCaptioning?: string;
  shortDescription?: string;
  episodeGuid?: string;
  description?: string;
  artworkUrl160?: string;
  episodeFileExtension?: string;
  episodeContentType?: string;
  episodeUrl?: string;
  contentAdvisoryRating?: string;
}

interface Genre {
  name: string;
  id: string;
}

export type { EpisodeList, Episode, EpisodeListResponse };
