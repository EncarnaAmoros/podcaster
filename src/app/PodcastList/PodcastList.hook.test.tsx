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
} from '@testing-library/react';
import { server } from 'src/app/mocks/node';
import { PodcastList } from './PodcastList';
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

  const setup = () => {
    render(<PodcastList />);
  };

  function setLocalStorageDataAndDate(date: Date) {
    vi.setSystemTime(date);

    localStorage.setItem(
      STORAGE_PODCAST_LIST_KEY,
      JSON.stringify(mockResultsPodcastAccessed2021_10_03_9_15),
    );
  }

  it('should render podcast list from API without localStorage', async () => {
    setup();

    await waitForElementToBeRemoved(screen.queryByText(/loading\.\.\./i));

    expect(screen.getByText('The Joe Budden Podcast')).toBeVisible();
    expect(screen.getByText('Friday Night Karaoke')).toBeVisible();
    expect(screen.getByText('R&B Money')).toBeVisible();
  });

  it('should render podcast list from localStorage data accessed before 24h', async () => {
    setLocalStorageDataAndDate(new Date(2021, 10, 2, 10, 14, 0, 0));
    setup();

    expect(screen.getByText('The Joe Budden Podcast v2')).toBeVisible();
    expect(screen.getByText('Friday Night Karaoke v2')).toBeVisible();
    expect(screen.getByText('R&B Money v2')).toBeVisible();
  });

  it('should render podcast list from API localStorage data accessed before 24h', async () => {
    setLocalStorageDataAndDate(new Date(2021, 10, 2, 11, 15, 0, 0));
    setup();

    await waitForElementToBeRemoved(screen.queryByText(/loading\.\.\./i));

    expect(screen.getByText('The Joe Budden Podcast')).toBeVisible();
    expect(screen.getByText('Friday Night Karaoke')).toBeVisible();
    expect(screen.getByText('R&B Money')).toBeVisible();
  });
});
