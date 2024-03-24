import React from "react";
import WeatherIcons from "../assets/weather-icons/Rain_Day.svg";

const Forecast = () => {
  return (
    <ul className="bg-base-800 p-2 rounded-12 flex flex-row">
      <li className="p-3 flex flex-col text-center">
        <p className="text-md text-base-200">Mon</p>
        <img src={WeatherIcons} alt="" width="100%" />
        <p className="text-base-100">32°C</p>
        <p className="text-base-400">26°C</p>
      </li>
      <li className="p-3 flex flex-col text-center">
        <p className="text-md text-base-200">Mon</p>
        <img src={WeatherIcons} alt="" width="100%" />
        <p className="text-base-100">32°C</p>
        <p className="text-base-400">26°C</p>
      </li>
      <li className="p-3 flex flex-col text-center">
        <p className="text-md text-base-200">Mon</p>
        <img src={WeatherIcons} alt="" width="100%" />
        <p className="text-base-100">32°C</p>
        <p className="text-base-400">26°C</p>
      </li>
      <li className="p-3 flex flex-col text-center">
        <p className="text-md text-base-200">Mon</p>
        <img src={WeatherIcons} alt="" width="100%" />
        <p className="text-base-100">32°C</p>
        <p className="text-base-400">26°C</p>
      </li>
      <li className="p-3 flex flex-col text-center">
        <p className="text-md text-base-200">Mon</p>
        <img src={WeatherIcons} alt="" width="100%" />
        <p className="text-base-100">32°C</p>
        <p className="text-base-400">26°C</p>
      </li>
    </ul>
  );
};

export default Forecast;
