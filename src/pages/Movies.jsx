import React, { useState } from 'react';
import { useFetchMoviesQuery } from '../utilities/slice';
import CardList from '../components/CardList';

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1); // Define and initialize currentPage using useState

  const movies = useFetchMoviesQuery(currentPage);

  const totalPages = movies?.data?.total_pages;
  const totalResults = movies?.data?.total_results;


  console.log('movs', movies);
  console.log('totalPages', totalPages)
  console.log('totalResults', totalResults)

  // const { data : result } = useFetchMoviesQuery(currentPage);
  // const moviesQuery = useFetchMoviesQuery();
  // const results = moviesQuery.data;
  const handlePageChange = (event) => {
    const newPage = (event.selected * 20) % totalResults
    setCurrentPage(newPage);
  };

  const handleUndefined = (movies) => {
    if (movies.isLoading) {
      return <div>Loading</div>;
    } else {
      return (
        <CardList
          list={movies}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
          totalResults={totalResults}
        />
      );
    }
  };

  return handleUndefined(movies);
};

export default Movies;
