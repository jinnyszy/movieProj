import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const CardList = ({ list, currentPage, totalPages, handlePageChange, totalResults }) => {
  const [resultsPerPage] = useState(30);

  return (
    <div className="mx-auto w-4/5">
      <div className="grid grid-cols-8 gap-4">
        {list.data.results && Array.isArray(list.data.results) ? (
          list.data.results.map((item) => (
            <div key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
                className="h-96 w-full rounded-lg object-cover"
              />
              <Link
                to={`/movie/${item.id}`}
                className="text-blue-500 hover:underline"
              >
                {item.title ? item.title : item.name}
              </Link>
            </div>
          ))
        ) : (
          <h2>Nothing to see here</h2>
        )}
      </div>
      <div className="m-10 flex flex-wrap justify-evenly">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageChange}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
        {/* <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Previous
        </button>
        {
          totalPages.map(pgNumber => (
            <li key={pgNumber} >
              <a onClick={() => handlePageChange(currentPage)}>
                {pgNumber}
              </a>
            </li>
          ))
        }
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Next
        </button> */}
      </div>
    </div>
  );
};

export default CardList;
