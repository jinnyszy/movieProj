import React, { useState } from 'react';
import { useFetchMoviesQuery } from '../utilities/slice';
import CardList from '../components/CardList';

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1); // Define and initialize currentPage using useState

  const { data: movies, total_pages: totalPages } =
    useFetchMoviesQuery(currentPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <CardList
      list={movies}
      listPages={totalPages}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
    />
  );
};

export default Movies;
