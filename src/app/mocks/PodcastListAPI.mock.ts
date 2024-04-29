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
      label: 'The Joe Budden Network',
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
    'im:artist': { label: 'Friday Night Karaoke' },
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
    'im:artist': { label: 'The Black Effect and iHeartPodcasts' },
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
  {
    'im:name': { label: 'Drink Champs' },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/55x55bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/60x60bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/170x170bb.png',
      },
    ],
    summary: {
      label:
        'Legendary Queens rapper-turned show host N.O.R.E. teams up with Miami hip-hop pioneer DJ EFN for a night of boozy conversation and boisterous storytelling. The hosts and guests engage together in fun, light-hearted conversation - looking back at their paths to success, highlighting their lives, friendships, and iconic moments within their career. In this unfiltered series, drinks are flowing and jokes are rolling - take a seat at the table with N.O.R.E & EFN. You Gotta Relax!',
    },
    title: { label: 'Drink Champs - Interval Presents' },
    link: {
      attributes: {
        href: 'https://podcasts.apple.com/us/podcast/drink-champs/id1096830182?uo=2',
      },
    },
    id: {
      attributes: { 'im:id': '1096830182' },
    },
    'im:artist': {
      label: 'Interval Presents',
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
    'im:name': { label: 'Every Single Album' },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/69/db/d2/69dbd2ec-c1d4-9363-0439-49a294311566/mza_11177853187314768025.jpg/55x55bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/69/db/d2/69dbd2ec-c1d4-9363-0439-49a294311566/mza_11177853187314768025.jpg/60x60bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/69/db/d2/69dbd2ec-c1d4-9363-0439-49a294311566/mza_11177853187314768025.jpg/170x170bb.png',
      },
    ],
    summary: {
      label:
        'Nora Princiotti and Nathan Hubbard are two pop music enthusiasts. Together, they break down every single album from some of your favorite stars, like Taylor Swift, Adele, and Harry Styles. Topics include favorite collaborators, track five meanings, where these artists get their inspiration, and more.',
    },
    title: { label: 'Every Single Album - The Ringer' },
    link: {
      attributes: {
        href: 'https://podcasts.apple.com/us/podcast/every-single-album/id1592726009?uo=2',
      },
    },
    id: {
      attributes: { 'im:id': '1592726009' },
    },
    'im:artist': { label: 'The Ringer' },
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
  {
    'im:name': { label: 'New Rory & MAL' },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/55x55bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/60x60bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/170x170bb.png',
      },
    ],
    summary: {
      label:
        'New stories, new laughs, new random hot takes that no one asked for... New Rory & Mal\n\nFor advertising opportunities please email PodcastPartnerships@Studio71us.com   \nWe want to make the podcast even better, help us learn how we can: https://bit.ly/2EcYbu4  \nPrivacy Policy: https://www.studio71.com/terms-and-conditions-use/#Privacy%20Policy   ',
    },
    title: {
      label: 'New Rory & MAL - Rory Farrell & Jamil "Mal" Clay & Studio71',
    },
    link: {
      attributes: {
        href: 'https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=2',
      },
    },
    id: {
      attributes: { 'im:id': '1572182022' },
    },
    'im:artist': { label: 'Rory Farrell & Jamil "Mal" Clay & Studio71' },
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
    'im:name': { label: 'A History of Rock Music in 500 Songs' },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/55x55bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/60x60bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/170x170bb.png',
      },
    ],
    summary: {
      label:
        'Andrew Hickey presents a history of rock music from 1938 to 1999, looking at five hundred songs that shaped the genre.',
    },
    title: {
      label: 'A History of Rock Music in 500 Songs - Andrew Hickey',
    },
    link: {
      attributes: {
        href: 'https://podcasts.apple.com/us/podcast/a-history-of-rock-music-in-500-songs/id1437402802?uo=2',
      },
    },
    id: {
      attributes: { 'im:id': '1437402802' },
    },
    'im:artist': { label: 'Andrew Hickey' },
    category: {
      attributes: {
        'im:id': '1524',
        term: 'Music History',
        scheme:
          'https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2',
        label: 'Music History',
      },
    },
  },
  {
    'im:name': { label: 'Million Dollaz Worth Of Game' },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/47/c9/84/47c984c5-bec1-3c87-0fa2-ee4a003c9052/mza_2893667378684577479.jpg/55x55bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/47/c9/84/47c984c5-bec1-3c87-0fa2-ee4a003c9052/mza_2893667378684577479.jpg/60x60bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/47/c9/84/47c984c5-bec1-3c87-0fa2-ee4a003c9052/mza_2893667378684577479.jpg/170x170bb.png',
      },
    ],
    summary: {
      label:
        'The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\n\nYou can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame',
    },
    title: { label: 'Million Dollaz Worth Of Game - Barstool Sports' },
    link: {
      attributes: {
        href: 'https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2',
      },
    },
    id: {
      attributes: { 'im:id': '1460157002' },
    },
    'im:artist': {
      label: 'Barstool Sports',
    },
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
  {
    'im:name': {
      label:
        'Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond',
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/7b/12/d5/7b12d5ec-7264-6693-8a8e-e6b414a783c3/mza_10388338206053029687.jpg/55x55bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/7b/12/d5/7b12d5ec-7264-6693-8a8e-e6b414a783c3/mza_10388338206053029687.jpg/60x60bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/7b/12/d5/7b12d5ec-7264-6693-8a8e-e6b414a783c3/mza_10388338206053029687.jpg/170x170bb.png',
      },
    ],
    summary: {
      label:
        'From Rick Rubin, Malcolm Gladwell, Bruce Headlam, and Justin Richmond. The musicians you love talk about their life, inspiration, and craft. Then play. iHeartMedia is the exclusive podcast partner of Pushkin Industries.',
    },
    title: {
      label:
        'Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond - Pushkin Industries',
    },
    link: {
      attributes: {
        href: 'https://podcasts.apple.com/us/podcast/broken-record-with-rick-rubin-malcolm-gladwell-bruce/id1311004083?uo=2',
      },
    },
    id: {
      attributes: { 'im:id': '1311004083' },
    },
    'im:artist': {
      label: 'Pushkin Industries',
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
    'im:name': { label: 'THE MORNING SHIFT' },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/fb/8d/0b/fb8d0b0a-f6e0-038c-08cb-8885d7f7fb1e/mza_14964633475917453431.jpg/55x55bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/fb/8d/0b/fb8d0b0a-f6e0-038c-08cb-8885d7f7fb1e/mza_14964633475917453431.jpg/60x60bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/fb/8d/0b/fb8d0b0a-f6e0-038c-08cb-8885d7f7fb1e/mza_14964633475917453431.jpg/170x170bb.png',
      },
    ],
    summary: {
      label:
        "Join Brook, Jordan & Matua Marc every week day from 6AM for a yarn all things culture, entertainment, sports, funny and thought provoking.\n\nIf you're keen to sponsor the show or any enquiries email info@themorningshift.com\n\nPowered by YOUKNOW MEDIA",
    },
    title: { label: 'THE MORNING SHIFT - YOUKNOW MEDIA' },
    link: {
      attributes: {
        href: 'https://podcasts.apple.com/us/podcast/the-morning-shift/id1676884110?uo=2',
      },
    },
    id: {
      attributes: { 'im:id': '1676884110' },
    },
    'im:artist': { label: 'YOUKNOW MEDIA' },
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
    'im:name': { label: 'One Song' },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/23/af/d5/23afd583-d4a1-a5a5-024f-9a8556aa4aa1/mza_10050319290971063684.jpg/55x55bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/23/af/d5/23afd583-d4a1-a5a5-024f-9a8556aa4aa1/mza_10050319290971063684.jpg/60x60bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/23/af/d5/23afd583-d4a1-a5a5-024f-9a8556aa4aa1/mza_10050319290971063684.jpg/170x170bb.png',
      },
    ],
    summary: {
      label:
        'On each episode of ONE SONG, friends Diallo Riddle ( Emmy-nominated star and creator of HBO Max’s South Side and IFC’s Sherman’s Showcase) and Blake "LUXXURY" Robin (Music Producer & TikTok creator) will hilariously break down ONE SONG from the pop music canon that you know - or need to know - but have never heard quite like this.',
    },
    title: { label: 'One Song - SiriusXM' },
    link: {
      attributes: {
        href: 'https://podcasts.apple.com/us/podcast/one-song/id1696154359?uo=2',
      },
    },
    id: {
      attributes: { 'im:id': '1696154359' },
    },
    'im:artist': { label: 'SiriusXM' },
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
  {
    'im:name': { label: 'Song Exploder' },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/9c/d8/b0/9cd8b073-0f49-341b-3d3a-ab4da3b2aef2/mza_3440682107671500952.png/55x55bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/9c/d8/b0/9cd8b073-0f49-341b-3d3a-ab4da3b2aef2/mza_3440682107671500952.png/60x60bb.png',
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/9c/d8/b0/9cd8b073-0f49-341b-3d3a-ab4da3b2aef2/mza_3440682107671500952.png/170x170bb.png',
      },
    ],
    summary: {
      label:
        'Song Exploder is a podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made. Each episode features an artist discussing a song of theirs, breaking down the sounds and ideas that went into the writing and recording. Hosted and produced by Hrishikesh Hirway.',
    },
    title: { label: 'Song Exploder - Hrishikesh Hirway' },
    link: {
      attributes: {
        href: 'https://podcasts.apple.com/us/podcast/song-exploder/id788236947?uo=2',
      },
    },
    id: {
      attributes: { 'im:id': '788236947' },
    },
    'im:artist': {
      label: 'Hrishikesh Hirway',
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
];

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

export const mockResultsNoPodcastData: PodcastListResponseAPI = {
  feed: {
    entry: [],
    link: [],
  },
};
