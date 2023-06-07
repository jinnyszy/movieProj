import React, { useState } from 'react';
import { useFetchSearchQuery } from '../utilities/slice';
import { Link } from 'react-router-dom';

const SearchParams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    data: searchResults,
    isLoading,
    isError,
  } = useFetchSearchQuery(searchTerm);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      setSearchTerm(searchTerm.trim());
    }
  };

  const handleResultClick = () => {
    setSearchTerm('');
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="search"
            placeholder="Search Movies and TV"
            value={searchTerm}
            onChange={handleChange}
            className="rounded-md border px-4 py-2 text-black focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
        </div>
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred while searching.</p>}

      {searchResults && searchResults.results && (
        <div className="absolute top-full z-20 mt-2 rounded-md bg-white p-2 text-black">
          <ul>
            {searchResults.results.map((result) => (
              <Link
                to={`/${result.media_type}/${result.id}`}
                key={result.id}
                onClick={handleResultClick}
              >
                <li>{result.title || result.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchParams;
