import React, { useContext } from "react";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import { WeatherContext } from "../context/WeatherProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../components/Logo";
import { House } from "@phosphor-icons/react";
import { FaCity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ShowWeather = () => {
  const { weather } = useContext(WeatherContext);
  const navigate = useNavigate();
  return (
    <div className="flex-col flex justify-start items-center h-screen">
      <div className="absolute top-3">
        <Logo />
      </div>
      <div className="absolute flex top-10 right-0 me-10 space-x-4">
        <House
          size={32}
          className="my-auto text-product
          cursor-pointer
          transition
          ease-out
          hover:scale-125"
          onClick={() => navigate("/")}
        />
        <FaCity
          size={32}
          className="text-product
          cursor-pointer
          transition
          ease-out
          hover:scale-125"
        />
      </div>
      <div className="max-[600]" style={{ marginTop: "5rem" }}>
        {weather && (
          <div className="gap-1 p-8 flex justify-center text-white flex-col md:flex-row">
            <GeneralInfos />
            <div className="p-1">
              <WeatherDetails />
              <Forecast />
            </div>
          </div>
        )}
        <ToastContainer
          style={{ maxWidth: "50%", margin: ".5rem .5rem .5rem auto" }}
        />
      </div>
    </div>
  );
};

export default ShowWeather;
