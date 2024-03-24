import React from "react";
import WeatherIcons from "../assets/weather-icons/Rain_Day.svg";

const Forecast = () => {
  return (
    <ul className="bg-base-800 p-2 rounded-12 flex flex-row mt-3">
      <li className="p-3 flex flex-col text-center">
        <div>
          <p className="text-md text-base-200">Mon</p>
        </div>
        <div>
          <img src={WeatherIcons} alt="" width="100%" />
        </div>
        <div>
          <p className="text-base-100">32°C</p>
          <p className="text-base-400">26°C</p>
        </div>
      </li>
      <li className="p-3 flex flex-col text-center">
        <div>
          <p className="text-md text-base-200">Mon</p>
        </div>
        <div>
          <img src={WeatherIcons} alt="" width="100%" />
        </div>
        <div>
          <p className="text-base-100">32°C</p>
          <p className="text-base-400">26°C</p>
        </div>
      </li>
      <li className="p-3 flex flex-col text-center">
        <div>
          <p className="text-md text-base-200">Mon</p>
        </div>
        <div>
          <img src={WeatherIcons} alt="" width="100%" />
        </div>
        <div>
          <p className="text-base-100">32°C</p>
          <p className="text-base-400">26°C</p>
        </div>
      </li>
      <li className="p-3 flex flex-col text-center">
        <div>
          <p className="text-md text-base-200">Mon</p>
        </div>
        <div>
          <img src={WeatherIcons} alt="" width="100%" />
        </div>
        <div>
          <p className="text-base-100">32°C</p>
          <p className="text-base-400">26°C</p>
        </div>
      </li>
      <li className="p-3 flex flex-col text-center">
        <div>
          <p className="text-md text-base-200">Mon</p>
        </div>
        <div>
          <img src={WeatherIcons} alt="" width="100%" />
        </div>
        <div>
          <p className="text-base-100">32°C</p>
          <p className="text-base-400">26°C</p>
        </div>
      </li>
    </ul>
  );
};

export default Forecast;
