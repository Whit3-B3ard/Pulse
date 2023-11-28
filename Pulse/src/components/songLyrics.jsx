// Install React Router if you haven't already
// npm install react-router-dom

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SongDetail = ({ song }) => {
  const history = useHistory();
  const [showLyrics, setShowLyrics] = useState(false);

  const redirectToSongDetail = () => {
    // Redirect to the song detail page (you need to set up routes in your App component)
    history.push(`/song/${song.id}`);
  };

  const toggleLyrics = () => {
    setShowLyrics(!showLyrics);
  };

  return (
    <div>
      <h2>{song.title}</h2>
      <p>{song.artist} - {song.year}</p>
      <img src={song.image} alt={`${song.artist} - ${song.title}`} />

      {/* Playback Icon */}
      <button onClick={redirectToSongDetail}>
        {/* Add your playback icon here */}
        ▶️
      </button>

      {/* Display Lyrics */}
      {showLyrics && (
        <div>
          <h3>Lyrics</h3>
          <pre>{song.lyrics}</pre>
        </div>
      )}
    </div>
  );
};

export default SongDetail;
