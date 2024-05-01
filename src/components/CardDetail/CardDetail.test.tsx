import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { CardDetail } from './CardDetail';

describe('Card detail', () => {
  it('should render a card detail', async () => {
    render(
      <CardDetail
        title="Top musical hits"
        image="imageTest.png"
        subtitle="by Mutemath"
        description="The best music to listen to"
      />,
    );

    expect(screen.getByText('Top musical hits')).toBeVisible();
    expect(screen.getByText(/Description/i)).toBeVisible();
    expect(screen.getByText(/by Mutemath/i)).toBeVisible();
    expect(screen.getByText('The best music to listen to')).toBeVisible();
  });
});
