import { useEffect, useState } from 'react';

import { STORAGE_PODCAST_LIST_KEY } from 'src/app/constants';
import { getTopPodcastsURL } from 'src/app/PodcastList/service/urls';
import { PodcastListResponseAPI } from 'src/app/types/DataAPI';
import { PodcastList, PodcastDetail } from 'src/app/types/Data';
import { getPodcastListFromDataAPI } from 'src/app/utils/convertAPIData';
import { havePassed24hours } from 'src/app/utils/dataUtils';

export const usePodcastList = () => {
  const [podcastList, setPodcastList] = useState<PodcastList>();
  const [fetching, setFetching] = useState<boolean>();
  const [searchText, setSearchText] = useState<string>('');

  const getPodcastListData = async (url: string) => {
    setFetching(true);

    let podcastListData = await getPodcastStorageData();
    if (!podcastListData || havePassed24hours(podcastListData.accessed)) {
      podcastListData = await fetchPodcasts(url);
      setPodcastStorageData(podcastListData);
    }

    setPodcastList(podcastListData);
    setFetching(false);
  };

  // initial fetch data
  useEffect(() => {
    getPodcastListData(getTopPodcastsURL());
  }, []);

  // filter daya by search text
  useEffect(() => {
    getPodcastListFilterBySearch();
  }, [searchText]);

  const fetchPodcasts = async (url: string) => {
    const response = await fetch(url);
    const podcastFee: PodcastListResponseAPI = await response.json();
    return getPodcastListFromDataAPI(podcastFee);
  };

  const setPodcastStorageData = (podcastListData: PodcastList) => {
    localStorage.setItem(
      STORAGE_PODCAST_LIST_KEY,
      JSON.stringify(podcastListData),
    );
  };

  const getPodcastStorageData = async () => {
    const data = localStorage.getItem(STORAGE_PODCAST_LIST_KEY);
    return data ? JSON.parse(data) : undefined;
  };

  const getPodcastListFilterBySearch = async () => {
    const data = await getPodcastStorageData();
    if (data) {
      const filteredData = {
        ...data,
        feed: data.feed.filter(
          (podcast: PodcastDetail) =>
            podcast.name.toLowerCase().includes(searchText.toLowerCase()) ||
            podcast.artist.toLowerCase().includes(searchText.toLowerCase()),
        ),
      };
      setPodcastList(filteredData);
    }
  };

  return {
    podcastList,
    fetching,
    searchText,
    setSearchText,
  };
};
