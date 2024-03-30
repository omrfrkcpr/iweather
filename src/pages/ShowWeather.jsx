import React, { useContext } from "react";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import { WeatherContext } from "../context/WeatherProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../components/Logo";

const ShowWeather = () => {
  const { weather } = useContext(WeatherContext);
  return (
    <div className="absolute inset-0 flex items-top justify-center p-4 max-[600]">
      <div>
        <Logo />
        {weather && (
          <div className="gap-1 p-3 flex justify-start align-middle text-white flex-col md:flex-row  ">
            <GeneralInfos />
            <div className="p-1">
              <WeatherDetails />
              <Forecast />
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default ShowWeather;
