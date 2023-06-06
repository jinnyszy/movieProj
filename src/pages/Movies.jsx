import React, { useState } from 'react';
import { useFetchMoviesQuery } from '../utilities/slice';
import CardList from '../components/CardList';

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1); // Define and initialize currentPage using useState

  const data = useFetchMoviesQuery(currentPage);
  // const { data : result } = useFetchMoviesQuery(currentPage);
  // const moviesQuery = useFetchMoviesQuery();
  // const results = moviesQuery.data;
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleUndefined = (data) => {
    if (data.isLoading) {
      return (
        <div>Loadingl</div>
      )
    } else {
      return (
        <CardList
          list={data}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )
    }
  }

  return handleUndefined(data)

};

export default Movies;
