import React from "react";
import { shallow } from "enzyme";
import CurrentWeatherIndicator from "./CurrentWeatherIndicator";
import HourlyForecast from "../../models/HourlyForecast";

describe("<CurrentWeatherIndicator/>", () => {
    let defaultWeatherProps = {
        Temperature: {
            Value: 15
        },
        Wind: {
            Speed: {
                Value: 6
            }
        },
        IconPhrase: "Sunny"
    };
    let defaultProps = {
        isLoading: true,
        currentHourlyForecast: new HourlyForecast(defaultWeatherProps)
    };

    let component = null;
    let render = (props = defaultProps) => {
        component = shallow(<CurrentWeatherIndicator {...props} />)
    }

    describe("on page load", () => {
        it("should render correctly with default properties", () => {
            render();
            expect(component).toMatchSnapshot();
        });

        describe("contains current forecast property", () => {
            beforeEach(() => {
                render();
            });
            it("should display the temperature correctly", () => {
                expect(component.find(".current-temperature").dive().dive().text()).toEqual("15");
            });

            it("should display the weather description correctly", () => {
                expect(component.find(".weather-description").dive().dive().text()).toEqual("Sunny");
            });
        });

        describe("does not contain current forecast property", () => {
            beforeEach(() => {
                render({ isLoading: true, currentHourlyForecast: null });
            });
            it("should not display the temperature", () => {
                expect(component.find(".current-temperature").dive().dive().text()).toEqual("");
            });

            it("should not display the weather description", () => {
                expect(component.find(".weather-description").dive().dive().text()).toEqual("");
            });
        });
    });
});