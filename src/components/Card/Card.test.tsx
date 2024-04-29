import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';

import { Card } from './Card';

describe('Card', () => {
  it('should render a podcast card', async () => {
    render(
      <Card
        title="Top musical hits"
        image="imageTest.png"
        subtitle="Author: Pepe"
        onClick={() => {}}
      />,
    );

    expect(screen.getByText('Top musical hits')).toBeVisible();
    expect(screen.getByText(/author: pepe/i)).toBeVisible();
  });

  it('should render a podcast card without author', async () => {
    render(<Card title="Mix music" image="imageTest.png" onClick={() => {}} />);

    expect(screen.getByText('Mix music')).toBeVisible();
    expect(screen.queryByText(/author: /i)).not.toBeInTheDocument();
  });

  it('should execute onClick function when click on card', async () => {
    const goToPodcastDetail = vi.fn();
    render(
      <Card
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
