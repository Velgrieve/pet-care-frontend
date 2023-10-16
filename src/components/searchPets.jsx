import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input className='form-control form-size' type="text" placeholder="Search by name" value={searchTerm} onChange={handleChange} />
      <button className='btn btn-primary' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
