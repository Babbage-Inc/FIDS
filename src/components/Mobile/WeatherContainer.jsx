import React from "react";
import axios from "axios";

import { WiHumidity } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { FaTemperatureHigh } from "react-icons/fa";

import himalayan from "./assets/himalayan.png";

const WeatherContainer = () => {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=281f201393bf0c0b0cad0ece00c1714e`;

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
            <h1>32°C</h1>
          </div>
          <div className="description">Cloudy</div>
        </div>
        <div className="right-weather-container">
          <div className="humidity">
            <WiHumidity size={24} /> <p>30%</p>
          </div>
          <div className="wind">
            <BiWind size={24} /> <p>20MPH</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <img className="himalayan-img" src={himalayan} alt="" />
      </div>
    </div>
  );
};

export default WeatherContainer;
