import { useState } from 'react';
import { useFetchTVSeriesQuery } from '../utilities/slice';
import CardList from '../components/CardList';
const Tv = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tv = useFetchTVSeriesQuery(currentPage);
  const totalPages = tv?.data?.total_pages;

  const handlePageChange = (event) => {
    if (event.selected === currentPage - 1) {
      return;
    }
    const newPage = event.selected + 1;
    console.log('selected', event.selected);
    setCurrentPage(newPage);
  };

  const handleUndefined = (data) => {
    if (data.isLoading) {
      return (
        <div className="loader">
          <div className="loader-inner">🍿</div>
        </div>
      );
    } else {
      return (
        <CardList
          list={tv}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
          type="tv"
        />
      );
    }
  };

  return handleUndefined(tv);
};
export default Tv;
