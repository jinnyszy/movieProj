import { useEffect, useState } from "react";
import CardList from '../components/CardList'
//import fetchMovies from "../utilities/fetchStuff";
const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`
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

        <CardList list={movies} />
    );
};
export default Movies;
