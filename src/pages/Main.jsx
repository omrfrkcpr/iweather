import React from "react";
import Messages from "../components/Messages";
import Search from "../components/Search";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div
      className="center relative font-sans"
      style={{ height: "calc(100vh - 172px)" }}
    >
      <div className="center flex-col w-4/5">
        <Messages />
        <Search />
      </div>
      <Footer />
      <ToastContainer
        style={{ maxWidth: "50%", margin: ".5rem .5rem .5rem auto" }}
      />
    </div>
  );
};

export default Main;
