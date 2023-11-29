import SearchBar from "../components/searchBar";

const PlaylistFeatured = () => {
  // Dummy data for the playlist
  const playlist = {
    title: 'Awesome Playlist',
    description: 'The best songs handpicked just for you!',
    image: 'path/to/playlist-image.jpg',
    songs: [
      {
        id: 1,
        title: 'Song 1',
        album: 'Album 1',
        duration: '3:45',
        image: 'path/to/song1-image.jpg',
      },
      {
        id: 2,
        title: 'Song 2',
        album: 'Album 2',
        duration: '4:20',
        image: 'path/to/song2-image.jpg',
      },
      // Add more songs as needed
    ],
  };

  return (
    <div className="p-8">
      {/* Hero Image and Playlist Information */}
      <div className="flex-1 pr-8">
        <img src={playlist.image} alt="Playlist" className="w-full h-64 object-cover rounded-lg mb-4" />
        <h2 className="text-3xl font-bold mb-2">{playlist.title}</h2>
        <p className="text-gray-600 mb-4">{playlist.description}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full">Play</button>
      </div>

      {/* Song List */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-4">Songs</h3>
        <ul>
          {playlist.songs.map((song) => (
            <li key={song.id} className="flex items-center mb-4">
              <img src={song.image} alt={song.title} className="w-12 h-12 object-cover rounded mr-4" />
              <div>
                <p className="text-lg font-semibold">{song.title}</p>
                <p className="text-gray-600">{song.album}</p>
                <p className="text-gray-500">{song.duration}</p>
              </div>
              <button className="ml-auto bg-green-500 text-white px-4 py-2 rounded-full">Play</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default PlaylistFeatured;
