import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";
import Logo from "../components/Logo";
import Messages from "../components/Messages";
import Search from "../components/Search";

const Main = () => {
  const { query, setQuery } = useContext(WeatherContext);
  return (
    <div className="bg-main-container py-5 flex justify-center items-center h-screen">
      <div className="absolute top-0 left-0 w-full">
        <Logo />
      </div>
      <div className="flex flex-col items-center w-full">
        <Messages />
        <Search />
      </div>
    </div>
  );
};

export default Main;
