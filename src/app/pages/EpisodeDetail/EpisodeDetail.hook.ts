import { useEffect, useState } from 'react';

import { useStorageData } from 'src/app/service/storage';
import { Episode } from 'src/app/types/EpisodesData';
import { PodcastDetail } from 'src/app/types/PodcastListData';

export const useEpisodeDetail = (podcastId: string, trackId?: string) => {
  const { getPodcastSelected, getEpisodeSelected } = useStorageData();
  const [podcastSelected, setPodcastSelected] = useState<PodcastDetail>();
  const [episodeSelected, setEpisodeSelected] = useState<Episode>();

  useEffect(() => {
    // if there is no podcast data selected we get it from the storage
    if (!podcastSelected && podcastId) {
      setPodcastSelected(getPodcastSelected(Number(podcastId)));
    }
    if (!episodeSelected && trackId) {
      setEpisodeSelected(getEpisodeSelected(podcastId, Number(trackId)));
    }
  }, []);

  return { podcastSelected, episodeSelected };
};
