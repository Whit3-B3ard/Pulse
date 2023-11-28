import SmoothHoverEffect from "../framer_motion/smoothHover";

const ArtistCard = ({ title, image, onClick, followers }) => {
    return (
        <SmoothHoverEffect>
        <div className="flex flex-col">
            <div className="relative overflow-hidden bg-gray-800 shadow-md cursor-pointer transition-transform transform hover:scale-105 rounded-full">
                <img src={image} alt={title} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button
                    onClick={onClick}
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
        <div className="text-gray-600">
            <blockquote className=" text-center mt-3 font-bold text-[17px]">{title}</blockquote>
            <div className="flex justify-center items-center">
            <i className="fa-solid fa-people-group text-gray-600 text-[10px] pr-[10px]"></i>
            <p className="text-[12px]">Followers {followers}</p>
            </div>
        </div>
        </div>
        </SmoothHoverEffect>
    );
  };
  
  export default ArtistCard;