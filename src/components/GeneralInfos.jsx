import React from "react";
import WeatherIcon from "../assets/weather-icons/Few-Clouds_Night.svg";
import { formatToLocalTime } from "../services/AppService";

const GeneralInfos = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div className="bg-base-800 w-full p-4 text-lg rounded-12">
      <div className="general-infos p-4 rounded-8">
        <div className="time-and-location mb-8 ms-8 mt-8">
          <div className="location flex flex-row gap-3 mb-3">
            <h1 className="mt-2">{`${name}, ${country}`}</h1>
            <img
              src={`https://flagsapi.com/${country}/flat/64.png`}
              alt="country-flag"
            />
          </div>
          <div className="time">
            <p className="text-md">{formatToLocalTime(dt, timezone)}</p>
          </div>
        </div>
        <div className="general-weather flex flex-row justify-between">
          <div className="w-1/2 flex flex-col justify-center ms-8">
            <h1 className="text-xl">28°C</h1>
            <p>26°C / 32°C</p>
            <p className="text-md">Few Clouds</p>
          </div>
          <div className="w-1/2">
            <img src={WeatherIcon} alt="" className="ms-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfos;
