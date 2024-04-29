import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { STORAGE_PODCAST_LIST_KEY } from 'src/app/constants';
import { getTopPodcastsURL } from 'src/app/PodcastList/service/urls';
import { PodcastListResponseAPI } from 'src/app/types/DataAPI';
import { PodcastList } from 'src/app/types/Data';
import { getPodcastListFromDataAPI } from 'src/app/utils/convertAPIData';
import { havePassed24hours } from 'src/app/utils/dataUtils';

export const usePodcastList = () => {
  const [podcastList, setPodcastList] = useState<PodcastList>();
  const [fetching, setFetching] = useState<boolean>();
  const [searchText, setSearchText] = useState<string>('');
  const navigate = useNavigate();

  const getPodcastListData = async (url: string) => {
    setFetching(true);

    let podcastListData = getPodcastStorageData();
    if (!podcastListData || havePassed24hours(podcastListData.accessed)) {
      podcastListData = await fetchPodcasts(url);
      setPodcastStorageData(podcastListData);
    }

    setPodcastList(podcastListData);
    setFetching(false);
  };

  useEffect(() => {
    getPodcastListData(getTopPodcastsURL());
  }, [searchText]);

  const goToPodcastDetail = (id: number) => {
    navigate(`/podcast/${id}`);
  };

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

  const getPodcastStorageData = () => {
    const data = localStorage.getItem(STORAGE_PODCAST_LIST_KEY);
    return data ? JSON.parse(data) : undefined;
  };

  return {
    podcastList,
    fetching,
    searchText,
    setSearchText,
    goToPodcastDetail,
  };
};
