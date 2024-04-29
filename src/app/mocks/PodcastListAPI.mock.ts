import {
  PodcastDetailAPI,
  PodcastListResponseAPI,
} from 'src/app/types/DataAPI';

const topPodcasts: PodcastDetailAPI[] = [
  {
    'im:name': { label: 'The Joe Budden Podcast' },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
      },
    ],
    summary: {
      label:
        'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
    },
    title: { label: 'The Joe Budden Podcast - The Joe Budden Network' },
    link: {
      attributes: {
        href: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
      },
    },
    id: {
      attributes: { 'im:id': '1535809341' },
    },
    'im:artist': {
      label: 'Studios Music',
    },
    category: {
      attributes: {
        'im:id': '1310',
        term: 'Music',
        scheme:
          'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
        label: 'Music',
      },
    },
  },
  {
    'im:name': { label: 'Friday Night Karaoke' },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/55x55bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/60x60bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/170x170bb.png',
      },
    ],
    summary: {
      label:
        'No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!',
    },
    title: { label: 'Friday Night Karaoke - Friday Night Karaoke' },
    link: {
      attributes: {
        href: 'https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=2',
      },
    },
    id: {
      attributes: { 'im:id': '1574029840' },
    },
    'im:artist': { label: 'Studios Music v2' },
    category: {
      attributes: {
        'im:id': '1310',
        term: 'Music',
        scheme:
          'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
        label: 'Music',
      },
    },
  },
  {
    'im:name': { label: 'R&B Money' },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/55x55bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/60x60bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/170x170bb.png',
      },
    ],
    summary: {
      label:
        'R&B Money Podcast is hosted by the Legendary Grammy Award winning R&B singer/songwriter/producer TANK and his business partner multi-platinum songwriter & executive J. Valentine.\n\nThis podcast is for the super dedicated R&B fans, covering everything from Keith Sweat to Pink Sweat$. R&B Money has created a fly space for artist & executives in the game to reminisce, with exceptional compelling story telling and a place of discovery for the fans. ',
    },
    title: { label: 'R&B Money - The Black Effect and iHeartPodcasts' },
    link: {
      attributes: {
        href: 'https://podcasts.apple.com/us/podcast/r-b-money/id1623212249?uo=2',
      },
    },
    id: {
      attributes: { 'im:id': '1623212249' },
    },
    'im:artist': { label: 'iHeartPodcasts' },
    category: {
      attributes: {
        'im:id': '1523',
        term: 'Music Commentary',
        scheme:
          'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
        label: 'Music Commentary',
      },
    },
  },
];

const topPodcastsV2: PodcastDetailAPI[] = topPodcasts.map((podcast) => ({
  ...podcast,
  name: `${podcast['im:name'].label} v2`,
}));

export const mockResultsPodcast: PodcastListResponseAPI = {
  feed: {
    entry: topPodcasts,
    link: [
      {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3',
        },
      },
      {
        attributes: {
          rel: 'self',
          href: 'https://mzstoreservices-int.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
        },
      },
    ],
  },
};

export const mockResultsPodcastV2: PodcastListResponseAPI = {
  feed: {
    entry: topPodcastsV2,
    link: [
      {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3',
        },
      },
      {
        attributes: {
          rel: 'self',
          href: 'https://mzstoreservices-int.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
        },
      },
    ],
  },
};

export const mockResultsNoPodcastData: PodcastListResponseAPI = {
  feed: {
    entry: [],
    link: [],
  },
};
