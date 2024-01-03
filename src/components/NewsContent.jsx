import React, { useContext, useEffect } from "react";
import NewsContext from "../context/news/NewsContext";
import Cards from "./Cards";
import { fetchnews } from "../context/news/NewsAction";
import WeatherContent from "./WeatherContent";

const NewsContent = () => {
  const { newsall, dispatch, topic } = useContext(NewsContext);
  const getnews = async (category) => {
    const data = await fetchnews(category);
    dispatch({
      type: "GET_DATA",
      payload: { news: data, topic: category },
    });
    console.log(data);
  };

  useEffect(() => {
    getnews("indore");
  }, []);

  if (!newsall) {
    return <h1 className="loading">loading news...</h1>;
  }

  return (
    <>
      <div className="news-container">
        <div className="top">top news for {topic}</div>
        <div className="news-part">
          <div className="left-part">
            <div className="top top-two">top news for {topic}</div>
            {newsall.map((news, index) => (
              <Cards
                key={index}
                title={news.title}
                description={news.description}
                author={news.author}
                url={news.url}
                urlToImage={news.urlToImage}
              />
            ))}
          </div>
          <WeatherContent />
        </div>
      </div>
    </>
  );
};

export default NewsContent;
