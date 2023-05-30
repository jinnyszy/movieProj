import Movies from '../Pages/Movies'

const Results = ({ movies }) => {
    return (
        <div className='search'>
            {!movies?.length ? (
                <h1>No Movies Found</h1>
            ) : (
                movies.map((movie) => {
                    return (
                        <Movies
                            adult={movie.adult}
                            original_title={movie.original_title}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date}
                            backdrop_path={movie.backdrop_path}
                            popularity={movie.popularity}
                            original_language={movie.original_language}
                            overview={movie.overview}
                            title={movie.title}
                            vote_average={movie.vote_average}
                            vote_count={movie.vote_count}
                            //location={`${pet.city}, ${pet.state}`}
                            key={movie.id}
                            id={movie.id}
                        />
                    );
                })
            )}
        </div>
    )
}

export default Results