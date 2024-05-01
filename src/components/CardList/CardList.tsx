import { Card as BootstrapCard } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import styles from './CardList.module.scss';

type PodcastBasicInfo = {
  image: string;
  title: string;
  subtitle?: string;
  onClick: () => void;
};

export const CardList = (props: PodcastBasicInfo) => {
  const { title, image, subtitle, onClick } = props;
  return (
    <div className={styles.cardList} onClick={onClick}>
      <div className={styles.cardList__image}>
        <Image src={image} roundedCircle alt={title} />
      </div>
      <BootstrapCard className={styles.cardList__content}>
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
