import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherDetails from "./WeatherDetails";
import { WeatherContext } from "../context/WeatherProvider";

// Mock WeatherContext
const mockWeatherContext = {
  weather: {
    daily: [{ pop: 10, uvi: 5 }],
    feels_like: 20,
    humidity: 50,
    speed: 10,
  },
  units: "metric",
};

test("renders weather details with correct data", () => {
  render(
    <WeatherContext.Provider value={mockWeatherContext}>
      <WeatherDetails />
    </WeatherContext.Provider>
  );

  // Check if each weather detail item is rendered with correct data
  expect(screen.getByText("Thermal sensation")).toBeInTheDocument();
  expect(screen.getByText("20°C")).toBeInTheDocument(); // Feels like temperature
  expect(screen.getByText("Probability of rain")).toBeInTheDocument();
  expect(screen.getByText("10%")).toBeInTheDocument(); // Probability of rain
  expect(screen.getByText("Wind speed")).toBeInTheDocument();
  expect(screen.getByText("10 km/h")).toBeInTheDocument(); // Wind speed
  expect(screen.getByText("Air humidity")).toBeInTheDocument();
  expect(screen.getByText("50%")).toBeInTheDocument(); // Air humidity
  expect(screen.getByText("UV Index")).toBeInTheDocument();
  expect(screen.getByText("5")).toBeInTheDocument(); // UV Index
});
