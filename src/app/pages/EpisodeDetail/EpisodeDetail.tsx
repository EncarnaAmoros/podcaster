import { useParams, useNavigate } from 'react-router-dom';
import { useEpisodeDetail } from './EpisodeDetail.hook';

import { GeneralInfo } from 'src/components/GeneralInfo/GeneralInfo';
import { CardDetail } from 'src/components/CardDetail/CardDetail';
import { EpisodeCard } from 'src/app/components/EpisodeCard/EpisodeCard';

import styles from './EpisodeDetail.module.scss';

export const EpisodeDetail = () => {
  const { podcastId, trackId } = useParams();
  if (!podcastId || !trackId) return;

  const navigate = useNavigate();
  const { podcastSelected, episodeSelected } = useEpisodeDetail(
    podcastId,
    trackId,
  );

  const goToPodcastDetail = () => {
    navigate(`/podcast/${podcastId}/`);
  };

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
          onClickCard={goToPodcastDetail}
        />
      ) : (
        <GeneralInfo info={noPodcastSelectedData} />
      )}
      {episodeSelected ? (
        <EpisodeCard
          trackName={episodeSelected.trackName}
          description={episodeSelected.description}
          episodeUrl={episodeSelected.episodeUrl}
          audioType={episodeSelected.episodeFileExtension}
        />
      ) : (
        <>{<GeneralInfo info={noEpisodeSelectedData} />}</>
      )}
    </article>
  );
};
