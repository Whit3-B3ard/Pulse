import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div className="sidebar bg-gray-800 bg-opacity-[20%] h-screen text-white w-1/6">
      <nav>
        <ul>
          <li className="p-4">
            <Link to="/explore" className="hover:text-gray-300">
              Explore
            </Link>
          </li>
          <li className="p-4">
            <h2>Playlists</h2>
            <ul>
              {/* placeholder for playlist create component */}
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





