import React from "react";
import { mount, shallow } from "enzyme";
import { WeatherPage } from "./WeatherPage";
import Location from "../../models/Location";
import toast from "toastr";
import HourlyForecast from "../../models/HourlyForecast";
jest.mock("toastr");

describe("WeatherPage", () => {
    // setup mock properties
    let defaultProps = {
        weatherActions: { loadFiveDayForecasts: () => Promise.resolve(), loadHourlyForecasts: () => Promise.resolve(), loadCurrentLocationHourlyForecasts: () => Promise.resolve() },
        locationActions: { loadCurrentLocation: () => Promise.resolve(), updateCurrentLocation: () => Promise.resolve() },
        fiveDayForecasts: [],
        hourlyForecasts: [],
        currentLocation: new Location("city", "region", "country", "key"),
        isLoading: false
    },
        shallowComponent = null,
        mountedComponent = null;

    let shallowRender = (props = defaultProps) => { shallowComponent = shallow(<WeatherPage {...props} />); };

    describe("on load", () => {
        it("should render correctly", () => {
            shallowRender();
            expect(shallowComponent).toMatchSnapshot();
        });

        describe("is still loading", () => {
            it("should be blurred", () => {
                shallowRender({ ...defaultProps, isLoading: true });
                expect(shallowComponent.find(".blur").exists()).toEqual(true);
            });
        });

        describe("is not still loading", () => {
            it("should not be blurred", () => {
                shallowRender({ ...defaultProps, isLoading: false });
                expect(shallowComponent.find(".blur").exists()).toEqual(false);
            });
        });

        describe("loading background given location time", () => {
            describe("if location is daytime", () => {
                it("should load daytime background", () => {
                    let hourlyForecastProps = {
                        Temperature: { Value: 15 },
                        Wind: { Speed: { Value: 5 } },
                        IsDaylight: true
                    };

                    shallowRender({ ...defaultProps, hourlyForecasts: [new HourlyForecast(hourlyForecastProps)] });
                    expect(shallowComponent.find(".weather-body-day").exists()).toEqual(true);
                });
            });

            describe("if location is nighttime", () => {
                it("should load nighttime background", () => {
                    let hourlyForecastProps = {
                        Temperature: { Value: 15 },
                        Wind: { Speed: { Value: 5 } },
                        IsDaylight: false
                    };

                    shallowRender({ ...defaultProps, hourlyForecasts: [new HourlyForecast(hourlyForecastProps)] });
                    expect(shallowComponent.find(".weather-body-night").exists()).toEqual(true);
                });
            });

            describe("if location is undefined", () => {
                it("should load default background", () => {
                    shallowRender({ ...defaultProps, hourlyForecasts: [] });
                    expect(shallowComponent.find(".weather-body").exists()).toEqual(true);
                });
            });
        });
    });

    describe("on refresh", () => {
        let resolve = jest.fn(),
            reject = jest.fn();

        it("should trigger resolve on success", () => {
            shallowRender();
            shallowComponent.find("ReactPullToRefresh").prop("onRefresh")(resolve, reject).then(() => {
                expect(resolve).toHaveBeenCalled();
            });
        });

        it("should trigger reject on error", () => {
            let errorProps = { ...defaultProps };
            errorProps.weatherActions.loadFiveDayForecasts = () => Promise.reject("error");
            shallowRender(errorProps);
            shallowComponent.find("ReactPullToRefresh").prop("onRefresh")(resolve, reject).then(() => {
                expect(reject).toHaveBeenCalled();
            });
        });
    });

    describe("on location selected", () => {
        describe("if valid location is provided", () => {
            it("actions should be called to reload weather data", () => {
                // given
                let mockWeatherActions = {
                    loadFiveDayForecasts: jest.fn(),
                    loadHourlyForecasts: jest.fn(),
                    loadCurrentLocationHourlyForecasts: jest.fn()
                };
                let overrideProps = { ...defaultProps };
                overrideProps.weatherActions = mockWeatherActions;
                overrideProps.locationActions.updateCurrentLocation = jest.fn();

                // when
                shallowRender(overrideProps);
                shallowComponent.find("WithStyles(LocationSearch)")
                    .prop("onLocationSelected")({ value: "locationVal" });

                // then
                expect(mockWeatherActions.loadFiveDayForecasts).toHaveBeenCalled();
                expect(mockWeatherActions.loadCurrentLocationHourlyForecasts).toHaveBeenCalled();
            })

            it("should call toast error if unsuccessful", () => {
                // given
                let overrideProps = { ...defaultProps };
                overrideProps.locationActions.updateCurrentLocation = jest.fn(() => Promise.reject("bad"));
                toast.error = jest.fn();
                shallowRender(overrideProps);

                // when
                shallowComponent.find("WithStyles(LocationSearch)")
                    .prop("onLocationSelected")({ value: "locationVal" }).then(() => {
                        // then
                        expect(toast.error).toHaveBeenCalled();
                    });
            })
        });

        describe("if valid location is not provided", () => {
            it("actions should not be called to reload weather data", () => {
                // given
                let mockWeatherActions = {
                    loadFiveDayForecasts: jest.fn(),
                    loadHourlyForecasts: jest.fn(),
                    loadCurrentLocationHourlyForecasts: jest.fn()
                };
                let overrideProps = { ...defaultProps };
                overrideProps.weatherActions = mockWeatherActions;
                overrideProps.locationActions.updateCurrentLocation = jest.fn();
                shallowRender(overrideProps);

                // when
                shallowComponent.find("WithStyles(LocationSearch)")
                    .prop("onLocationSelected")(undefined);

                // then 
                expect(mockWeatherActions.loadFiveDayForecasts).toHaveBeenCalledTimes(1); // once called by constructor
                expect(mockWeatherActions.loadHourlyForecasts).toHaveBeenCalledTimes(0);
            })
        });
    });

}); 