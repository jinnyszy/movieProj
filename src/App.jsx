import { useState } from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel';
import Movies from './Pages/Movies';
import Tv from './Pages/Tv';
//import Details from './Pages/Details';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Router>
      <div>
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">AAAAAAAAAAAAAAAAAA</h1>
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
                  <NavLink exact to="/" className="text-white" activeClassName="font-bold">
                    Movies
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tv" className="text-white" activeClassName="font-bold">
                    TV
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="mt-8">
          <Carousel />
          <Routes>
            <Route exact path="/" component={Movies} />
            <Route path="/tv" component={Tv} />
            {/* <Route path="/search" component={Details} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};



export default App;