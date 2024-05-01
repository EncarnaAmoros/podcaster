import { http, HttpResponse } from 'msw';
import { resultsPodcast } from './podcastListAPI.mock.ts';

export const handlers = [
  http.get('*/us/rss/toppodcasts/*', ({}) => {
    return HttpResponse.json(resultsPodcast);
  }),
];
