import React from "react";
import Logo from "../components/Logo";
import Messages from "../components/Messages";
import Search from "../components/Search";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div className="p-4 flex justify-center items-center h-screen">
      <div className="absolute p-4 top-0 left-0 w-full">
        <Logo />
      </div>
      <div className="flex flex-col items-center w-full">
        <Messages />
        <Search />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Main;
