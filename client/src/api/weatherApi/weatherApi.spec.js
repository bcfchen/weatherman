import * as weatherApi from "./weatherApi";
import baseApi from "../baseApi/baseApi";
import HourlyForecast from "../../models/HourlyForecast";
import DailyForecast from "../../models/DailyForecast";
jest.mock("../baseApi/baseApi");

describe("weatherApi", () => {
    // mock data setup
    let hourlyForecastData = {
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

    let dailyForecastData = {
        Temperature: {
            Maximum: { Value: 15 },
            Minimum: { Value: 9 }
        },
        Day: { IconPhrase: "Sunny" }
    };

    let locationKey = 123;

    describe("getHourlyForecasts", () => {
        beforeEach(() => {
            baseApi.get.mockImplementation(() => Promise.resolve({
                data: [hourlyForecastData]
            }));
        });

        it("should return hourly forecast", () => {
            weatherApi.getHourlyForecasts(locationKey).then(response => {
                expect(response).toEqual([new HourlyForecast(hourlyForecastData)]);
            });
        });
    });

    describe("getFiveDayForecasts", () => {
        beforeEach(() => {
            baseApi.get.mockImplementation(() => Promise.resolve({
                data: {
                    DailyForecasts: [dailyForecastData]
                }
            }));
        });

        it("should return five day forecasts", () => {
            weatherApi.getFiveDayForecasts(locationKey).then(response => {
                expect(response).toEqual([new DailyForecast(dailyForecastData)]);
            });
        });
    });
});