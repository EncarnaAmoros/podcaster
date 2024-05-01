import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  initNavigation,
  stopNavigation,
} from 'src/app/features/navigationSlice';
import { useStorageData } from 'src/app/service/storage';
import { Episode } from 'src/app/types/EpisodesData';
import { PodcastDetail } from 'src/app/types/PodcastListData';

export const useEpisodeDetail = (podcastId: string, trackId?: string) => {
  const dispatch = useDispatch();
  const { getPodcastSelected, getEpisodeSelected } = useStorageData();

  const [podcastSelected, setPodcastSelected] = useState<PodcastDetail>();
  const [episodeSelected, setEpisodeSelected] = useState<Episode>();

  useEffect(() => {
    dispatch(initNavigation());
    // if there is no podcast data selected we get it from the storage
    if (!podcastSelected && podcastId) {
      setPodcastSelected(getPodcastSelected(Number(podcastId)));
    }
    if (!episodeSelected && trackId) {
      setEpisodeSelected(getEpisodeSelected(podcastId, Number(trackId)));
    }
    dispatch(stopNavigation());
  }, []);

  return { podcastSelected, episodeSelected };
};
