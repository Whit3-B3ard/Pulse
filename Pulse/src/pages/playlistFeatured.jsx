import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import SmoothHoverEffect from '../framer_motion/smoothHover';
import FadeInAndOut from '../framer_motion/fadeInOut';

const PlaylistFeatured = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [songs, setSongs] = useState([]);
  const [songsTwo, setSongsTwo] = useState([]);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await fetch(`/playlists.json`);
        const data = await response.json();
        setPlaylist(data);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      }
    };

    const fetchSongsData = async () => {
      try {
        const response = await fetch(`/songs.json`);
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error('Error fetching songs data:', error);
      }
    };

    const fetchSongsDataTwo = async () => {
      try {
        const response = await fetch(`/songstwo.json`);
        const data = await response.json();
        setSongsTwo(data);
      } catch (error) {
        console.error('Error fetching songs data:', error);
      }
    }

    fetchPlaylistData();
    fetchSongsData();
    fetchSongsDataTwo();
  }, [id]);

  const selectedPlaylist = playlist.find((singlePlaylist) => String(singlePlaylist.id) === id);

  return (
    <FadeInAndOut>
    <div className="p-6 relative">
      <Link to="/explore">
      <button className="absolute left-10 top-10"><i className="fa-solid fa-angle-left text-[26px] text-gray-400"></i></button>
      </Link>

      {selectedPlaylist && (
        <div className="flex items-end justify-between pr-8 p-2 bg-gradient-to-b from-[#333333] to-gray shadow-lg rounded-md pt-[80px]">
          
          <div className="flex items-end">
            <img src={selectedPlaylist.image} alt="Playlist" className="w-1/1 h-64 object-cover rounded-md shadow-xl" />
            <div className="pl-5">
              <h3 className="text-white">Playlist</h3>
              <h2 className="text-[60px] font-bold text-white">{selectedPlaylist.title}</h2>
              <p className="text-gray-600">{selectedPlaylist.description}</p>
              <p className="text-gray-600">User Name</p> {/* can be adjusted accordingly */}
            </div>
          </div>
          <SmoothHoverEffect>
          <button className="bg-gradient-to-r from-green-400 to-cyan-500 text-white px-[17px] py-[12px] mb-11 rounded-full">
            <i className="fa-solid fa-play text-[22px]"></i>
          </button>
          </SmoothHoverEffect>
        </div>
      )} 
      <div className="flex justify-between text-gray-400 m-3 pl-24 pr-4">
        <p># Title</p>
        <p>Album</p>
        <p><i className="fa-regular fa-clock"></i></p>
      </div>
      
      <hr className="border-[-1px] border-gray-600 my-2"></hr>

      <div className="rounded-md mt-4">
      {songs.map((song) => (
        <li key={song.id} className="flex items-center justify-between mb-4 hover:bg-gray-500 hover:bg-opacity-20 hover:cursor-pointer hover:rounded-md">
          <div className="flex">
          <p className="text-gray-400 p-4">{song.id}</p>
          <img src={song.image} alt={song.title} className="w-12 h-12 object-cover rounded mr-4 mt-1" />
          <div>
            <p className="text-lg font-semibold text-gray-400">{song.title}</p>
            <p className="text-gray-600">{song.artist}</p>
          </div>
          </div>
          <p className="text-gray-600 mr-10">{song.album}</p>
          <p className="text-gray-400 mr-4">{song.duration}</p>
        </li>
      ))}
      </div>

      <h2 className="text-white text-[24px] pt-10">Recommended:</h2>
      <p className="text-gray-700 pb-10">Based on what&apos;s on your playlist</p>
      <div className="rounded-md mt-4">
      {songsTwo.map((song) => (
        <li key={song.id} className="flex items-center justify-between mb-4 hover:bg-gray-500 hover:bg-opacity-20 hover:cursor-pointer hover:rounded-md">
          <div className="flex">
          <p className="text-gray-400 p-4">{song.id}</p>
          <img src={song.image} alt={song.title} className="w-12 h-12 object-cover rounded mr-4 mt-1" />
          <div>
            <p className="text-lg font-semibold text-gray-400">{song.title}</p>
            <p className="text-gray-600">{song.artist}</p>
          </div>
          </div>
          <p className="text-gray-600 mr-10">{song.album}</p>
          <button className="mr-4 text-white border-[1px] p-1 pl-2 pr-2 rounded-full text-[14px] transition duration-300 ease-in-out hover:bg-white hover:text-black">Add</button>
        </li>
      ))}
      </div>
    </div>
    </FadeInAndOut>
  );
};

export default PlaylistFeatured;




