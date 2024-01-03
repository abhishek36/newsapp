import React, { useContext, useEffect } from "react";
import Cards from "../components/Cards";
import NewsContext from "../context/news/NewsContext";
import { fetchnews } from "../context/news/NewsAction";

const Animals = () => {
  const { topic, newsall, dispatch } = useContext(NewsContext);
  const getnews = async (category) => {
    const data = await fetchnews(category);
    dispatch({
      type: "GET_DATA",
      payload: { news: data, topic: category },
    });
    console.log(data);
  };

  useEffect(() => {
    getnews("lifestyle");
  }, []);
  return (
    <div>
      <div className="news-container news-container-two">
        <div className="tops">top <span>news</span> for {topic}</div>
        <div className="news-part">
          <div className="left-part">
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
        </div>
      </div>
    </div>
  );
};

export default Animals;
