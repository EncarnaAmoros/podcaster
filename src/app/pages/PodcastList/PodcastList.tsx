import { useNavigate } from 'react-router-dom';
import { usePodcastList } from './PodcastList.hook';
import { PodcastDetail } from 'src/app/types/Data';

import { GeneralInfo } from 'src/components/GeneralInfo/GeneralInfo';
import { Spinner } from 'src/components/Spinner/Spinner';
import { Search } from 'src/components/Search/Search';
import { Card } from 'src/components/Card/Card';

import styles from './PodcastList.module.scss';

export const PodcastList = () => {
  const { podcastList, fetching, searchText, setSearchText } = usePodcastList();
  const navigate = useNavigate();

  const goToPodcastDetail = (id: number) => {
    navigate(`/podcast/${id}`);
  };

  const noListData = 'No podcast available';

  return (
    <article className={styles.podcastList}>
      <section className={styles.podcastList__search}>
        <Search
          text={searchText}
          onChangeSearch={setSearchText}
          results={podcastList?.feed ? podcastList?.feed.length : 0}
        />
      </section>
      {!fetching && podcastList?.feed ? (
        <section className={styles.podcastList__items}>
          {podcastList.feed.map((podcast: PodcastDetail) => {
            return (
              <Card
                key={podcast.id}
                image={podcast.image}
                title={podcast.name}
                subtitle={
                  podcast.artist ? `Author: ${podcast.artist}` : undefined
                }
                onClick={() => goToPodcastDetail(podcast.id)}
              />
            );
          })}
        </section>
      ) : (
        <>{fetching ? <Spinner /> : <GeneralInfo info={noListData} />}</>
      )}
    </article>
  );
};
