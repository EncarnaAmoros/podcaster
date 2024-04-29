import { STORAGE_PODCAST_LIST_KEY } from 'src/app/service/constants';
import { PodcastList } from 'src/app/types/Data';

export const useStorageData = () => {
  const setPodcastListStoredData = (podcastListData: PodcastList) => {
    localStorage.setItem(
      STORAGE_PODCAST_LIST_KEY,
      JSON.stringify(podcastListData),
    );
  };

  const getPodcastListStoredData = async () => {
    const data = localStorage.getItem(STORAGE_PODCAST_LIST_KEY);
    return data ? JSON.parse(data) : undefined;
  };

  return {
    setPodcastListStoredData,
    getPodcastListStoredData,
  };
};
