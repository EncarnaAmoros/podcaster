import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PodcastList } from 'src/app/pages/PodcastList/PodcastList';
import { PodcastDetail } from './app/pages/PodcastDetail/PodcastDetail';
import { EpisodeDetail } from './app/pages/EpisodeDetail/EpisodeDetail';

import styles from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  const title = 'Podcaster';

  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <h1>
          <a className={styles.app__title} href="/">
            {title}
          </a>
        </h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/podcast/:podcastId/episode/:trackId"
            element={<EpisodeDetail />}
          />
          <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
          <Route path="/" element={<PodcastList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
