import React, { useContext, useState } from "react";
import { MagnifyingGlass, MapPin } from "@phosphor-icons/react";
import Loading from "../assets/Loading.svg";
import { WeatherContext } from "../context/WeatherProvider";
import { useNavigate } from "react-router-dom";
import { selectMatchingCities } from "../services/cityFormatters";
import { toastInfoNotify } from "../helpers/toastNotify";

const Search = () => {
  const { setQuery, setUnits, loading, error } = useContext(WeatherContext);
  const [city, setCity] = useState("");
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const [selectedUnit, setSelectedUnit] = useState("metric");

  const handleSearch = async (searchValue) => {
    // Determine the search value to use
    const queryValue = searchValue || city;

    if (queryValue) {
      await setCity(queryValue);

      // Set the query and units based on the search value
      setQuery({ q: queryValue });
      setUnits(selectedUnit);
      setOptions([]);
    }
  };

  const handleSearchChange = async (e) => {
    const searchValue = e.target.value;
    setCity(searchValue);
    if (searchValue) {
      const matchingCities = await selectMatchingCities(3, searchValue);
      setOptions(matchingCities);
    } else {
      setOptions([]);
    }
    // console.log("options", options);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat, lon });
        setUnits(selectedUnit);
        if (!error) {
          toastInfoNotify("Location found successfully");
          setTimeout(() => {
            navigate(`/${(lat, lon)}`);
          }, 2000);
        }
      });
    }
  };

  const handleCityOptionClick = async (selectedOption) => {
    await handleSearch(selectedOption);
  };

  const handleSearchClick = () => {
    handleSearch();
  };

  return (
    <>
      <div className="my-4 flex-col center w-4/5 max-w-[900px] relative">
        <div className="flex-row center space-x-2 w-auto relative ">
          <input
            type="text"
            id="searchInput"
            className="text-responsive px-3 py-2 w-[220px] md:w-[250px] lg:w-[350px] xl:w-[450px] shadow-xl bg-base-input text-white placeholder-base-400 rounded-8 focus:outline-none capitalize max-w-[500px]"
            placeholder="Search location"
            autoComplete="off"
            value={city}
            onChange={handleSearchChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearchClick();
            }}
          />
          {loading && (
            <img
              src={Loading}
              alt="loading-gif"
              className="absolute left-[175px] -top-1 md:left-[200px] md:top-0 lg:left-[300px] lg:top-1 xl:left-[400px] xl:top-0"
              loading="lazy"
            />
          )}

          <MagnifyingGlass
            className="icon-colored"
            size={28}
            onClick={handleSearchClick}
          />
          <MapPin
            size={28}
            className="icon-colored"
            onClick={handleLocationClick}
          />
          <div className="absolute top-[43px] md:top-[47px] lg:top-[55px] -left-2 bg inherit rounded-8 overflow-hidden text-white space-y-[1px] z-50">
            {options?.map((option, index) => (
              <div key={index}>
                <p
                  className="hover:text-product cursor-pointer text-responsive px-3 py-2 w-[220px] md:w-[250px] lg:w-[350px] xl:w-[450px] shadow-xl bg-base-500 capitalize max-w-[500px]"
                  onClick={() => handleCityOptionClick(option.cityName)}
                >
                  {`${option.cityName} - ${option.country}`}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex items-center space-x-2"
          style={{ fontSize: "1.2rem", marginTop: "1rem" }}
        >
          <p
            className={`icon-colorless ${
              selectedUnit === "metric" ? "text-white" : "text-product"
            }`}
            onClick={() => setSelectedUnit("metric")}
          >
            °C
          </p>
          <p className="text-product">|</p>
          <p
            className={` icon-colorless  ${
              selectedUnit === "imperial" ? "text-white" : "text-product"
            }`}
            onClick={() => setSelectedUnit("imperial")}
          >
            °F
          </p>
        </div>
      </div>
    </>
  );
};

export default Search;
