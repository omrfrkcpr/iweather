import React from "react";
import { render, screen } from "@testing-library/react";
import Forecast from "../components/Forecast";
import { WeatherContext } from "../context/WeatherProvider";

const mockWeatherContext = {
  weather: {
    daily: [
      { title: "Monday", icon: "01d", max: 20, min: 15 },
      { title: "Tuesday", icon: "02d", max: 22, min: 17 },
    ],
  },
  units: "metric",
};

test("renders forecast items with correct data", () => {
  render(
    <WeatherContext.Provider value={mockWeatherContext}>
      <Forecast />
    </WeatherContext.Provider>
  );

  // Check if each forecast item is rendered with correct data
  expect(screen.getByText("Monday")).toBeInTheDocument();
  expect(screen.getByText("Tuesday")).toBeInTheDocument();
  expect(screen.getByAltText("01d")).toBeInTheDocument();
  expect(screen.getByAltText("02d")).toBeInTheDocument();
  expect(screen.getByText("20°C")).toBeInTheDocument();
  expect(screen.getByText("15°C")).toBeInTheDocument();
  expect(screen.getByText("22°C")).toBeInTheDocument();
  expect(screen.getByText("17°C")).toBeInTheDocument();
});
