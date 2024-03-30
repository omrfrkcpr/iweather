import React, { useContext } from "react";
import Logo from "../components/Logo";
import Messages from "../components/Messages";
import Search from "../components/Search";
import { ToastContainer } from "react-toastify";
import { FaCity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { WeatherContext } from "../context/WeatherProvider";
import { House } from "@phosphor-icons/react";

const Main = () => {
  const { setQuery, iconSize } = useContext(WeatherContext);
  const navigate = useNavigate();

  const handleGoHome = () => {
    setQuery({ q: "" });
    navigate("/");
  };

  return (
    <div className="p-4 flex justify-center items-center h-screen">
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
      <div className="flex flex-col items-center w-4/5">
        <Messages />
        <Search />
      </div>
      <ToastContainer
        style={{ maxWidth: "50%", margin: ".5rem .5rem .5rem auto" }}
      />
    </div>
  );
};

export default Main;
