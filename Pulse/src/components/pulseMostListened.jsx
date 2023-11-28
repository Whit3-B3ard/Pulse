import RowCarousel from './rowCarousel'; 

const PulsePlaylist = () => {
  const items = [
    { id: 1, title: 'chill_lounge', image: '/cards/chill_lounge.jpg' },
    { id: 2, title: 'classic_pop', image: '/cards/classic.jpg' },
    { id: 3, title: 'cyber_funk', image: '/cards/cyber.jpg' },
    { id: 4, title: 'happy_vibes', image: '/cards/happyvibes.jpg' },
    { id: 5, title: 'tiktok', image: '/cards/tiktok.jpg' },
    { id: 6, title: 'doves', image: '/cards/doves.jpg' },
    { id: 7, title: 'tropical', image: '/cards/tropical.jpg' },
    { id: 8, title: 'more_chill', image: '/cards/more_chill.jpg' },
    { id: 1, title: 'chill_lounge', image: '/cards/chill_lounge.jpg' },
    { id: 2, title: 'classic_pop', image: '/cards/classic.jpg' },
    { id: 3, title: 'cyber_funk', image: '/cards/cyber.jpg' },
    { id: 4, title: 'happy_vibes', image: '/cards/happyvibes.jpg' },
    { id: 5, title: 'tiktok', image: '/cards/tiktok.jpg' },
    { id: 6, title: 'doves', image: '/cards/doves.jpg' },
    { id: 7, title: 'tropical', image: '/cards/tropical.jpg' },
    { id: 8, title: 'more_chill', image: '/cards/more_chill.jpg' },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Featured Playlists</h1>
      <RowCarousel items={items} />
    </div>
  );
};

export default PulsePlaylist;
