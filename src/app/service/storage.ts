import {
  STORAGE_PODCAST_LIST_KEY,
  STORAGE_PODCAST_EPISODES_KEY,
} from 'src/app/service/constants';
import { PodcastDetail, PodcastList } from 'src/app/types/PodcastListData';
import { Episode, EpisodeListResponse } from 'src/app/types/EpisodesData';

export const useStorageData = () => {
  const setStoredData = (storageKey: string, data: Object) => {
    localStorage.setItem(storageKey, JSON.stringify(data));
  };

  const getStoredData = (storageKey: string) => {
    const data = localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : undefined;
  };

  const setPodcastListStoredData = (podcastListData: PodcastList) => {
    setStoredData(STORAGE_PODCAST_LIST_KEY, podcastListData);
  };

  const getPodcastListStoredData = () => {
    return getStoredData(STORAGE_PODCAST_LIST_KEY);
  };

  const setPodcastEpisodesStoredData = (
    episodesData: EpisodeListResponse,
    idPodcast: string,
  ) => {
    setStoredData(`${STORAGE_PODCAST_EPISODES_KEY}_${idPodcast}`, episodesData);
  };

  const getPodcastEpisodesStoredData = (idPodcast: string) => {
    return getStoredData(`${STORAGE_PODCAST_EPISODES_KEY}_${idPodcast}`);
  };

  const getPodcastSelected = (id: number) => {
    const podcastList = getPodcastListStoredData();
    if (!podcastList?.feed) return;

    return podcastList.feed.find((podcast: PodcastDetail) => podcast.id === id);
  };

  const getEpisodeSelected = (podcastId: string, trackId: number) => {
    const episodeList = getPodcastEpisodesStoredData(podcastId);
    if (!episodeList?.results) return;

    return episodeList.results.find(
      (episode: Episode) => episode.trackId === trackId,
    );
  };

  return {
    setPodcastListStoredData,
    getPodcastListStoredData,
    setPodcastEpisodesStoredData,
    getPodcastEpisodesStoredData,
    getPodcastSelected,
    getEpisodeSelected,
  };
};
