import React from "react";
import not from "../assets/not.png";

const Cards = ({ title, url, description, urlToImage, author }) => {
  return (
    <>
      <div className="news-box">
        <div className="news-box-img">
          <img src={urlToImage ? urlToImage : not} alt="" />
        </div>
        <div className="news-text">
          <div className="news-title">
            <h3>{title.slice(0, 45)}</h3>
            <p>{description.slice(0, 55)}</p>
            <div className="date">
              Date : {new Date().toLocaleDateString('en-IN')}
            </div>
            <div className="time">Time : {new Date().toLocaleTimeString()}</div>
          </div>
          <div className="btn">
            <span>- {author}</span>
            <a href={url} className="readmore">
              read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
