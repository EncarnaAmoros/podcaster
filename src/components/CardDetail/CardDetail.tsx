import { Card as BootstrapCard } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import styles from './CardDetail.module.scss';

type PodcastBasicInfo = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

export const CardDetail = (props: PodcastBasicInfo) => {
  const { image, title, subtitle, description } = props;
  return (
    <div className={styles.cardDetail}>
      <BootstrapCard className={styles.cardDetail__content}>
        <BootstrapCard.Body>
          <div className={styles.cardDetail__image}>
            <Image src={image} rounded alt={title} />
          </div>

          <hr />
          <BootstrapCard.Title>{title}</BootstrapCard.Title>
          <BootstrapCard.Text className={styles.cardDetail__subtitle}>
            {subtitle}
          </BootstrapCard.Text>

          <hr />
          <BootstrapCard.Title>{`Description:`}</BootstrapCard.Title>
          <BootstrapCard.Text className={styles.cardDetail__description}>
            {description}
          </BootstrapCard.Text>
        </BootstrapCard.Body>
      </BootstrapCard>
    </div>
  );
};
