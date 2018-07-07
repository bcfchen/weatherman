import React from "react";
import { shallow } from "enzyme";
import WeatherForecastList from "./WeatherForecastList";
import DailyForecast from "../../models/DailyForecast";

describe("<WeatherForecastList/>", () => {
    let component = null,
        forecastProps = {
            Temperature: {
                Maximum: { Value: 15 },
                Minimum: { Value: 9 }
            },
            Day: { IconPhrase: "Sunny" }
        },
        defaultProps = {
            weatherForecasts: [new DailyForecast(forecastProps)]
        };
    let render = (props = defaultProps) => {
        component = shallow(<WeatherForecastList {...props} />);
    };
    beforeEach(() => render());

    describe("on page load", () => {
        it("should render correctly", () => {
            expect(component).toMatchSnapshot();
        });

        it("should contain the correct number of WeatherForecastItem components", () => {
            expect(component.find("WeatherForecastItem")).toHaveLength(1);
        });
    });
});