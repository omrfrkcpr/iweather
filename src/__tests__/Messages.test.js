import React from "react";
import { render, screen } from "@testing-library/react";
import Messages from "../components/Messages";

test("renders messages with correct content", () => {
  render(<Messages />);
  const titleElement = screen.getByText("Welcome to");
  const spanElement = screen.getByText("TypeWeather");
  const descriptionElement = screen.getByText(
    "Choose a location to see the weather forecast"
  );

  expect(titleElement).toBeInTheDocument();
  expect(spanElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
