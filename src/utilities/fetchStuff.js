//move this into a const file
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTA5NzMzZjI3Nzg2M2MyNGE0OGI5OTNhYTVhNGM2OCIsInN1YiI6IjY0NmM0ZTQxYzM1MTRjMmIwODUxY2IwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VFRhclXQMxnEI9DhcKNXMZekhxWaNKu7uB4v9EHqhv0",
    },
};

const fetchMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    console.log("res", data?.results);
    return data;
};

const fetchTv = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    console.log("res", data?.results);
    return data;
};

const fetchNowShowing = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    console.log("res", data?.results);
    return data;
};

export default {
    fetchMovies,
    fetchTv,
    fetchNowShowing
}
