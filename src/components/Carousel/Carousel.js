//Imports
import React from "react";
//Includes
import slide1 from "../../assets/img/slider/slide1.jpg";
import slide2 from "../../assets/img/slider/slide2.jpg";
import slide3 from "../../assets/img/slider/slide3.jpg";

const Carousel = () => {
  return (
    <div id="mycarousel" className="carousel slide" data-ride="carousel">
      {/*Slides*/}
      <div className="carousel-inner" role="listbox">
        {/*Slide 1*/}
        <div className="carousel-item active">
          <img
            className="d-block w-100 img-fluid"
            height="214px"
            src={slide1}
            alt="slide-1"
          />
          <div className="carousel-caption mb-5">
            <div className="carousel-caption-lg">SERVICE</div>
            <span className="carousel-caption-sm"> At Your Finger Tips!</span>
          </div>
        </div>
        {/*Slide 2*/}
        <div className="carousel-item">
          <img
            className="d-block w-100 img-fluid"
            height="214px"
            src={slide2}
            alt="slide-2"
          />
          <div className="carousel-caption mb-5">
            <div className="carousel-caption-lg">SERVICE</div>
            <span className="carousel-caption-sm"> At Your Finger Tips</span>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            className="d-block w-100 img-fluid"
            height="214px"
            src={slide3}
            alt="slide-3"
          />
          <div className="carousel-caption mb-5">
            <div className="carousel-caption-lg">SERVICE</div>
            <span className="carousel-caption-sm"> At Your Finger Tips</span>
          </div>
        </div>
        {/*Add Other Slides Here*/}

        {/*Slider/Carousel Indicator*/}
        <ol className="carousel-indicators">
          <li
            data-target="#mycarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#mycarousel" data-slide-to="1"></li>
          <li data-target="#mycarousel" data-slide-to="2"></li>
        </ol>
      </div>
    </div>
  );
};

export default Carousel;
