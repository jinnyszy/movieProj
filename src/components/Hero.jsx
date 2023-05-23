import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  return (
    <section className="slider container mb-3">
      <Carousel>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Hero;
