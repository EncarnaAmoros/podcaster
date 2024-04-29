import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PodcastList } from 'src/app/PodcastList/PodcastList';

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
            path="/podcast/:id"
            element={<div>{'Podcast item details'}</div>}
          />
          <Route path="/" element={<PodcastList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
