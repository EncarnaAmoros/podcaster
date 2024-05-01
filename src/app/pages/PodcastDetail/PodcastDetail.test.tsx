import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { resultsPodcast } from '../../mocks/podcastList.mock';
import { episodeList } from 'src/app/mocks/episodes.mock';
import { PodcastDetail } from './PodcastDetail';

vi.mock('react-router-dom', () => ({
  useNavigate: () => {},
  useParams: () => ({ podcastId: '123' }),
}));

vi.mock('./PodcastDetail.hook', () => ({
  usePodcastDetail: vi
    .fn()
    .mockReturnValueOnce({
      podcastSelected: resultsPodcast.feed[1],
      episodeList: episodeList,
      fetching: false,
    })
    .mockReturnValueOnce({
      podcastSelected: resultsPodcast.feed[1],
      episodeList: undefined,
      fetching: false,
    })
    .mockReturnValueOnce({
      podcastSelected: undefined,
      episodeList: episodeList,
      fetching: false,
    }),
}));

describe('Podcast Detail', () => {
  it('should render detail of podcast and list of episodes', async () => {
    render(<PodcastDetail />);

    expect(screen.getByText('Friday Night Karaoke')).toBeVisible();
    expect(screen.getByText('by Friday Night Karaoke')).toBeVisible();
    expect(
      screen.getByText(
        'No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!',
      ),
    ).toBeVisible();
    expect(screen.getByText('The Joe Budden Podcast')).toBeVisible();
    expect(
      screen.getByText('Episode 720 | "You Know More Words Than Me"'),
    ).toBeVisible();
    expect(screen.getByText('Episode 719 | "Beauty Standards"')).toBeVisible();
  });

  it('should render detail of podcast and list of episodes empty', async () => {
    render(<PodcastDetail />);

    expect(screen.getByText('Friday Night Karaoke')).toBeVisible();
    expect(screen.getByText('by Friday Night Karaoke')).toBeVisible();
    expect(
      screen.getByText(
        'No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!',
      ),
    ).toBeVisible();
    expect(
      screen.getByText(
        'The info about the list of episodes of the podcast is not available',
      ),
    ).toBeVisible();
    expect(
      screen.queryByText('The Joe Budden Podcast'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('Episode 720 | "You Know More Words Than Me"'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('Episode 719 | "Beauty Standards"'),
    ).not.toBeInTheDocument();
  });

  it('should render detail of podcast and list of episodes empty', async () => {
    render(<PodcastDetail />);

    expect(screen.queryByText('Friday Night Karaoke')).not.toBeInTheDocument();
    expect(
      screen.queryByText('by Friday Night Karaoke'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        'No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!',
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText('The info about the podcast selected is not available'),
    ).toBeVisible();
    expect(screen.getByText('The Joe Budden Podcast')).toBeVisible();
    expect(
      screen.getByText('Episode 720 | "You Know More Words Than Me"'),
    ).toBeVisible();
    expect(screen.getByText('Episode 719 | "Beauty Standards"')).toBeVisible();
  });
});
