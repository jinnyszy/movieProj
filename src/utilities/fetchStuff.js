//move this into a const file
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTA5NzMzZjI3Nzg2M2MyNGE0OGI5OTNhYTVhNGM2OCIsInN1YiI6IjY0NmM0ZTQxYzM1MTRjMmIwODUxY2IwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VFRhclXQMxnEI9DhcKNXMZekhxWaNKu7uB4v9EHqhv0",
    },
};

async function fetchStuff({ queryKey }) {
    //implement fetch constants here

    //passing obj in query

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
        options
    )
        // .then((response) => response.json())
        // .then((response) => console.log(response))
        .catch((err) => console.error(err));

    console.log('res', res)

    if (!res) {
        throw new Error(`something went wrong`);
    }
    return res.json();
}

export default fetchStuff