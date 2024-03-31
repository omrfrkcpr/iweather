import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import ShowWeather from "../pages/ShowWeather";
import Main from "../pages/Main";
import NotFound from "../components/NotFound";
import WeatherLists from "../pages/WeatherLists";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <Router className="font-sans">
      <Navbar />
      <Outlet />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/:cityName" element={<ShowWeather />} />
        <Route path="/cities" element={<WeatherLists />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
