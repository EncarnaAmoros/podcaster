import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import {
  mockResultsPodcast,
  mockResultsNoPodcastData,
} from '../mocks/PodcastList.mock';
import { PodcastList } from './PodcastList';

vi.mock('react-router-dom', () => ({
  useNavigate: () => {},
}));

vi.mock('./PodcastList.hook', () => ({
  usePodcastList: vi
    .fn()
    .mockReturnValueOnce({
      podcastList: mockResultsPodcast,
      fetching: false,
      searchText: '',
      goToPodcastDetail: () => {},
    })
    .mockReturnValueOnce({ mockResultsNoPodcastData, fetching: false })
    .mockReturnValueOnce({
      podcastList: mockResultsPodcast,
      fetching: false,
      searchText: '',
      goToPodcastDetail: () => {},
    }),
}));

describe('Podcast List', () => {
  it('should render a list of podcast', async () => {
    render(<PodcastList />);

    expect(screen.getByText('The Joe Budden Podcast')).toBeVisible();
    expect(screen.getByText('Friday Night Karaoke')).toBeVisible();
    expect(screen.getByText('R&B Money')).toBeVisible();
  });

  it('should render a empty list of podcast', async () => {
    render(<PodcastList />);

    expect(screen.getByText('No podcast available')).toBeVisible();
  });
});
