import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { resultsPodcast } from '../../mocks/podcastList.mock';
import { episodeWithEverything } from 'src/app/mocks/episodes.mock';
import { EpisodeDetail } from './EpisodeDetail';

vi.mock('react-router-dom', () => ({
  useNavigate: () => {},
  useParams: () => ({ podcastId: '123', trackId: '456' }),
}));

vi.mock('./EpisodeDetail.hook', () => ({
  useEpisodeDetail: vi
    .fn()
    .mockReturnValueOnce({
      podcastSelected: resultsPodcast.feed[1],
      episodeSelected: episodeWithEverything,
    })
    .mockReturnValueOnce({
      podcastSelected: resultsPodcast.feed[1],
      episodeSelected: undefined,
    })
    .mockReturnValueOnce({
      podcastSelected: undefined,
      episodeSelected: episodeWithEverything,
    }),
}));

describe('Episode Detail', () => {
  it('should render detail of podcast and episode', async () => {
    render(<EpisodeDetail />);

    expect(screen.getByText('Friday Night Karaoke')).toBeVisible();
    expect(screen.getByText('by Friday Night Karaoke')).toBeVisible();
    expect(
      screen.getByText(
        'No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!',
      ),
    ).toBeVisible();
    expect(
      screen.getByText('Episode 720 | "You Know More Words Than Me"'),
    ).toBeVisible();
    expect(
      screen.queryByText(
        'The info about the podcast selected is not available',
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        'The info about the episode selected is not available',
      ),
    ).not.toBeInTheDocument();
  });

  it('should render detail of podcast and episode empty', async () => {
    render(<EpisodeDetail />);

    expect(screen.getByText('Friday Night Karaoke')).toBeVisible();
    expect(screen.getByText('by Friday Night Karaoke')).toBeVisible();
    expect(
      screen.getByText(
        'No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!',
      ),
    ).toBeVisible();
    expect(
      screen.queryByText(
        'The info about the podcast selected is not available',
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText('The info about the episode selected is not available'),
    ).toBeVisible();
  });

  it('should render detail of podcast empty and episode with data', async () => {
    render(<EpisodeDetail />);

    expect(
      screen.getByText('The info about the podcast selected is not available'),
    ).toBeVisible();
    expect(
      screen.queryByText(
        'The info about the episode selected is not available',
      ),
    ).not.toBeInTheDocument();
  });
});
