import {
  PodcastDetailAPI,
  PodcastListResponseAPI,
} from 'src/app/types/PodcastListDataAPI';
import { PodcastDetail, PodcastList } from 'src/app/types/PodcastListData';
import { EpisodeListResponse, EpisodeList } from 'src/app/types/EpisodesData';

const getPodcastDetail = (podcastDetail: PodcastDetailAPI): PodcastDetail => {
  return {
    name: podcastDetail['im:name'].label,
    image: podcastDetail['im:image'][2].label,
    summary: podcastDetail.summary.label,
    title: podcastDetail.title.label,
    link: podcastDetail.link.attributes.href,
    id: Number(podcastDetail.id.attributes['im:id']),
    artist: podcastDetail['im:artist'].label,
    category: {
      id: Number(podcastDetail.category.attributes['im:id']),
      term: podcastDetail.category.attributes.term,
      label: podcastDetail.category.attributes.label,
    },
  };
};

const getPodcastListFromDataAPI = (
  podcastResponseAPI: PodcastListResponseAPI,
): PodcastList => ({
  feed: podcastResponseAPI.feed.entry.map((podcastDetail) =>
    getPodcastDetail(podcastDetail),
  ),
  accessed: new Date().toString(),
});

const getEpisodeListFromDataAPI = (
  podcastResponseAPI: EpisodeListResponse,
): EpisodeList => JSON.parse(podcastResponseAPI.contents);

export { getPodcastListFromDataAPI, getEpisodeListFromDataAPI };
