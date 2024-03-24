import React from "react";
import { WeatherContextComp } from "../context/WeatherProvider";

const ShowWeather = () => {
  const { cities, setCities } = WeatherContextComp();
  return <div>ShowWeather</div>;
};

export default ShowWeather;
