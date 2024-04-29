import {
  PodcastDetailAPI,
  PodcastListResponseAPI,
} from 'src/app/types/DataAPI';
import { PodcastDetail, PodcastList } from '../types/Data';

const getPodcastDetail = (podcastDetail: PodcastDetailAPI): PodcastDetail => {
  return {
    ...podcastDetail,
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

export { getPodcastListFromDataAPI };
