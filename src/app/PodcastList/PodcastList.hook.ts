import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getTopPodcasts } from 'src/app/PodcastList/service/urls';
import { PodcastListResponseAPI } from 'src/app/types/DataAPI';
import { getPodcastListFromDataAPI } from 'src/app/utils/convertAPIData';
import { PodcastList } from 'src/app/types/Data';

export const usePodcastList = () => {
  const firstPage: number = 1;

  const [podcastList, setPodcastList] = useState<PodcastList>();
  const [fetching, setFetching] = useState<boolean>();
  const [currentPage, setCurrentPage] = useState<number>(firstPage);
  const [searchText, setSearchText] = useState<string>('');
  const navigate = useNavigate();

  const fetchPodcasts = async (url: string) => {
    setFetching(true);

    const response = await fetch(url);
    const podcastFee: PodcastListResponseAPI = await response.json();

    setPodcastList(getPodcastListFromDataAPI(podcastFee));
    setCurrentPage(1);
    setFetching(false);
  };

  useEffect(() => {
    fetchPodcasts(getTopPodcasts(searchText));
  }, [searchText]);

  const goToPodcastDetail = (id: number) => {
    navigate(`/podcast/${id}`);
  };

  return {
    podcastList,
    fetching,
    currentPage,
    searchText,
    setSearchText,
    goToPodcastDetail,
  };
};
