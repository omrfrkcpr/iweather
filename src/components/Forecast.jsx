import React from "react";
import { iconUrlFromCode } from "../services/weatherFormatters";

const Forecast = ({ item }) => {
  const days = item.daily;
  // console.log(days);
  return (
    <ul className="bg-base-800 p-1 md:p-2 mt-1 mb-1 rounded-12 flex flex-row">
      {days.map((day, index) => (
        <li className="p-2 md:p-3 flex flex-col text-center" key={index}>
          <p className="text-responsive text-base-200">{day.title}</p>
          <img src={iconUrlFromCode(day.icon)} alt="" width="100%" />
          <p className="text-base-100 text-responsive">
            {`${Math.round(day.max)}`}°{item.unit === "metric" ? "C" : "F"}
          </p>
          <p className="text-base-400 text-responsive">
            {`${Math.round(day.min)}`}°{item.unit === "metric" ? "C" : "F"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Forecast;
