import React, { useState } from 'react';
import { useFetchSearchQuery } from '../utilities/slice';
import { Link } from 'react-router-dom';
const SearchParams = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: searchResults, isLoading, isError } = useFetchSearchQuery(searchTerm);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() !== '') {
            setSearchTerm(searchTerm.trim());
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChange}
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                    />
                </div>
            </form>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error occurred while searching.</p>}

            {searchResults && searchResults.results && (
                <div className='bg-white-500/50'>
                    <ul>
                        {searchResults.results.map((result) => (
                            <Link to={`/${result.media_type}/${result.id}`}>
                                <li key={result.id}>{result.title || result.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};



export default SearchParams;