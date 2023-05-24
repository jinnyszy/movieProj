import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/now_playing",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTA5NzMzZjI3Nzg2M2MyNGE0OGI5OTNhYTVhNGM2OCIsInN1YiI6IjY0NmM0ZTQxYzM1MTRjMmIwODUxY2IwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VFRhclXQMxnEI9DhcKNXMZekhxWaNKu7uB4v9EHqhv0",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data.results);
    this.setState({
      results: response.data.results,
      movieDesc: response.data.results.
    });
    
  })
  .catch(function (error) {
    console.error(error);
  });

function Hero(props) {

  constructor(props) {

    super(props);

     this.state = {

      make: "Yamaha",

      model: "R15",

      color: "blue"

    };

  }

  const { movieDesc } = this.state;

  console.log(movieDesc)
  
  return (
    <Carousel>
      <div>
        <img src="../../public/bnn.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="../../public/bnn.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="../../public/bnn.jpg" />
        <p className="legend">Legend 3</p>
      </div>

    </Carousel>
  );
}

export default Hero;
