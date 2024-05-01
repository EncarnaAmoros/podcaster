import Table from 'react-bootstrap/Table';
import { Episode } from 'src/app/types/EpisodesData';
import { formatDateString, formatDuration } from 'src/app/utils/dataUtils';

import styles from './EpisodeList.module.scss';

type EpisodeListProps = {
  episodeCount: number;
  episodeList: Episode[];
  goToPodcastEpisode: (idEpisode: number) => void;
};

export const EpisodeList = ({
  episodeCount,
  episodeList,
  goToPodcastEpisode,
}: EpisodeListProps) => {
  return (
    <div className={styles.episodeList}>
      <div className={styles.episodeList__totalEpisodes}>
        <p>{`Episodes: ${episodeCount}`}</p>
      </div>
      <div className={styles.episodeList__table}>
        <Table striped hover size="sm">
          <thead>
            <tr>
              <th>{'Title'}</th>
              <th>{'Date'}</th>
              <th>{'Duration'}</th>
            </tr>
          </thead>
          <tbody>
            {episodeList.map((episode) => {
              return (
                <tr key={episode.trackName}>
                  <td
                    className={styles.episodeList__table__title}
                    onClick={() => goToPodcastEpisode(episode.trackId)}
                  >
                    {episode.trackName}
                  </td>
                  <td>{formatDateString(episode.releaseDate)}</td>
                  <td>{formatDuration(episode.trackTimeMillis)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
