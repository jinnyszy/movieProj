import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TrendingNow from "./pages/TrendingNow";
import Tv from "./pages/Tv";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/trending" element={<TrendingNow />} />
          <Route path="/tv" element={<Tv />} />
        </Routes>
      </Router>
    </div>
    // <>
    //   <div className="text-purple-600">index page</div>
    //   <div>The env variables are shown below:</div>
    //   <div>{import.meta.env.VITE_API_KEY}</div>
    // </>
  );
}

export default App;
