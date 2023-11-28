import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for a song or artist..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded-md"
      />
      <button onClick={handleSearch} className="ml-2 bg-gray-800 text-white px-4 py-2 rounded-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
