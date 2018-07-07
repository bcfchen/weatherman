import React from "react";
import { shallow } from "enzyme";
import WeatherDetails from "./WeatherDetails";
import HourlyForecast from "../../models/HourlyForecast";

describe("<WeatherDetails/>", () => {
    let defaultWeatherProps = {
        Temperature: {
            Value: 15
        },
        Wind: {
            Speed: {
                Value: 6
            }
        },
        UVIndex: 5,
        RelativeHumidity: 50
    };
    let defaultProps = {
        isLoading: true,
        currentHourlyForecast: new HourlyForecast(defaultWeatherProps)
    };
    let component = null;

    let render = (props = defaultProps) => {
        component = shallow(<WeatherDetails {...props} />);
    };

    describe("on page load", () => {
        it("should render correctly", () => {
            render();
            expect(component).toMatchSnapshot();
        });

        describe("if current hourly forecast exists", () => {
            beforeEach(() => {
                render();
            });

            it("should display humidity, wind speed, and UV index", () => {
                expect(component.find(".humidity-value").dive().dive().text()).toEqual("50 %");
                expect(component.find(".wind-speed-value").dive().dive().text()).toEqual("6 km/h");
                expect(component.find(".uv-index-value").dive().dive().text()).toEqual("5");
            });
        });
    });


    describe("if current hourly forecast does not exist", () => {
        beforeEach(() => {
            render({ isLoading: true, currentHourlyForecast: null });
        });

        it("should display humidity, wind speed, and UV index", () => {
            expect(component.find(".humidity-value").dive().dive().text()).toEqual("");
            expect(component.find(".wind-speed-value").dive().dive().text()).toEqual("");
            expect(component.find(".uv-index-value").dive().dive().text()).toEqual("");
        });
    });
});
