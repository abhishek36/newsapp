import React from "react";
// import img from "../assets/logo.png";
import modi from "../assets/modi.jpg";
import yogi from "../assets/yogi.jpg";
import japan from "../assets/japan.jpg";
import sharab from "../assets/sharab.jpg";
import Slider from "react-slick";
import bn from "../assets/bn.jpg";
import bn2 from "../assets/bn2.jpg";
import bn3 from "../assets/bn3.jpg";
import bn4 from "../assets/bn4.jpg";
import bn5 from "../assets/bn5.jpg";
import bn6 from "../assets/bn6.jpg";
import bn7 from "../assets/bn7.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-bx">
            <img src={modi} alt="" />
          </div>
          <div className="slider-bx">
            <img src={yogi} alt="" />
          </div>
          <div className="slider-bx">
            <img src={bn7} alt="" />
          </div>
          <div className="slider-bx">
            <img src={sharab} alt="" />
          </div>
          <div className="slider-bx">
            <img src={bn5} alt="" />
          </div>
          <div className="slider-bx">
            <img src={japan} alt="" />
          </div>
          <div className="slider-bx">
            <img src={bn2} alt="" />
          </div>
          <div className="slider-bx">
            <img src={bn4} alt="" />
          </div>
          <div className="slider-bx">
            <img src={bn3} alt="" />
          </div>
          <div className="slider-bx">
            <img src={bn6} alt="" />
          </div>
          <div className="slider-bx">
            <img src={bn} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
