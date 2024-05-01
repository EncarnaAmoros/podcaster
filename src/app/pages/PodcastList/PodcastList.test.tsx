import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import {
  resultsPodcast,
  resultsNoPodcastData,
} from '../../mocks/podcastList.mock';
import { PodcastList } from './PodcastList';

vi.mock('react-router-dom', () => ({
  useNavigate: () => {},
}));

vi.mock('./PodcastList.hook', () => ({
  usePodcastList: vi
    .fn()
    .mockReturnValueOnce({
      podcastList: resultsPodcast,
      fetching: false,
      searchText: '',
    })
    .mockReturnValueOnce({ resultsNoPodcastData, fetching: false })
    .mockReturnValueOnce({
      podcastList: resultsPodcast,
      fetching: false,
      searchText: '',
    }),
}));

vi.mock('src/app/service/storage', () => ({
  useStorageData: vi.fn().mockReturnValue({
    setPodcastSelectedInState: () => {},
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
