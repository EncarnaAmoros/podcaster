import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';

import { CardList } from './CardList';

describe('CardList', () => {
  it('should render a card item part of a list', async () => {
    render(
      <CardList
        title="Top musical hits"
        image="imageTest.png"
        subtitle="Author: Pepe"
        onClick={() => {}}
      />,
    );

    expect(screen.getByText('Top musical hits')).toBeVisible();
    expect(screen.getByText(/author: pepe/i)).toBeVisible();
  });

  it('should render a card item part of a list without subtitle', async () => {
    render(
      <CardList title="Mix music" image="imageTest.png" onClick={() => {}} />,
    );

    expect(screen.getByText('Mix music')).toBeVisible();
    expect(screen.queryByText(/author: /i)).not.toBeInTheDocument();
  });

  it('should execute onClick function when click on card', async () => {
    const goToPodcastDetail = vi.fn();
    render(
      <CardList
        title="Top musical hits"
        image="imageTest.png"
        subtitle="Author: Pepe"
        onClick={goToPodcastDetail}
      />,
    );

    screen.getByText('Top musical hits').click();
    expect(goToPodcastDetail).toHaveBeenCalledOnce();
  });
});
