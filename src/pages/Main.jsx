import React from "react";
import Messages from "../components/Messages";
import Search from "../components/Search";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div className="center font-sans" style={{ height: "calc(100vh - 145px)" }}>
      <div className="center flex-col w-4/5">
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
