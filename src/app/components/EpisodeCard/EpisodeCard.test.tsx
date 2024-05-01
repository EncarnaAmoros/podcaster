import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
  episodeWithEverything,
  episodeWithoutDescription,
  episodeWithoutAudio,
} from 'src/app/mocks/episodes.mock';

import { EpisodeCard } from './EpisodeCard';

describe('EpisodeCard', () => {
  it('should render an episode card with all the data', async () => {
    render(
      <EpisodeCard
        trackName={episodeWithEverything.trackName}
        description={episodeWithEverything.description}
        episodeUrl={episodeWithEverything.episodeUrl}
        audioType={episodeWithEverything.episodeFileExtension}
      />,
    );

    expect(screen.getByText(episodeWithEverything.trackName)).toBeVisible();
    expect(
      screen.queryByText('No description available'),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('No audio available')).not.toBeInTheDocument();
  });

  it('should render an episode card without description', async () => {
    render(
      <EpisodeCard
        trackName={episodeWithoutDescription.trackName}
        description={episodeWithoutDescription.description}
        episodeUrl={episodeWithoutDescription.episodeUrl}
        audioType={episodeWithoutDescription.episodeFileExtension}
      />,
    );

    expect(screen.getByText(episodeWithoutDescription.trackName)).toBeVisible();
    expect(screen.getByText('No description available')).toBeVisible();
    expect(screen.queryByText('No audio available')).not.toBeInTheDocument();
  });

  it('should render an episode card without audio', async () => {
    render(
      <EpisodeCard
        trackName={episodeWithoutAudio.trackName}
        description={
          episodeWithoutAudio.description || 'No description available'
        }
        episodeUrl={episodeWithoutAudio.episodeUrl}
        audioType={episodeWithoutAudio.episodeFileExtension}
      />,
    );

    expect(screen.getByText(episodeWithoutAudio.trackName)).toBeVisible();
    expect(
      screen.queryByText('No description available'),
    ).not.toBeInTheDocument();
    expect(screen.getByText('No audio available')).toBeVisible();
  });

  it.only('should render description with HTML interpretated', async () => {
    render(
      <EpisodeCard
        trackName={episodeWithoutAudio.trackName}
        description={'<p>Test description</p>'}
        episodeUrl={episodeWithoutAudio.episodeUrl}
        audioType={episodeWithoutAudio.episodeFileExtension}
      />,
    );

    expect(screen.getByText('Test description')).toBeVisible();
  });
});
