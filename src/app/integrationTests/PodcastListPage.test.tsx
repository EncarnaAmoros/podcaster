import {
  vi,
  describe,
  it,
  expect,
  beforeAll,
  afterEach,
  afterAll,
  beforeEach,
} from 'vitest';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  act,
} from '@testing-library/react';
import { server } from 'src/app/mocks/node';
import { PodcastList } from 'src/app/PodcastList/PodcastList';
import { mockResultsPodcastAccessed2021_10_03_9_15 } from 'src/app/mocks/PodcastList.mock.ts';
import { STORAGE_PODCAST_LIST_KEY } from 'src/app/constants';

vi.mock('react-router-dom', () => ({
  useNavigate: () => {},
}));

describe('Podcast List Hook', () => {
  beforeAll(() => {
    server.listen();
  });

  beforeEach(() => {});

  afterEach(() => {
    server.resetHandlers();
    localStorage.clear();
  });

  afterAll(() => {
    server.close();
  });

  const setup = async () => {
    render(<PodcastList />);

    await waitForElementToBeRemoved(screen.queryByText(/loading\.\.\./i));
  };

  function setLocalStorageDataAndDate(date: Date) {
    vi.setSystemTime(date);

    localStorage.setItem(
      STORAGE_PODCAST_LIST_KEY,
      JSON.stringify(mockResultsPodcastAccessed2021_10_03_9_15),
    );
  }

  it('should render podcast list from API without localStorage', async () => {
    await setup();

    expect(screen.getByText('The Joe Budden Podcast')).toBeVisible();
    expect(screen.getByText('Friday Night Karaoke')).toBeVisible();
    expect(screen.getByText('R&B Money')).toBeVisible();
  });

  it('should render podcast list from localStorage data accessed before 24h', async () => {
    setLocalStorageDataAndDate(new Date(2021, 10, 2, 10, 14, 0, 0));
    await setup();

    expect(screen.getByText('The Joe Budden Podcast v2')).toBeVisible();
    expect(screen.getByText('Friday Night Karaoke v2')).toBeVisible();
    expect(screen.getByText('R&B Money v2')).toBeVisible();
  });

  it('should render podcast list from API localStorage data accessed before 24h', async () => {
    setLocalStorageDataAndDate(new Date(2021, 10, 2, 11, 15, 0, 0));
    await setup();

    expect(screen.getByText('The Joe Budden Podcast')).toBeVisible();
    expect(screen.getByText('Friday Night Karaoke')).toBeVisible();
    expect(screen.getByText('R&B Money')).toBeVisible();
  });

  it('should render podcast list filtered by title', async () => {
    await setup();

    expect(screen.getByText('The Joe Budden Podcast')).toBeVisible();
    expect(screen.getByText('Friday Night Karaoke')).toBeVisible();
    expect(screen.getByText('R&B Money')).toBeVisible();

    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'Joe' },
      });
    });

    await waitForElementToBeRemoved(screen.queryByText('Friday Night Karaoke'));
    expect(screen.getByText('The Joe Budden Podcast')).toBeVisible();
    expect(screen.queryByText('R&B Money')).not.toBeInTheDocument();
  });

  it.only('should render podcast list filtered by artist', async () => {
    await setup();

    expect(screen.getByText('Author: Studios Music')).toBeVisible();
    expect(screen.getByText('Author: Studios Music v2')).toBeVisible();
    expect(screen.getByText('Author: iHeartPodcasts')).toBeVisible();

    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'Studios Music' },
      });
    });

    await waitForElementToBeRemoved(
      screen.queryByText('Author: iHeartPodcasts'),
    );
    expect(screen.getByText('Author: Studios Music')).toBeVisible();
    expect(screen.queryByText('Studios Music v2')).not.toBeInTheDocument();
  });
});
