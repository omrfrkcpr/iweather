import React from "react";
import WeatherIcon from "../assets/weather-icons/Clear_Day.svg";

const GeneralInfos = () => {
  return (
    <div className="general-infos flex flex-col justify-between w-full p-4 text-lg">
      <div className="time-and-location mb-10">
        <h1>Istanbul, TR</h1>
        <p>Sunday, May 24, 2024</p>
      </div>
      <div className="general-weather flex flex-row justify-between">
        <div className="w-1/2 flex flex-col justify-end">
          <h1>28°C</h1>
          <p>26°C / 32°C</p>
          <p>Clear</p>
        </div>
        <div className="w-1/2">
          <img src={WeatherIcon} alt="" className="ms-auto" />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfos;
