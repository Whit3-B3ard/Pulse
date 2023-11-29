import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div className="sidebar h-screen text-white w-1/6">
      <nav>
        <ul>
          <li className="p-4">
            <Link to="/explore" className="hover:text-gray-300">
              Explore
            </Link>
          </li>
          <li className="p-4">
            <ul>
             <li>
              <Link to="/playlist" className="hover:text-gray-300">
                My Playlist
              </Link>
             </li>
            </ul>
          </li>
          <li className="p-4">
            {/* placeholder for playlist create component */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;





