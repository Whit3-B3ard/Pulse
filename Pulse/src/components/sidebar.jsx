import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCompass,
  faUsers,
  faCompactDisc,
  faStar,
  faMusic,
  faList,
  faPlusCircle,
  
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  return (
    <div className="sidebar bg-gray-800 bg-opacity-[20%] h-screen text-white w-1/6 pt-28">
      <nav>
        <ul>
          <li className="p-4">
            <Link to="/explore" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faCompass} className="mr-2" />
              Explore
            </Link>
          </li>
          <li className="p-4">
            <Link to="/artists" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Artists
            </Link>
          </li>
          <li className="p-4">
            <Link to="/albums" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faCompactDisc} className="mr-2" />
              Albums
            </Link>
          </li>
          <li className="p-4">
            <Link to="/genres" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faMusic} className="mr-2" />
              Genres
            </Link>
          </li>
          <li className="p-4">
            <div className="dropdown">
              <span onClick={toggleDropdown} className="hover:text-gray-300">
                <FontAwesomeIcon icon={faList} className="mr-2" />
                My Playlist
              </span>
              {showDropdown && (
                <div className="dropdown-content">
                  <ul>
                    <li className="p-4">
                      <Link to="/anotherplaylist" className="hover:text-gray-300">
                        <FontAwesomeIcon icon={faStar} className="mr-2" />
                        Favorite Playlist
                      </Link>
                    </li>
                    <li className="p-4">
                      <Link to="/playlist" className="hover:text-gray-300">
                      <FontAwesomeIcon icon={faPlusCircle}  className="mr-2" />
                        New Playlist
                      </Link>
                    </li>
                    {/* Add more <li> elements for additional playlists */}
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
            
export default Sidebar;