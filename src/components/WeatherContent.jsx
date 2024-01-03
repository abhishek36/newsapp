import React, { useContext, useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import WeatherContext from "../context/weather/WeatherContext";
import { FetchWeather } from "../context/weather/WeatherAction";

const WeatherContent = () => {
  const [text, settext] = useState("");
  const { weather, dispatch } = useContext(WeatherContext);
  const GetWeather = async (topic) => {
    const data = await FetchWeather(topic);
    dispatch({
      type: "GET_WEATHER",
      payload: data,
    });
    console.log(data);
  };
  useEffect(() => {
    GetWeather("indore");
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = await FetchWeather(text);
    dispatch({
      type: "GET_WEATHER",
      payload: data,
    });
    settext("");
    console.log(data);
  };

  if (!weather) {
    return <h3 className="loading">loading weather data...</h3>;
  }
  return (
    <>
      <div className="right-part">
        <form onSubmit={handlesubmit}>
          <div className="city-input">
            <input
              type="search"
              placeholder="enter your city"
              value={text}
              onChange={(e) => settext(e.target.value)}
            />
            <button className="city-search">
              <IoIosSearch />
            </button>
          </div>
          <div className="weather-bx">
            <div className="weather-head">
              <span>
                <FaLocationDot className="location" />
                <h3>{weather.location.name}</h3>
              </span>
              <div className="weather-text">
                {weather.current.condition.text}
              </div>
            </div>
            <div className="temp">
              <div className="weather-icon">
                <img src={weather.current.condition.icon} alt="" />
              </div>
              <h1 className="degree">{weather.current.temp_c}°</h1>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default WeatherContent;
