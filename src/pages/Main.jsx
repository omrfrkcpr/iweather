import React from "react";
import { WeatherContextComp } from "../context/WeatherProvider";
import Logo from "../components/Logo";
import Messages from "../components/Messages";
import Search from "../components/Search";

const Main = () => {
  const { cities, setCities } = WeatherContextComp();
  return (
    <div className="bg-main-container mx-auto max-w-screen-lg mt-4 py-5 px-32 h-fit shadow-wl-shadgray flex flex-col justify-between align-middle">
      <Logo />
      <Messages />
      <Search />
    </div>
  );
};

export default Main;
