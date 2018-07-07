import React from "react";
import { getWeatherIcon } from "./WeatherIconMappings";
import Sunny from "react-icons/lib/ti/weather-sunny";
import Shower from "react-icons/lib/ti/weather-shower";
import Cloudy from "react-icons/lib/ti/weather-cloudy";
import Snow from "react-icons/lib/ti/weather-snow";
jest.mock("react-icons/lib/ti/weather-sunny", () => "sunny");
jest.mock("react-icons/lib/ti/weather-shower", () => "shower");
jest.mock("react-icons/lib/ti/weather-cloudy", () => "cloudy");
jest.mock("react-icons/lib/ti/weather-snow", () => "snow");

describe("WeatherIconMappings", () => {
    describe("getWeatherIcon", () => {
        it("should return Sunny when description is sunny", () => {
            let retrievedIcon = getWeatherIcon("Sunny");
            expect(retrievedIcon).toEqual(<sunny />);
        });

        it("should return Sunny by default when description is not mapped", () => {
            let retrievedIcon = getWeatherIcon("random");
            expect(retrievedIcon).toEqual(<sunny />);
        });

        it("should return shower when description is downpour", () => {
            let retrievedIcon = getWeatherIcon("downpour");
            expect(retrievedIcon).toEqual(<shower />);
        });

        it("should return shower when description is rain", () => {
            let retrievedIcon = getWeatherIcon("rain");
            expect(retrievedIcon).toEqual(<shower />);
        });

        it("should return shower when description is stormy", () => {
            let retrievedIcon = getWeatherIcon("stormy");
            expect(retrievedIcon).toEqual(<shower />);
        });

        it("should return cloudy when description is cloudy", () => {
            let retrievedIcon = getWeatherIcon("cloudy");
            expect(retrievedIcon).toEqual(<cloudy />);
        });

        it("should return snow when description is snow", () => {
            let retrievedIcon = getWeatherIcon("snow");
            expect(retrievedIcon).toEqual(<snow />);
        });
    });
});