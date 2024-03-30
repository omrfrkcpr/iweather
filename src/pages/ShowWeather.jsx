import React, { useContext, useEffect, useState } from "react";
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
  const { weather, iconSize, setQuery } = useContext(WeatherContext);
  const navigate = useNavigate();

  const handleGoHome = () => {
    setQuery({ q: "" });
    navigate("/");
  };

  return (
    <div className="flex-col flex justify-start items-center h-screen">
      <div className="absolute top-3">
        <Logo />
      </div>
      <div className="absolute flex space-x-4" style={{ top: "120px" }}>
        <House
          size={iconSize}
          className=" text-product
          cursor-pointer
          transition
          ease-out
          hover:scale-125 border-b-2 border-product"
          onClick={handleGoHome}
        />
        <FaCity
          size={iconSize}
          className="text-product
          cursor-pointer
          transition
          ease-out
          hover:scale-125 border-b-2 border-product"
          onClick={() => navigate("/cities")}
        />
      </div>
      <div className="max-[600]" style={{ marginTop: "10rem" }}>
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
