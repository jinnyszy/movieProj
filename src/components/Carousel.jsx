import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

const Carousel = (props) => {
  const { list } = props;
  console.log('list', list);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth
    ) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }
    if (direction === 'next' && carousel.current) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth;
    }
    return false;
  };

  useEffect(() => {
    if (carousel.current) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  const maxScrollWidth = carousel.current
    ? carousel.current.scrollWidth - carousel.current.offsetWidth
    : 0;

  return (
    <div className="carousel mx-auto my-12 flex justify-center">
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 flex h-full">
          <button
            onClick={movePrev}
            className={`z-10 m-0 h-full w-10 p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-black ${
              isDisabled('prev')
                ? 'disabled:cursor-not-allowed disabled:opacity-25'
                : ''
            }`}
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-5 h-12 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
        </div>
        <div className="absolute right-0 top-0 flex h-full">
          <button
            onClick={moveNext}
            className={`z-10 m-0 h-full w-10 p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-black ${
              isDisabled('next')
                ? 'disabled:cursor-not-allowed disabled:opacity-25'
                : ''
            }`}
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-5 h-12 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative z-0 flex touch-pan-x snap-x snap-mandatory gap-1 overflow-hidden scroll-smooth"
        >
          {list.results && Array.isArray(list.results) ? (
            list.results.map((item) => (
              <div
                key={item.id}
                className="carousel-item relative h-64 w-64 snap-start text-center"
              >
                <a
                  href={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  className="z-0 block aspect-square h-full w-full bg-cover bg-left-top bg-no-repeat bg-origin-padding"
                  style={{
                    backgroundImage: `url(${
                      `https://image.tmdb.org/t/p/w500/${item.poster_path}` ||
                      ''
                    })`,
                  }}
                />
                <Link
                  to={`/${item.first_air_date ? 'tv' : 'movie'}/${item.id}`}
                  className="absolute left-0 top-0 z-10 block aspect-square h-full w-full bg-pink-600/75 opacity-0 transition-opacity duration-300 hover:opacity-100"
                >
                  <h3 className="mx-auto px-3 py-6 text-xl text-white">
                    {item.title}
                  </h3>
                  <p className="mx-auto px-3 py-6 text-xl text-white">
                    Vote Count: {item.vote_count}
                  </p>
                  <p className="mx-auto px-3 py-6 text-xl text-white">
                    Vote Average: {item.vote_average}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <ErrorBoundary errorMsg={<h2>Error lol</h2>} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
