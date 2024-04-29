import { Card as BootstrapCard } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import styles from './Card.module.scss';

type PodcastBasicInfo = {
  image: string;
  title: string;
  subtitle?: string;
  onClick: () => void;
};

export const Card = (props: PodcastBasicInfo) => {
  const { title, image, subtitle, onClick } = props;
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.card__image}>
        <Image src={image} roundedCircle alt={title} />
      </div>
      <BootstrapCard className={styles.card__content}>
        <BootstrapCard.Body>
          <BootstrapCard.Title>{title}</BootstrapCard.Title>

          {subtitle != undefined && (
            <BootstrapCard.Text>{subtitle}</BootstrapCard.Text>
          )}
        </BootstrapCard.Body>
      </BootstrapCard>
    </div>
  );
};
