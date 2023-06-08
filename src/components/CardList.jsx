import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const CardList = ({ list, totalPages, handlePageChange, type }) => {
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
                to={`/${type}/${item.id}`}
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
      <div className="m-10 flex justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageChange}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="pagination-item"
          previousClassName="pagination-item"
          nextClassName="pagination-item"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default CardList;
