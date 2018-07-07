import * as types from "../constants/action-types";
import * as actions from "./weatherActions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as weatherApi from "../../api/weatherApi/weatherApi";
import * as locationApi from "../../api/locationApi/locationApi";
import Location from "../../models/Location";
import DailyForecast from "../../models/DailyForecast";
import HourlyForecast from "../../models/HourlyForecast";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
jest.mock("../../api/locationApi/locationApi");
jest.mock("../../api/weatherApi/weatherApi");

describe("weather actions", () => {
    let currentLocation = new Location(),
        store = null,
        fiveDayForecasts = ["fake daily forecast"],
        hourlyForecasts = ["fake hourly forecast"];

    beforeEach(() => {
        weatherApi.getFiveDayForecasts.mockImplementation(() => Promise.resolve(fiveDayForecasts));
        weatherApi.getHourlyForecasts.mockImplementation(() => Promise.resolve(hourlyForecasts));
        locationApi.getCurrentLocation.mockImplementation(() => Promise.resolve(currentLocation));
        store = mockStore();
    });

    describe("loadFiveDayForecasts", () => {
        describe("given a location", () => {
            it("creates LOAD_FIVE_DAY_FORECAST_SUCCESS action", () => {
                let expectedActions = [{
                    type: types.LOAD_FIVE_DAY_FORECAST_SUCCESS,
                    fiveDayForecasts
                }];
                store.dispatch(actions.loadFiveDayForecasts("locationKey")).then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
            });
        });

        describe("not given a location", () => {
            it("creates a LOAD_FIVE_DAY_FORECAST_SUCCESS action", () => {
                let expectedActions = [{
                    type: types.LOAD_FIVE_DAY_FORECAST_SUCCESS,
                    fiveDayForecasts
                }];
                store.dispatch(actions.loadFiveDayForecasts()).then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
            });
        });
    });

    describe("loadCurrentLocationHourlyForecasts", () => {
        it("creates a LOAD_HOURLY_FORECASTS_SUCCESS action", () => {
            let expectedActions = [{
                type: types.LOAD_HOURLY_FORECASTS_SUCCESS,
                hourlyForecasts
            }];

            store.dispatch(actions.loadCurrentLocationHourlyForecasts()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe("loadHourlyForecasts", () => {
        it("creates a LOAD_HOURLY_FORECASTS_SUCCESS action", () => {
            let expectedActions = [{
                type: types.LOAD_HOURLY_FORECASTS_SUCCESS,
                hourlyForecasts
            }];
            store.dispatch(actions.loadHourlyForecasts()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});