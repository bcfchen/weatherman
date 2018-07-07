import React from "react";
import { shallow } from "enzyme";
import WeatherForecastItem from "./WeatherForecastItem";
import * as mappings from "./WeatherIconMappings";
import DailyForecast from "../../models/DailyForecast";
jest.mock("./WeatherIconMappings");

describe("<WeatherForecastItem/>", () => {
    let component = null,
        forecastProps = {
            Temperature: {
                Maximum: { Value: 15 },
                Minimum: { Value: 9 }
            },
            Day: { IconPhrase: "Sunny" }
        },
        defaultProps = {
            forecastItem: new DailyForecast(forecastProps)
        };

    let render = (props = defaultProps) => {
        component = shallow(<WeatherForecastItem {...props} />);
    };
    beforeEach(() => {
        mappings.getWeatherIcon.mockImplementation(() => <div className="mock-icon">mock icon</div>);
        render();
    });

    describe("on page load", () => {
        it("should render correctly", () => {
            expect(component).toMatchSnapshot();
        });

        it("should assign correct low temperature", () => {
            expect(component.find(".forecast-low").dive().dive().text()).toEqual("9");
        });

        it("should display correct icon component", () => {
            expect(component.find(".mock-icon").exists()).toEqual(true);
        });
    });
});
