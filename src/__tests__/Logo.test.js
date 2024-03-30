import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "../components/Logo";

describe("Logo component", () => {
  test("renders logo with correct initial width", () => {
    render(<Logo />);
    const logoElement = screen.getByAltText("iweather-logo");
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute("src", "../assets/IWeatherLogo.svg");
    expect(logoElement).toHaveStyle("width: 300px");
  });

  test("updates logo width on window resize", () => {
    // Mock window resize
    global.innerWidth = 600;
    global.dispatchEvent(new Event("resize"));

    render(<Logo />);
    const logoElement = screen.getByAltText("iweather-logo");
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute("src", "../assets/IWeatherLogo.svg");
    expect(logoElement).toHaveStyle("width: 350px");
  });
});
