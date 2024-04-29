import { http, HttpResponse } from 'msw';
import { mockResultsPodcast } from './PodcastListAPI.mock.ts';

export const handlers = [
  http.get('*/us/rss/toppodcasts/*', ({}) => {
    return HttpResponse.json(mockResultsPodcast);
  }),
];
