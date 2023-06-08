import { Link } from 'react-router-dom';
import {
  useFetchNowShowingQuery,
  useFetchMoviesQuery,
  useFetchTVSeriesQuery,
} from '../utilities/slice';

import Carousel from '../components/Carousel';

const Home = () => {
  const nowShowingQuery = useFetchNowShowingQuery();
  const moviesQuery = useFetchMoviesQuery();
  const tvQuery = useFetchTVSeriesQuery();
  const nowShowing = nowShowingQuery.data;
  const movies = moviesQuery.data;
  const tv = tvQuery.data;

  return (
    <div className="flex flex-wrap justify-evenly">
      {/* Now Showing */}
      <div className="px-10 py-3 2xl:container 2xl:mx-auto 2xl:px-0">
        <h1 className="mb-4 text-center text-2xl font-bold">Now Showing</h1>
        {nowShowingQuery.isLoading ? (
          <div>Loading now showing movies...</div>
        ) : nowShowingQuery.isError ? (
          <div>
            Error loading now showing movies: {nowShowingQuery.error.message}
          </div>
        ) : (
          <Carousel list={nowShowing} />
        )}
      </div>

      {/* Popular Movies */}
      <div className="mb-8">
        <div className="px-10 py-3 2xl:container 2xl:mx-auto 2xl:px-0">
          <Link
            to="/movie"
            className="mb-4 text-center text-2xl font-bold hover:text-gray-400"
          >
            Popular Movies
          </Link>
          {moviesQuery.isLoading ? (
            <div>Loading popular movies...</div>
          ) : moviesQuery.isError ? (
            <div>Error loading popular movies: {moviesQuery.error.message}</div>
          ) : (
            <Carousel list={movies} />
          )}
        </div>
      </div>

      {/* TV Shows */}
      <div className="mb-8">
        <div className="px-10 py-3 2xl:container 2xl:mx-auto 2xl:px-0">
          <Link
            to="/tv"
            className="mb-4 text-center text-2xl font-bold hover:text-gray-400"
          >
            TV Shows
          </Link>
          {tvQuery.isLoading ? (
            <div>Loading TV shows...</div>
          ) : tvQuery.isError ? (
            <div>Error loading TV shows: {tvQuery.error.message}</div>
          ) : (
            <Carousel list={tv} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
