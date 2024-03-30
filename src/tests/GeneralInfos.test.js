import React from "react";
import { render, screen } from "@testing-library/react";
import GeneralInfos from "./GeneralInfos";
import { WeatherContext } from "../context/WeatherProvider";

const mockWeatherContext = {
  weather: {
    icon: "01d",
    dt: 1615315200,
    timezone: "Europe/Istanbul",
    name: "Istanbul",
    country: "TR",
    description: "clear sky",
    temp: 20,
    temp_min: 18,
    temp_max: 22,
  },
  units: "metric",
};

test("renders general weather information with correct data", () => {
  render(
    <WeatherContext.Provider value={mockWeatherContext}>
      <GeneralInfos />
    </WeatherContext.Provider>
  );

  // Check if general weather information is rendered with correct data
  expect(screen.getByText("Istanbul, TR")).toBeInTheDocument();
  expect(screen.getByText("20°C")).toBeInTheDocument();
  expect(screen.getByText("18°C / 22°C")).toBeInTheDocument();
  expect(screen.getByText("Clear sky")).toBeInTheDocument();
});
