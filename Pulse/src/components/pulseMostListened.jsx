import { useState, useEffect } from 'react';
import RowCarousel from './rowCarousel';

const PulsePlaylist = () => {
  const [playlistItems, setPlaylistItems] = useState([]);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await fetch('/playlists.json'); 
        const data = await response.json();
        setPlaylistItems(data);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      }
    };

    fetchPlaylistData();
  }, []);

  return (
    <div className="container mx-auto mt-8 md:block">
      <h1 className="text-2xl font-bold mb-4 text-white">Featured Playlists</h1>
      <RowCarousel items={playlistItems} />
    </div>
  );
};

export default PulsePlaylist;

