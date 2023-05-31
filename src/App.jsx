import { useState } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Movies from './Pages/Movies';
import Tv from './Pages/Tv'
import Home from './Pages/Home';
import Details from './Pages/Details';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(import.meta.env.VITE_API_KEY)

  return (
    <div>
      <Router>
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex items-center justify-between">
            <div>
              <NavLink exact to="/" className="text-white">
                <h1 className="text-2xl font-bold">AAAAAAAAAAAAAAAAAA</h1>
              </NavLink>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search movies or TV shows"
                className="bg-gray-700 text-white px-4 py-2 rounded"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div>
              <ul className="flex space-x-4">
                <li>
                  <NavLink exact to="/movies" className="text-white">
                    Movies
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tv" className="text-white">
                    TV
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="mt-8">
          {/* <Carousel /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/movies/:id" element={<Details />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);