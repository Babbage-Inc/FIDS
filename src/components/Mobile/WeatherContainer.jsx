import React, { useState, useEffect } from "react";
import axios from "axios";

import { WiHumidity } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { FaTemperatureHigh } from "react-icons/fa";

import himalayan from "./assets/himalayan.png";

const WeatherContainer = () => {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("kathmandu");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1a50eea33427e3b8e88c2a957dfc6bed&units=metric`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="weather-container">
      <div className="top">
        {" "}
        <div className="left-weather-container">
          <div className="location">
            <h2>Kathmandu</h2>
          </div>
          <div className="temp">
            <FaTemperatureHigh size={45} />
            <h1>{data.main?.temp.toFixed(1)}°C</h1>
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="right-weather-container">
          {data.main && (
            <div className="humidity">
              <WiHumidity size={24} /> <p>{data.main.humidity}%</p>
            </div>
          )}
          {data.wind && (
            <div className="wind">
              <BiWind size={24} /> <p>{data.wind.speed}MPH</p>
            </div>
          )}
        </div>
      </div>
      <div className="bottom">
        <img className="himalayan-img" src={himalayan} alt="" />
      </div>
    </div>
  );
};

export default WeatherContainer;
