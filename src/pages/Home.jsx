import { useEffect, useState } from "react";
import Carousel from '../components/Carousel'
import CardList from "../components/CardList";
const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`
                );
                const data = await response.json();
                console.log("res", data?.results);
                setMovies(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <>
            <Carousel list={movies} />
            <CardList list={movies} />

        </>
    );
};
export default Home;
