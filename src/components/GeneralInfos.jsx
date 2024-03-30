import React, { useContext } from "react";
import {
  formatToLocalTime,
  formatBackground,
  iconUrlFromCode,
} from "../services/AppService";
import { WeatherContext } from "../context/WeatherProvider";

const GeneralInfos = () => {
  const { weather, units } = useContext(WeatherContext);

  const {
    icon,
    dt,
    timezone,
    name,
    country,
    description,
    temp,
    temp_min,
    temp_max,
  } = weather;

  return (
    <div className="bg-base-800 w-full p-2 text-lg rounded-12">
      <div
        className="p-1 rounded-8 bg-cover h-full flex flex-col justify-between"
        style={{ backgroundImage: `url(${formatBackground(icon)})` }}
      >
        <div className="time-and-location m-8 ">
          <div className="location flex flex-row gap-3 mb-3">
            <h1 className="mt-2 text-lg">{`${name}, ${country}`}</h1>
            <img
              src={`https://flagsapi.com/${country}/flat/64.png`}
              alt={`${country}-flag`}
              className="h-fit w-fit"
            />
          </div>
          <div className="time">
            <p className="text-md">{formatToLocalTime(dt, timezone)}</p>
          </div>
        </div>
        <div className="general-weather flex flex-row justify-between m-8 mb-4 ">
          <div className="w-1/2 flex flex-col justify-center ">
            <h1 className="text-lg lg:text-xl">
              {Math.round(temp)}°{units === "metric" ? "C" : "F"}
            </h1>
            <p className="text-md lg:text-lg">{`${Math.round(temp_min)}°${
              units === "metric" ? "C" : "F"
            } / ${Math.round(temp_max)}°${units === "metric" ? "C" : "F"}`}</p>
            <p className="text-md">
              {description.charAt(0).toUpperCase() + description.slice(1)}
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={iconUrlFromCode(icon)}
              alt="weather-icon"
              className="ms-auto h-fit w-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfos;
