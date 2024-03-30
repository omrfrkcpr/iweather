import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowWeather from "../pages/ShowWeather";
import Main from "../pages/Main";
import NotFound from "../components/NotFound";

const AppRouter = () => {
  return (
    <Router className="font-sans">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/:cityName" element={<ShowWeather />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
