import React from "react";
import WeatherIcons from "../assets/weather-icons/Rain_Day.svg";
import { iconUrlFromCode } from "../services/AppService";

const Forecast = ({ title, items }) => {
  console.log(items);
  return (
    <ul className="bg-base-800 p-2 rounded-12 flex flex-row">
      {items.map((item, index) => (
        <li className="p-3 flex flex-col text-center" key={index}>
          <p className="text-md text-base-200">{item.title}</p>
          <img src={iconUrlFromCode(item.icon)} alt="" width="150px" />
          <p className="text-base-100">{`${item.max}`}°C</p>
          <p className="text-base-400">{`${item.min}`}°C</p>
        </li>
      ))}
    </ul>
  );
};

export default Forecast;
