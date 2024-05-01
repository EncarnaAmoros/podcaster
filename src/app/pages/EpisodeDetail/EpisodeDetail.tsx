import { useParams } from 'react-router-dom';
import { useEpisodeDetail } from './EpisodeDetail.hook';

import { GeneralInfo } from 'src/components/GeneralInfo/GeneralInfo';
import { CardDetail } from 'src/components/CardDetail/CardDetail';
import { EpisodeCard } from 'src/app/components/EpisodeCard/EpisodeCard';

import styles from './EpisodeDetail.module.scss';

export const EpisodeDetail = () => {
  const { podcastId, trackId } = useParams();
  const { podcastSelected, episodeSelected } = useEpisodeDetail(
    podcastId,
    trackId,
  );

  const noPodcastSelectedData =
    'The info about the podcast selected is not available';

  const noEpisodeSelectedData =
    'The info about the episode selected is not available';

  return (
    <article className={styles.podcastDetail}>
      {podcastSelected ? (
        <CardDetail
          image={podcastSelected.image}
          title={podcastSelected.name}
          subtitle={`by ${podcastSelected.artist}`}
          description={podcastSelected.summary}
        />
      ) : (
        <GeneralInfo info={noPodcastSelectedData} />
      )}
      {episodeSelected ? (
        <EpisodeCard
          trackName={episodeSelected.trackName}
          description={episodeSelected.description}
          episodeUrl={episodeSelected.episodeUrl}
        />
      ) : (
        <>{<GeneralInfo info={noEpisodeSelectedData} />}</>
      )}
    </article>
  );
};
