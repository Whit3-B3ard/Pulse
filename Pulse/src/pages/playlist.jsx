import React, { useState, useEffect } from 'react';
import CreatePlaylist from '../components/playlist/CreatePlaylist';
import PlaylistDisplay from '../components/playlist/PlaylistDisplay';
import AddSongToPlaylist from '../components/playlist/AddSongToPlaylist';

const CreatePlaylistPage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  useEffect(() => {
    const storedPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];
    setPlaylists(storedPlaylists);
  }, []);

  const savePlaylistsToLocalStorage = (updatedPlaylists) => {
    localStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
  };

  const handlePlaylistCreate = (playlistName) => {
    const updatedPlaylists = [...playlists, { name: playlistName, songs: [] }];
    setPlaylists(updatedPlaylists);
    savePlaylistsToLocalStorage(updatedPlaylists);
  };

  const handlePlaylistSelect = (playlist) => {
    setSelectedPlaylist(playlist);
  };

  const handleAddSongToPlaylist = (song) => {
    if (selectedPlaylist) {
      const updatedPlaylists = playlists.map((playlist) =>
        playlist === selectedPlaylist
          ? { ...playlist, songs: [...playlist.songs, song] }
          : playlist
      );
      setPlaylists(updatedPlaylists);
      savePlaylistsToLocalStorage(updatedPlaylists);
    }
  };

  const handleDeletePlaylist = (playlistName) => {
    const updatedPlaylists = playlists.filter((playlist) => playlist.name !== playlistName);
    setPlaylists(updatedPlaylists);
    savePlaylistsToLocalStorage(updatedPlaylists);

    if (selectedPlaylist && selectedPlaylist.name === playlistName) {
      setSelectedPlaylist(null);
    }
  };

  return (
    <div className="pl-[60px] pr-[60px] pt-[30px] mt-28">
      <h2 className="text-[48px] pb-8 font-bold text-white">My Playlists</h2>

      <CreatePlaylist onPlaylistCreate={handlePlaylistCreate} />

      <div className="flex gap-4">
        <PlaylistDisplay playlists={playlists} onSelect={handlePlaylistSelect} onDelete={handleDeletePlaylist} />
        {selectedPlaylist && (
          <AddSongToPlaylist
            selectedPlaylist={selectedPlaylist}
            onAddSong={handleAddSongToPlaylist}
          />
        )}
      </div>
    </div>
  );
};

export default CreatePlaylistPage;






