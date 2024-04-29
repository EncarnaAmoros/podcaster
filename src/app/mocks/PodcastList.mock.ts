import { PodcastDetail, PodcastList } from 'src/app/types/Data';

export const topPodcasts: PodcastDetail[] = [
  {
    name: 'The Joe Budden Podcast',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
    summary:
      'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
    title: 'The Joe Budden Podcast - The Joe Budden Network',
    id: 1535809341,
    artist: 'The Joe Budden Network',
    category: {
      id: 1310,
      term: 'Music',
      label: 'Music',
    },
    link: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
  },
  {
    name: 'Friday Night Karaoke',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/170x170bb.png',
    summary:
      'No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!',
    title: 'Friday Night Karaoke - Friday Night Karaoke',
    id: 1574029840,
    artist: 'Friday Night Karaoke',
    category: {
      id: 1310,
      term: 'Music',
      label: 'Music',
    },
    link: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
  },
  {
    name: 'R&B Money',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/170x170bb.png',
    summary:
      'R&B Money Podcast is hosted by the Legendary Grammy Award winning R&B singer/songwriter/producer TANK and his business partner multi-platinum songwriter & executive J. Valentine.\n\nThis podcast is for the super dedicated R&B fans, covering everything from Keith Sweat to Pink Sweat$. R&B Money has created a fly space for artist & executives in the game to reminisce, with exceptional compelling story telling and a place of discovery for the fans. ',
    title: 'R&B Money - The Black Effect and iHeartPodcasts',
    id: 1623212249,
    artist: 'The Black Effect and iHeartPodcasts',
    category: {
      id: 1523,
      term: 'Music Commentary',
      label: 'Music Commentary',
    },
    link: 'https://podcasts.apple.com/us/podcast/r-b-money/id1623212249?uo=2',
  },
];

export const mockResultsPodcast: PodcastList = {
  feed: topPodcasts,
};

export const mockResultsNoPodcastData: PodcastList = {
  feed: [],
};
