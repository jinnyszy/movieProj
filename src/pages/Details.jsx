import { useParams } from 'react-router-dom';
import {
  useFetchMovieDetailsQuery,
  useFetchTvDetailsQuery,
} from '../utilities/slice';
import DetailsLayout from '../components/DetailsLayout';

const Details = ({ type }) => {
  const { id } = useParams();

  let detailsQuery;
  if (type === 'movie') {
    detailsQuery = useFetchMovieDetailsQuery(id);
  } else if (type === 'tv') {
    detailsQuery = useFetchTvDetailsQuery(id);
  }

  const isLoading = detailsQuery?.isLoading;
  const isError = detailsQuery?.isError;
  const details = detailsQuery?.data;

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-inner">🍿</div>
      </div>
    );
  }

  if (isError) {
    return <div>Error occurred while fetching details.</div>;
  }

  console.log('details', details);

  return (
    <DetailsLayout
      backgroundImage={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
      posterImage={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
      title={details.title || details.name}
      release_date={details.release_date || details.first_air_date}
      vote_average={details.vote_average}
      overview={details.overview}
      type={type}
    />
  );
};

export default Details;
