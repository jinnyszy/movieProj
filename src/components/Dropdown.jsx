import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ genres, title }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="group relative z-20" ref={dropdownRef}>
      <NavLink
        to="/movies"
        className="text-white hover:text-gray-400"
        onMouseOver={toggleDropdown}
      >
        {title}
      </NavLink>
      {isDropdownOpen && (
        <ul className="absolute mt-1 space-y-2 rounded-md bg-gray-800 p-2 text-white">
          {genres.genres && Array.isArray(genres.genres)
            ? genres.genres.map((genre) => (
                <li key={genre.id}>
                  <NavLink
                    to={`/movies?genre=${genre.id}`}
                    className="block hover:text-gray-400"
                  >
                    {genre.name}
                  </NavLink>
                </li>
              ))
            : []}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
