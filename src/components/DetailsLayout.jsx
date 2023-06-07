import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  useFetchMovieReviewsQuery,
  useFetchTvReviewsQuery,
  useFetchSimilarTVSeriesQuery,
} from '../utilities/slice';

const DetailsLayout = ({
  backgroundImage,
  posterImage,
  title,
  release_date,
  vote_average,
  overview,
  type,
}) => {
  const { id } = useParams();
  const [expandedReviews, setExpandedReviews] = useState([]);

  let detailsQuery;
  let similarResultsQuery;
  if (type === 'movie') {
    detailsQuery = useFetchMovieReviewsQuery(id);
  } else if (type === 'tv') {
    detailsQuery = useFetchTvReviewsQuery(id);
    similarResultsQuery = useFetchSimilarTVSeriesQuery(id);
  }

  const isLoading = detailsQuery?.isLoading;
  const isError = detailsQuery?.isError;
  const reviews = detailsQuery?.data;
  const similarResults = similarResultsQuery?.data;
  console.log('revs', similarResults);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching details.</div>;
  }

  const handleReadMore = (reviewId) => {
    setExpandedReviews((prevExpandedReviews) => [
      ...prevExpandedReviews,
      reviewId,
    ]);
  };

  const handleReadLess = (reviewId) => {
    setExpandedReviews((prevExpandedReviews) =>
      prevExpandedReviews.filter((id) => id !== reviewId)
    );
  };

  const isReviewExpanded = (reviewId) => {
    return expandedReviews.includes(reviewId);
  };

  return (
    <div className="bg-gradient-to-b from-gray-300 to-transparent pt-20">
      <div className="flex justify-center">
        <div className="max-w-6xl px-4">
          <div className="flex">
            <div className="w-3/4">
              <div
                className="h-96 bg-cover bg-center"
                style={{ backgroundImage }}
              >
                <div className="flex h-full items-center justify-center">
                  <div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <img
                          src={posterImage}
                          alt={title}
                          className="w-48 rounded-lg shadow-lg"
                        />
                        <div className="ml-4">
                          <h1 className="text-4xl font-bold text-white">
                            {title}
                          </h1>
                          <p className="text-lg text-gray-300">
                            {release_date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="ml-4 flex items-center space-x-2 rounded bg-gray-500/50">
                          <span className="text-2xl font-bold text-white">
                            Vote: {vote_average}
                          </span>
                          <span className="text-gray-300">/10</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="rounded-lg bg-gray-200 p-4 shadow">
                        <h2 className="text-2xl font-bold text-black">
                          Overview
                        </h2>
                        <p className="mt-2 text-black">{overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-20 ">
                <div className="bg-white shadow">
                  <h2 className="m-5 rounded-lg pt-10 text-2xl font-bold text-black">
                    Reviews
                  </h2>
                  {reviews ? (
                    reviews.results.map((item) => (
                      <div
                        className="m-10 rounded-lg p-10 shadow"
                        key={item.id}
                      >
                        <h3 key={item.id} className="font-bold">
                          {item.author}
                        </h3>
                        <p>
                          {isReviewExpanded(item.id)
                            ? item.content
                            : item.content.substr(0, 200) + '...'}
                        </p>
                        {isReviewExpanded(item.id) ? (
                          <button
                            className="text-blue-500"
                            onClick={() => handleReadLess(item.id)}
                          >
                            Read Less
                          </button>
                        ) : (
                          <button
                            className="text-blue-500"
                            onClick={() => handleReadMore(item.id)}
                          >
                            Read More
                          </button>
                        )}
                        <p>{item.updated_at}</p>
                      </div>
                    ))
                  ) : (
                    <p>No reviews available</p>
                  )}
                </div>
              </div>
            </div>
            <div className="ml-8 w-1/4">
              <div className="mt-8">
                <div className="rounded-lg bg-gray-200 p-4 shadow">
                  <h2 className="text-2xl font-bold text-black">
                    Similar Results
                  </h2>
                  {similarResults && similarResults.results ? (
                    similarResults.results.map((item) => (
                      <div key={item.id}>
                        <Link to={`${item.id}`}>
                          <img
                            src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
                            alt={item.name}
                            className="w-48 rounded-lg shadow-lg"
                          />
                          <h3 className="hover:text-blue-500">{item.name}</h3>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p>No similar results</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLayout;
