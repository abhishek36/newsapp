import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Politics from "./pages/Politics";
import Bollywood from "./pages/Bollywood";
import Animals from "./pages/Animals";
import Error from "./pages/Error";
import { NewsProvider } from "./context/news/NewsContext";
import Slider from "react-slick";
import { WeatherProvider } from "./context/weather/WeatherContext";

const App = () => {
  return (
    <BrowserRouter>
      <NewsProvider>
        <WeatherProvider>
          <Navbar />
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/lifestyle" element={<Animals />} />
          </Routes>
        </WeatherProvider>
      </NewsProvider>
    </BrowserRouter>
  );
};

export default App;
