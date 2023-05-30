import { useEffect, useState } from "react";
import Carousel from '../components/Carousel'

const Tv = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchTv = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        console.log("res", data?.results);
        setSeries(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTv();
  }, []);

  return (
    <div>
      <Carousel list={series} />
    </div>
  )
};
export default Tv;
