import React from "react";
import { WeatherContextComp } from "../context/WeatherProvider";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";

const ShowWeather = () => {
  const { query, setQuery, weather } = WeatherContextComp();
  return (
    <>
      {weather && (
        <div className="bg-main-container p-3  flex flex-col justify-between align-middle text-white">
          <GeneralInfos weather={weather} />
          <WeatherDetails weather={weather} />
          <Forecast title="daily forecast" />
          {/* <Forecast title="hourly forecast"/> */}
        </div>
      )}
    </>
  );
};

export default ShowWeather;
