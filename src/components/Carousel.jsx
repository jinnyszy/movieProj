import { useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

const Carousel = () => {
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

    const truncateText = (text, limit) => {
        if (text.length <= limit) {
            return text;
        }
        return text.slice(0, limit).concat('...');
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-4/5">
                <h1 className="text-2xl font-bold mb-4">Now Showing</h1>
                <div className="flex space-x-4 overflow-x-auto">
                    {movies
                        ? movies.map((movie) => (
                            <div key={movie.id} className="w-64">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-full h-96 object-cover rounded-lg"
                                />
                                <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
                                <p className="text-gray-500">{movie.release_date}</p>
                                <p className="mt-2">{truncateText(movie.overview, 50)}</p>
                                <a href={`/movie/${movie.id}`} className="text-blue-500 hover:underline"> Read More </a>                            </div>
                        ))
                        : []}
                </div>
            </div>
        </div>
    );
};

function DetailsErrorBoundary() {
    return (
        <ErrorBoundary errorMsg={<h2>haha error</h2>}>
            <Carousel />
        </ErrorBoundary>
    );
}

export default DetailsErrorBoundary;
