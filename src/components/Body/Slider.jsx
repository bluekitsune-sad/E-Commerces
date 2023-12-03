import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import banner1 from '../images/11691642776.svg';
import banner2 from '../images/21672212633.svg';
import banner3 from '../images/51672228235.svg';
import banner4 from '../images/71672228236.svg';

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
      {/* <div>
        <img src={b1} alt="Image 1" />
      </div>
      <div>
        <img src={b2} alt="Image 2" />
      </div> */}
      <div>
        <img src={banner1} alt="Image 1" />
      </div>
      <div>
        <img src={banner2} alt="Image 2" />
      </div>
      <div>
        <img src={banner3} alt="Image 3" />
      </div>
      <div>
        <img src={banner4} alt="Image 4" />
      </div>
      {/* Add more images as needed */}
    </Slider>
    
  );
};

export default SlidingImages;
