import { useParams, useNavigate } from 'react-router-dom';
import { usePodcastDetail } from './PodcastDetail.hook';

import { EpisodeList } from 'src/app/components/EpisodesList/EpisodeList';
import { GeneralInfo } from 'src/components/GeneralInfo/GeneralInfo';
import { CardDetail } from 'src/components/CardDetail/CardDetail';
import { Spinner } from 'src/components/Spinner/Spinner';

import styles from './PodcastDetail.module.scss';

export const PodcastDetail = () => {
  const { podcastId } = useParams();
  if (!podcastId) return;

  const navigate = useNavigate();
  const { podcastSelected, episodeList, fetching } =
    usePodcastDetail(podcastId);

  const goToPodcastEpisode = (idEpisode: number) => {
    navigate(`/podcast/${podcastId}/episode/${idEpisode}`);
  };

  const noListData =
    'The info about the list of episodes of the podcast is not available';
  const noPodcastSelectedData =
    'The info about the podcast selected is not available';

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
      {!fetching && episodeList?.results ? (
        <EpisodeList
          episodeCount={episodeList.resultCount}
          episodeList={episodeList.results}
          goToPodcastEpisode={goToPodcastEpisode}
        />
      ) : (
        <>{fetching ? <Spinner /> : <GeneralInfo info={noListData} />}</>
      )}
    </article>
  );
};
