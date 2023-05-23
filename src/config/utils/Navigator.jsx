import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <nav class="py-2 md:py-4">
      <div class="container px-4 mx-auto md:flex md:items-center">
        <div class="flex justify-between items-center">
          <a href="/" class="font-bold text-xl text-secondary">
            Mooooovie
          </a>
          <ul class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 text-neutral">
            <Link to="/">
              <li class="mx-5 hover:text-tertiary">Home</li>
            </Link>
            <Link to="/movies">
              <li class="mx-5 hover:text-tertiary">Movies</li>
            </Link>
            <Link to="/trending">
              <li class="mx-5 hover:text-tertiary">Trending Now</li>
            </Link>
            <Link to="/tv">
              <li class="mx-5 hover:text-tertiary">TV Series</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
