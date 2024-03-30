import React from "react";
import Logo from "../components/Logo";
import Messages from "../components/Messages";
import Search from "../components/Search";
import { ToastContainer } from "react-toastify";
import { FaCity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex justify-center items-center h-screen">
      <div className="absolute top-3">
        <Logo />
      </div>
      <div className="absolute top-10 right-10">
        <FaCity
          size={32}
          className="text-product
          cursor-pointer
          transition
          ease-out
          hover:scale-125"
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
