import SmoothHoverEffect from "../framer_motion/smoothHover";
import { Link } from "react-router-dom";

const Card = ({ title, image, onClick, id }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <SmoothHoverEffect>
      <Link to={`/playlistF/${id}`}>
        <div className="relative overflow-hidden bg-[#1A1A1A] rounded-md shadow-md cursor-pointer transition-transform transform hover:scale-105">
          <img src={image} alt={title} className="w-full h-40 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <button
              onClick={handleClick}
              className="bg-gradient-to-r from-green-400 to-cyan-500 text-white px-4 py-2 rounded-full focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3l14 9-14 9V3z"
                />
              </svg>
            </button>
          </div>
        </div>
      </Link>
    </SmoothHoverEffect>
  );
};

export default Card;


