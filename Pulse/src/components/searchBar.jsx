import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search for a song or artist..."
        value={searchTerm}
        onChange={handleChange}
        className="p-2 border-none rounded-md transition-all duration-300 shadow-md bg-[#1A1A1A] bg-opacity-50 text-white"
      />
    </div>
  );
};

export default SearchBar;



