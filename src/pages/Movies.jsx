import { useState } from 'react';
import { useFetchMoviesQuery } from '../utilities/slice';
import CardList from '../components/CardList';

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1); // Define and initialize currentPage using useState
  const movies = useFetchMoviesQuery(currentPage);
  const totalPages = movies?.data?.total_pages;

  const handlePageChange = (event) => {
    if (event.selected === currentPage - 1) {
      return;
    }
    const newPage = event.selected + 1;
    console.log('selected', event.selected);
    setCurrentPage(newPage);
  };

  const handleUndefined = (movies) => {
    if (movies.isLoading) {
      return (
        <div className="loader">
          <div className="loader-inner">🍿</div>
        </div>
      );
    } else {
      return (
        <CardList
          list={movies}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
          type="movie"
        />
      );
    }
  };

  return handleUndefined(movies);
};

export default Movies;
