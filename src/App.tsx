import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PodcastList } from 'src/app/pages/PodcastList/PodcastList';
import { PodcastDetail } from './app/pages/PodcastDetail/PodcastDetail';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

export const App = () => {
  const title = 'Podcaster';

  return (
    <div className="app">
      <div className="app__header">
        <h1 className="app__title">{title}</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/podcast/:podcastId/episode/:trackId"
            element={<div>Episode Detail</div>}
          />
          <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
          <Route path="/" element={<PodcastList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
