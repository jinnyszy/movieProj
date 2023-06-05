import { useState, lazy, Suspense, useEffect } from 'react';
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

const Home = lazy(() => import('./Pages/Home'));
const Movies = lazy(() => import('./Pages/Movies'));
const Tv = lazy(() => import('./Pages/Tv'));
const Details = lazy(() => import('./Pages/Details'));

const App = () => {
  const movieGenresQuery = useFetchMovieGenresQuery();
  const tvGenresQuery = useFetchTvGenresQuery();
  const movieGenres = movieGenresQuery.data;
  const tvGenres = tvGenresQuery.data;

  console.log('movgenre', movieGenres);

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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
              <input
                type="text"
                placeholder="Search movies or TV shows"
                className="rounded bg-gray-700 px-4 py-2 text-white"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div>
              <ul className="flex space-x-4">
                <li className="group relative">
                  {/* <NavLink
                    to="/movies"
                    className="text-white hover:text-gray-400"
                  > */}
                  <Dropdown genres={movieGenres} title={'Movies'} />
                  {/* </NavLink> */}
                </li>

                <li>
                  {/* <NavLink to="/tv" className="text-white hover:text-gray-400"> */}
                  <Dropdown genres={tvGenres} title={'TV'} />
                  {/* </NavLink> */}
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="mt-8">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tv" element={<Tv />} />
              <Route path="/movies/:id" element={<Details />} />
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
