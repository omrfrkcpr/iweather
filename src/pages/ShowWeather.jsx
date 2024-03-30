import React, { useContext } from "react";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import { WeatherContext } from "../context/WeatherProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowWeather = () => {
  const { weather } = useContext(WeatherContext);
  return (
    <>
      {weather && (
        <div className="gap-1 p-3 flex justify-start align-middle text-white flex-col md:flex-row">
          <GeneralInfos />
          <div>
            <WeatherDetails />
            <Forecast />
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default ShowWeather;
