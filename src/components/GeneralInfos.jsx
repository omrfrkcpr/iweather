import React, { useContext } from "react";
import {
  formatToLocalTime,
  formatBackground,
  iconUrlFromCode,
} from "../services/weatherFormatters";
import { WeatherContext } from "../context/WeatherProvider";
import { useLocation } from "react-router-dom";
import { Backspace } from "@phosphor-icons/react";

const GeneralInfos = ({ item, handleRemoveListItem }) => {
  const { units, iconSize } = useContext(WeatherContext);
  const location = useLocation();

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
  } = item;

  return (
    <div className="bg-base-800 w-full p-2 my-1 text-responsive rounded-12 font-sans relative">
      {location.pathname === "/cities" && (
        <Backspace
          size={32}
          weight="fill"
          className="icon-remove absolute top-5 right-5 z-50 "
          onClick={() => handleRemoveListItem(dt)}
        />
      )}
      <div
        className="p-1 rounded-8 bg-cover h-full flex flex-col justify-between"
        style={{ backgroundImage: `url(${formatBackground(icon)})` }}
      >
        <div className="time-and-location me-4 ms-8 mb-4 mt-10">
          <div className="location flex flex-wrap flex-row gap-3 mb-3">
            <h1 className="mt-2 header-responsive">{`${name}, ${country}`}</h1>
            <img
              src={`https://flagsapi.com/${country}/flat/${iconSize}.png`}
              alt={`${country}-flag`}
              className="h-fit w-fit mt-1"
            />
          </div>
          <div className="time">
            <p className="text-responsive">{formatToLocalTime(dt, timezone)}</p>
          </div>
        </div>
        <div className="general-weather flex flex-row justify-between me-8 ms-8 mb-4 ">
          <div className="w-1/2 flex flex-col justify-center ">
            <h1 className="text-responsive">
              {Math.round(temp)}°{units === "metric" ? "C" : "F"}
            </h1>
            <p className="text-responsive">{`${Math.round(temp_min)}°${
              units === "metric" ? "C" : "F"
            } / ${Math.round(temp_max)}°${units === "metric" ? "C" : "F"}`}</p>
            <p className="text-responsive">
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
