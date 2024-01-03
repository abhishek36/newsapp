import React from "react";
import NewsContent from "../components/NewsContent";
import Carousel from "../components/Carousel";
import Marquee from "../components/Marquee";

const Home = () => {
  return (
    <>
      <div className="container">
        <Marquee />
        <Carousel />
        <NewsContent />
      </div>
    </>
  );
};

export default Home;
