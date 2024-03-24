import React from "react";
import { CitiesContextComp } from "../context/CitiesProvider";

const ShowWeather = () => {
  const { cities, setCities } = CitiesContextComp();
  return <div>ShowWeather</div>;
};

export default ShowWeather;
