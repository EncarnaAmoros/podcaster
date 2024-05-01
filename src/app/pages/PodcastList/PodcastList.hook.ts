import { useEffect, useState } from 'react';

import { getTopPodcastsURL } from 'src/app/service/urls';
import { PodcastListResponseAPI } from 'src/app/types/PodcastListDataAPI';
import { PodcastList, PodcastDetail } from 'src/app/types/PodcastListData';
import { getPodcastListFromDataAPI } from 'src/app/utils/convertAPIData';
import { havePassed24hours } from 'src/app/utils/dataUtils';
import { useStorageData } from 'src/app/service/storage';

export const usePodcastList = () => {
  const { setPodcastListStoredData, getPodcastListStoredData } =
    useStorageData();

  const [podcastList, setPodcastList] = useState<PodcastList>();
  const [fetching, setFetching] = useState<boolean>();
  const [searchText, setSearchText] = useState<string>('');

  const getPodcastListData = async () => {
    setFetching(true);

    let podcastListData = await getPodcastListStoredData();
    if (!podcastListData || havePassed24hours(podcastListData.accessed)) {
      podcastListData = await fetchPodcasts(getTopPodcastsURL());
      setPodcastListStoredData(podcastListData);
    }

    setPodcastList(podcastListData);
    setFetching(false);
  };

  useEffect(() => {
    // initial fetch data
    getPodcastListData();
  }, []);

  useEffect(() => {
    // filter daya by search text
    getPodcastListFilterBySearch();
  }, [searchText]);

  const fetchPodcasts = async (url: string) => {
    const response = await fetch(url);
    const podcastFee: PodcastListResponseAPI = await response.json();
    return getPodcastListFromDataAPI(podcastFee);
  };

  const getPodcastListFilterBySearch = async () => {
    const data = await getPodcastListStoredData();
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
