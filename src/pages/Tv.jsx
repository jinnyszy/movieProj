import React, { useState } from 'react';
import { useFetchTVSeriesQuery } from '../utilities/slice';
import CardList from '../components/CardList';
const Tv = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = useFetchTVSeriesQuery(currentPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleUndefined = (data) => {
    if (data.isLoading) {
      return (
        <div>Loading</div>
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
export default Tv;
