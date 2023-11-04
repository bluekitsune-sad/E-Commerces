import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";

const SlidingImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={b1} alt="Image 1" />
      </div>
      <div>
        <img src={b2} alt="Image 2" />
      </div>
      {/* Add more images as needed */}
    </Slider>
  );
};

export default SlidingImages;
