import { vi, describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { Search } from './Search';

describe('Search', () => {
  it('should render the search component', async () => {
    render(<Search text={'Pop Music'} results={0} onChangeSearch={() => {}} />);

    expect(screen.getByDisplayValue('Pop Music')).toBeVisible();
  });

  it('should render the search text and results', async () => {
    render(
      <Search
        text={'Rock and more rock'}
        results={50}
        onChangeSearch={() => {}}
      />,
    );

    expect(screen.getByText('50')).toBeVisible();
    expect(screen.getByDisplayValue('Rock and more rock')).toBeVisible();
  });

  it('should not call on change search whitout changes', async () => {
    const onChangeSearch = vi.fn();
    render(
      <Search
        text={'Country hits'}
        results={50}
        onChangeSearch={onChangeSearch}
      />,
    );

    expect(onChangeSearch).not.toHaveBeenCalled();
  });

  it('should call on change search with changes', async () => {
    const onChangeSearch = vi.fn();
    render(
      <Search
        text={'Country hits'}
        results={50}
        onChangeSearch={onChangeSearch}
      />,
    );

    const inputNode = screen.getByDisplayValue('Country hits');
    fireEvent.change(inputNode, { target: { value: 'Reggae' } });

    expect(onChangeSearch).toHaveBeenCalledWith('Reggae');
  });
});
