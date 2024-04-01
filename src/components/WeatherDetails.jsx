import {
  CloudRain,
  Drop,
  SunDim,
  ThermometerSimple,
  Wind,
} from "@phosphor-icons/react";
import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";

const WeatherDetails = ({ item }) => {
  const { units, iconSize } = useContext(WeatherContext);

  const { daily, feels_like, humidity, speed } = item;

  return (
    <ul className="bg-base-800 md:p-2 rounded-12">
      <li className="weather-details-li rounded-t-12 ">
        <div className="weather-details-container ">
          <div className="weather-details-label-container">
            <ThermometerSimple
              size={iconSize}
              className="weather-details-icon"
            />
            <p className="weather-details-label">Thermal sensation</p>
          </div>
          <div className="weather-details-value-container">
            <p className="text-responsive">
              {Math.trunc(feels_like)}°{units === "metric" ? "C" : "F"}
            </p>
          </div>
        </div>
      </li>
      <li className="weather-details-li">
        <div className="weather-details-container ">
          <div className="weather-details-label-container">
            <CloudRain size={iconSize} className="weather-details-icon" />
            <p className="weather-details-label">Probability of rain</p>
          </div>

          <div className="weather-details-value-container">
            <p className="text-responsive">{daily[0].pop}%</p>
          </div>
        </div>
      </li>
      <li className="weather-details-li">
        <div className="weather-details-container ">
          <div className="weather-details-label-container">
            <Wind size={iconSize} className="weather-details-icon" />
            <p className="weather-details-label">Wind speed</p>
          </div>

          <div className="weather-details-value-container">
            <p className="text-responsive">{Math.trunc(speed)} km/h</p>
          </div>
        </div>
      </li>
      <li className="weather-details-li">
        <div className="weather-details-container ">
          <div className="weather-details-label-container">
            <Drop size={iconSize} className="weather-details-icon" />
            <p className="weather-details-label">Air humidity</p>
          </div>

          <div className="weather-details-value-container">
            <p className="text-responsive">{humidity}%</p>
          </div>
        </div>
      </li>
      <li className="weather-details-li  rounded-b-12">
        <div className="weather-details-container ">
          <div className="weather-details-label-container">
            <SunDim size={iconSize} className="weather-details-icon" />
            <p className="weather-details-label">UV Index</p>
          </div>
          <div className="weather-details-value-container">
            <p className="text-responsive">{daily[0].uvi}</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default WeatherDetails;
