import { useNavigate } from 'react-router-dom';
import { usePodcastList } from './PodcastList.hook';
import { PodcastDetail } from 'src/app/types/PodcastListData';

import { GeneralInfo } from 'src/components/GeneralInfo/GeneralInfo';
import { Spinner } from 'src/components/Spinner/Spinner';
import { Search } from 'src/components/Search/Search';
import { CardList } from 'src/components/CardList/CardList';

import styles from './PodcastList.module.scss';

export const PodcastList = () => {
  const navigate = useNavigate();
  const { podcastList, fetching, searchText, setSearchText } = usePodcastList();

  const goToPodcastDetail = (podcastId: number) => {
    navigate(`/podcast/${podcastId}`);
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
              <CardList
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
