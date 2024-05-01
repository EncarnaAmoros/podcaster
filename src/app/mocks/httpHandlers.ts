import { http, HttpResponse } from 'msw';
import { resultsPodcast } from './podcastListAPI.mock.ts';
import { episodeListResponseAPI1 } from './episodes.mock.ts';

export const handlers = [
  http.get('*/us/rss/toppodcasts/*', ({}) => {
    return HttpResponse.json(resultsPodcast);
  }),

  http.get('*allorigins*', ({}) => {
    return HttpResponse.json(episodeListResponseAPI1);
  }),
];
