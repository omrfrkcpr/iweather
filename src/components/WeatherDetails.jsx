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
  const { units } = useContext(WeatherContext);

  const { daily, feels_like, humidity, speed } = item;

  return (
    <ul className="bg-base-800 py-2 rounded-12 font-sans">
      <li className="justify-between px-1 py-2 rounded-t-12 ">
        <div className="py-2 flex flex-row justify-between mx-3 border-b-2 border-base-700 leading-10">
          <div className="flex flex-row gap-3">
            <ThermometerSimple size={32} className="text-base-500" />
            <p className="text-base-200">Thermal sensation</p>
          </div>
          <div className="me-3 text-base-100">
            <p>
              {Math.trunc(feels_like)}°{units === "metric" ? "C" : "F"}
            </p>
          </div>
        </div>
      </li>
      <li className="justify-between px-1 py-2 ">
        <div className="py-2 flex flex-row justify-between mx-3 border-b-2 border-base-700 leading-10">
          <div className="flex flex-row gap-3">
            <CloudRain size={32} className="text-base-500" />
            <p className="text-base-200">Probability of rain</p>
          </div>

          <div className="me-3 text-base-100">
            <p>{daily[0].pop}%</p>
          </div>
        </div>
      </li>
      <li className="justify-between px-1 py-2 ">
        <div className="py-2 flex flex-row justify-between mx-3 border-b-2 border-base-700 leading-10">
          <div className="flex flex-row gap-3">
            <Wind size={32} className="text-base-500" />
            <p className="text-base-200">Wind speed</p>
          </div>

          <div className="me-3 text-base-100">
            <p>{Math.trunc(speed)} km/h</p>
          </div>
        </div>
      </li>
      <li className="justify-between px-1 py-2  ">
        <div className="py-2 flex flex-row justify-between mx-3 border-b-2 border-base-700 leading-10">
          <div className="flex flex-row gap-3">
            <Drop size={32} className="text-base-500" />
            <p className="text-base-200">Air humidity</p>
          </div>

          <div className="me-3 text-base-100">
            <p>{humidity}%</p>
          </div>
        </div>
      </li>
      <li className="justify-between px-1 py-2  rounded-b-12">
        <div className="pt-1 flex flex-row justify-between mx-3 leading-10 ">
          <div className="flex flex-row gap-3">
            <SunDim size={32} className="text-base-500" />
            <p className="text-base-200">UV Index</p>
          </div>
          <div className="me-3 text-base-100">
            <p>{daily[0].uvi}</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default WeatherDetails;
