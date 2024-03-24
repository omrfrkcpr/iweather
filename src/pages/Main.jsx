import React from "react";
import { WeatherContextComp } from "../context/WeatherProvider";

const Main = () => {
  const { cities, setCities } = WeatherContextComp();
  return <div></div>;
};

export default Main;
