import parse from 'html-react-parser';

import styles from './EpisodeCard.module.scss';
import { GeneralInfo } from 'src/components/GeneralInfo/GeneralInfo';

type EpisodeCardProps = {
  trackName: string;
  description?: string;
  episodeUrl?: string;
  audioType?: string;
};

export const EpisodeCard = ({
  trackName,
  description,
  episodeUrl,
  audioType,
}: EpisodeCardProps) => {
  return (
    <div className={styles.episodeCard}>
      <p className={styles.episodeCard__title}>{trackName}</p>

      <div className={styles.episodeCard__description}>
        {description ? (
          <span>{parse(description)}</span>
        ) : (
          <GeneralInfo info="No description available" />
        )}
      </div>
      <div className={styles.episodeCard__audio}>
        {episodeUrl && audioType ? (
          <audio controls>
            <source src={episodeUrl} type={`audio/${audioType}`} />
          </audio>
        ) : (
          <GeneralInfo info="No audio available" />
        )}
      </div>
    </div>
  );
};
