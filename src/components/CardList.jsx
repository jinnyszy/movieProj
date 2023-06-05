import { Component } from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

class CardList extends Component {
  render() {
    const { list, currentPage, totalPages, handlePageChange } = this.props;
    console.log('list', list);
    return (
      <div className="mx-auto w-4/5">
        <div className="grid grid-cols-8 gap-4">
          {list.results && Array.isArray(list.results) ? (
            list.results.map((item) => (
              <div key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                  className="h-96 w-full rounded-lg object-cover"
                />
                <Link
                  to={`/movies/${item.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {' '}
                  {item.title}{' '}
                </Link>
              </div>
            ))
          ) : (
            <ErrorBoundary errorMsg={<h2>haha error</h2>} />
          )}
        </div>
        <div className="justify-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default CardList;
