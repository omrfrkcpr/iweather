import React from "react";
import Messages from "../components/Messages";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="center relative" style={{ height: "calc(100vh - 172px)" }}>
      <div className="center flex-col w-[900px]">
        <Messages />
        <Search />
      </div>
      <Footer />

    </div>
  );
};

export default Home;
