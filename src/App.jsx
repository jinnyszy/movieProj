import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  useFetchMovieGenresQuery,
  useFetchTvGenresQuery,
} from './utilities/slice';
import store from './utilities/store';
import Dropdown from './components/Dropdown';
import SearchParams from './components/SearchParams';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const Tv = lazy(() => import('./pages/Tv'));
const Details = lazy(() => import('./pages/Details'));

const App = () => {
  const movieGenresQuery = useFetchMovieGenresQuery();
  const tvGenresQuery = useFetchTvGenresQuery();
  const movieGenres = movieGenresQuery.data;
  const tvGenres = tvGenresQuery.data;

  return (
    <div>
      <Router>
        <header className="bg-gray-800 p-4 text-white">
          <nav className="flex flex-wrap justify-evenly">
            <div>
              <NavLink to="/" className="text-white">
                <h1 className="text-2xl font-bold hover:text-gray-400">
                  AAAAAAAAAAAAAAAAAA
                </h1>
              </NavLink>
            </div>
            <div>
              <ul className="flex space-x-4">
                <SearchParams />
              </ul>
            </div>
            <div>
              <ul className="flex space-x-4">
                <Dropdown list={movieGenres} title={'Movie'} />
                <Dropdown list={tvGenres} title={'TV'} />
              </ul>
            </div>
          </nav>
        </header>
        <div className="mt-8">
          <Suspense
            fallback={
              <div className="loader">
                <div className="loader-inner">🍿</div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie" element={<Movies />} />
              <Route path="/tv" element={<Tv />} />
              <Route path="/movie/:id" element={<Details type="movie" />} />
              <Route path="/tv/:id" element={<Details type="tv" />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
