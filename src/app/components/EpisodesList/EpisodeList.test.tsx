import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { EpisodeList } from './EpisodeList';
import { episodeList } from 'src/app/mocks/episodes.mock';

describe('EpisodeList', () => {
  it('should render a table of episodes with the track names', async () => {
    render(
      <EpisodeList
        episodeCount={episodeList.resultCount}
        episodeList={episodeList.results}
        goToPodcastEpisode={() => {}}
      />,
    );

    expect(screen.getByText('The Joe Budden Podcast')).toBeVisible();
    expect(
      screen.getByText('Episode 720 | "You Know More Words Than Me"'),
    ).toBeVisible();
    expect(screen.getByText('Episode 719 | "Beauty Standards"')).toBeVisible();
  });

  it('should render count of episodes in the table', async () => {
    render(
      <EpisodeList
        episodeCount={episodeList.resultCount}
        episodeList={episodeList.results}
        goToPodcastEpisode={() => {}}
      />,
    );

    expect(screen.getByText('Episodes: 3')).toBeVisible();
  });

  it('should render a table of episodes with the formatted dates', async () => {
    render(
      <EpisodeList
        episodeCount={episodeList.resultCount}
        episodeList={episodeList.results}
        goToPodcastEpisode={() => {}}
      />,
    );

    expect(screen.getByText('4/25/2024')).toBeVisible();
    expect(screen.getByText('4/27/2024')).toBeVisible();
    expect(screen.getByText('4/24/2024')).toBeVisible();
  });

  it('should render a table of episodes with the formatted duration', async () => {
    render(
      <EpisodeList
        episodeCount={episodeList.resultCount}
        episodeList={episodeList.results}
        goToPodcastEpisode={() => {}}
      />,
    );

    expect(screen.getByText('00:00:13')).toBeVisible();
    expect(screen.getByText('03:12:00')).toBeVisible();
    expect(screen.getByText('03:39:15')).toBeVisible();
  });
});
