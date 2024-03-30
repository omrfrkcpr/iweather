import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "./Search";
import { WeatherContext } from "../context/WeatherProvider";

// Mock WeatherContext
const mockWeatherContext = {
  setQuery: jest.fn(),
  setUnits: jest.fn(),
  loading: false,
  error: null,
};

test("renders search input and buttons", () => {
  render(
    <WeatherContext.Provider value={mockWeatherContext}>
      <Search />
    </WeatherContext.Provider>
  );

  const searchInput = screen.getByPlaceholderText("Search location");
  expect(searchInput).toBeInTheDocument();

  const searchButton = screen.getByRole("button", {
    name: "Magnifying glass icon",
  });
  expect(searchButton).toBeInTheDocument();

  const locationButton = screen.getByRole("button", { name: "Map pin icon" });
  expect(locationButton).toBeInTheDocument();
});

test("updates city state on input change", () => {
  render(
    <WeatherContext.Provider value={mockWeatherContext}>
      <Search />
    </WeatherContext.Provider>
  );

  const searchInput = screen.getByPlaceholderText("Search location");
  fireEvent.change(searchInput, { target: { value: "Istanbul" } });
  expect(searchInput).toHaveValue("Istanbul");
});

test("calls setQuery and setUnits when search button is clicked", async () => {
  render(
    <WeatherContext.Provider value={mockWeatherContext}>
      <Search />
    </WeatherContext.Provider>
  );

  const searchInput = screen.getByPlaceholderText("Search location");
  fireEvent.change(searchInput, { target: { value: "Istanbul" } });

  const searchButton = screen.getByRole("button", {
    name: "Magnifying glass icon",
  });
  fireEvent.click(searchButton);

  await waitFor(() => {
    expect(mockWeatherContext.setQuery).toHaveBeenCalledWith({ q: "Istanbul" });
  });

  await waitFor(() => {
    expect(mockWeatherContext.setUnits).toHaveBeenCalledWith("metric");
  });
});
