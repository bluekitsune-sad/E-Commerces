import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <img src="/path/to/image1.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="/path/to/image2.jpg" alt="Image 2" />
      </div>
      {/* Add more images as needed */}
    </Slider>
  );
};

export default SlidingImages;
