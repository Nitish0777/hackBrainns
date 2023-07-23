import React from "react";
import abt1 from "../../assets/abt1.jpeg";
import abt2 from "../../assets/abt2.jpeg";
import abt3 from "../../assets/abt3.jpeg";
import "../../styles/carousel.css";

const Home = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval={2500}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={abt1} className="d-block w-100 h-50" alt="slide" />
          <div className="carousel-content btext" id="typed-text-1" />
          <button className="btn btn-outline-success btext">Apply Now</button>
        </div>
        <div className="carousel-item">
          <img src={abt2} className="d-block w-100 h-50" alt="slide" />
          <div className="carousel-content btext" id="typed-text-2" />
          <button className="btn btn-outline-success btext">Apply Now</button>
        </div>
        <div className="carousel-item">
          <img src={abt3} className="d-block w-100 h-50" alt="slide" />
          <div className="carousel-content btext" id="typed-text-3" />
          <button className="btn btn-outline-success btext">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
