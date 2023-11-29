 import RowCarouselArtist from './rowCarouselArtist';

const PulseTopArtists = () => {
  const items = [
    { id: 1, title: 'Arana Grande', image: '/cards/ariana.jpg', followers: '855K', tracks: '198' },
    { id: 2, title: 'Bad Bunny', image: '/cards/bad_bunny.jpg', followers: '908K', tracks: '148' },
    { id: 3, title: 'Drake', image: '/cards/Drake.jpg', followers: '3.15M', tracks: '511' },
    { id: 4, title: 'Green Day', image: '/cards/green_day.jpg', followers: '1.65M', tracks: '582' },
    { id: 5, title: 'Taylor Swift', image: '/cards/taylor_swift.jpg', followers: '543K', tracks: '645' },
    { id: 6, title: 'The Weeknd', image: '/cards/weeknd.jpg', followers: '6.69M', tracks: '300' },
    { id: 7, title: 'The Beatles', image: '/cards/the_beatles.jpg', followers: '323K', tracks: '29' },
    { id: 8, title: 'Jungkook', image: '/cards/jungkook.jpg', followers: '2.5M', tracks: '20' },
    { id: 1, title: 'Arana Grande', image: '/cards/ariana.jpg', followers: '855K', tracks: '198' },
    { id: 2, title: 'Bad Bunny', image: '/cards/bad_bunny.jpg', followers: '908K', tracks: '148' },
    { id: 3, title: 'Drake', image: '/cards/Drake.jpg', followers: '3.15M', tracks: '511' },
    { id: 4, title: 'Green Day', image: '/cards/green_day.jpg', followers: '1.65M', tracks: '582' },
    { id: 5, title: 'Taylor Swift', image: '/cards/taylor_swift.jpg', followers: '543K', tracks: '645' },
    { id: 6, title: 'The Weeknd', image: '/cards/weeknd.jpg', followers: '6.69M', tracks: '300' },
    { id: 7, title: 'The Beatles', image: '/cards/the_beatles.jpg', followers: '323K', tracks: '29' },
    { id: 8, title: 'Jungkook', image: '/cards/jungkook.jpg', followers: '2.5M', tracks: '20' },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Top Artists of the Week</h1>
      <RowCarouselArtist items={items} />
    </div>
  );
};

export default PulseTopArtists;