import React, { useContext, useState } from "react";
import { MagnifyingGlass, MapPin } from "@phosphor-icons/react";
import Loading from "../assets/Loading.svg";
import { WeatherContext } from "../context/WeatherProvider";
// import { AsyncPaginate } from "react-select-async-paginate";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Search = () => {
  const { setQuery, setUnits, loading, error } = useContext(WeatherContext);
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const [selectedUnit, setSelectedUnit] = useState("metric");

  const handleSearchClick = () => {
    if (city) {
      setQuery({ q: city });
      setUnits(selectedUnit);
      if (!error) {
        setTimeout(() => {
          navigate(`/${city}`);
        }, 2000);
      }
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
        setUnits(selectedUnit);
        if (!error) {
          setTimeout(() => {
            navigate(`/${(lat, lon)}`);
          }, 2000);
        }
      });
    }
  };

  return (
    <div className="my-6 flex flex-col justify-center items-center w-full">
      <div
        className=" flex flex-row items-center justify-center space-x-2 w-full  relative "
        style={{ maxWidth: "700px" }}
      >
        <input
          type="text"
          className="text-cl font-light px-3 py-2 w-full shadow-xl sm:text-md bg-base-input text-white rounded-8 focus:outline-none capitalize "
          style={{ maxWidth: "600px" }}
          placeholder="Search location"
          autofocus
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearchClick();
          }}
        />
        {loading && (
          <img
            src={Loading}
            alt="loading-gif"
            className="absolute right-20 lg:right-17"
          />
        )}

        <MagnifyingGlass
          className="text-product cursor-pointer transition ease-out hover:scale-125 "
          size={32}
          onClick={handleSearchClick}
        />
        <MapPin
          size={32}
          className="text-product cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
      <div
        className="flex items-center space-x-2"
        style={{ fontSize: "1.2rem", marginTop: "1rem" }}
      >
        <h1
          className={` cursor-pointer transition ease-out hover:scale-125 ${
            selectedUnit === "metric" ? "text-white" : "text-product"
          }`}
          onClick={() => setSelectedUnit("metric")}
        >
          °C
        </h1>
        <h1 className="text-product">|</h1>
        <h1
          className={` cursor-pointer transition ease-out hover:scale-125 ${
            selectedUnit === "imperial" ? "text-white" : "text-product"
          }`}
          onClick={() => setSelectedUnit("imperial")}
        >
          °F
        </h1>
      </div>
    </div>
  );
};

export default Search;
