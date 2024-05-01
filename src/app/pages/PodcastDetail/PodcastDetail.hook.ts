import { useEffect, useState } from 'react';

import { getPodcastDetailURL } from 'src/app/service/urls';
import { EpisodeListResponse, EpisodeList } from 'src/app/types/EpisodesData';
import { getEpisodeListFromDataAPI } from 'src/app/utils/convertAPIData';
import { PodcastDetail } from 'src/app/types/PodcastListData';
import { havePassed24hours } from 'src/app/utils/dataUtils';
import { useStorageData } from 'src/app/service/storage';

export const usePodcastDetail = (podcastId: string) => {
  const { getPodcastSelected } = useStorageData();
  const { setPodcastEpisodesStoredData, getPodcastEpisodesStoredData } =
    useStorageData();

  const [episodeList, setEpisodeList] = useState<EpisodeList>();
  const [podcastSelected, setPodcastSelected] = useState<PodcastDetail>();
  const [fetching, setFetching] = useState<boolean>();

  const getPodcasDetailData = async () => {
    setFetching(true);

    let episodesData = await getPodcastEpisodesStoredData(podcastId);
    if (!episodesData || havePassed24hours(episodesData.accessed)) {
      episodesData = await fetchDetailPodcast();
      setPodcastEpisodesStoredData(episodesData, podcastId);
    }

    setEpisodeList(episodesData);
    setFetching(false);
  };

  useEffect(() => {
    // initial fetch data
    getPodcasDetailData();
  }, []);

  useEffect(() => {
    // if there is no podcast data selected we get it from the storage
    if (!podcastSelected && podcastId) {
      setPodcastSelected(getPodcastSelected(Number(podcastId)));
    }
  }, []);

  const fetchDetailPodcast = async () => {
    const response = await fetch(getPodcastDetailURL(podcastId));
    const episodesData: EpisodeListResponse = await response.json();
    return getEpisodeListFromDataAPI(episodesData);
  };

  return { podcastSelected, episodeList, fetching };
};
