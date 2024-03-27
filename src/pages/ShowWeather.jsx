import React, { useContext } from "react";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import bgImg from "../assets/Background.svg";
import { WeatherContext } from "../context/WeatherProvider";

const ShowWeather = () => {
  const { weather } = useContext(WeatherContext);
  return (
    <>
      {weather && (
        <div
          className="h-screen gap-1 p-3 flex flex-col justify-start align-middle text-white"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <GeneralInfos weather={weather} />
          <WeatherDetails weather={weather} />
          <Forecast title="daily forecast" items={weather.daily} />
          {/* <Forecast title="hourly forecast"/> items={weather.hourly}*/}
        </div>
      )}
    </>
  );
};

export default ShowWeather;
