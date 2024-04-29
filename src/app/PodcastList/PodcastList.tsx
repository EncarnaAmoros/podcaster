import { Spinner } from 'src/components/Spinner/Spinner';
import { Card } from 'src/components/Card/Card';
import { PodcastDetail } from 'src/app/types/Data';
import { GeneralInfo } from 'src/components/GeneralInfo/GeneralInfo';
import { usePodcastList } from './PodcastList.hook';

import styles from './PodcastList.module.scss';

export const PodcastList = () => {
  const { podcastList, fetching, goToPodcastDetail } = usePodcastList();

  const noListData = 'No podcast available';

  return (
    <section className={styles.podcastList}>
      {podcastList?.feed ? (
        <div className={styles.podcastList__items}>
          {podcastList.feed.map((podcast: PodcastDetail) => {
            return (
              <Card
                key={podcast.id}
                image={podcast.image}
                title={podcast.name}
                subtitle={
                  podcast.artist ? `author: ${podcast.artist}` : undefined
                }
                onClick={() => goToPodcastDetail(podcast.id)}
              />
            );
          })}
        </div>
      ) : (
        <>{fetching ? <Spinner /> : <GeneralInfo info={noListData} />}</>
      )}
    </section>
  );
};
