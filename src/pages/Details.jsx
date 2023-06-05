import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsLayout from '../components/DetailsLayout';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [img, setImg] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = await response.json();
        console.log('details', data);
        setDetails(data);
        setImg(`https://api.themoviedb.org/3/movie/${id}`);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <DetailsLayout
      backgroundImage={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
      posterImage={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
      title={details.title}
      release_date={details.release_date}
      vote_average={details.vote_average}
      overview={details.overview}
    />
    // <div>
    //     <h1 className="text-2xl font-bold mb-4">{details.title}</h1>
    //     <img
    //         src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
    //         alt={details.title}
    //         className="w-64 h-96 object-cover rounded-lg"
    //     />
    //     <p className="text-gray-500">{details.release_date}</p>
    //     <p className="mt-2">{details.overview}</p>
    // </div>
  );
};

export default Details;
