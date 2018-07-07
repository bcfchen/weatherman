import weatherPageReducer from "./weatherPageReducer";
import * as types from "../constants/action-types";

describe("weatherPageReducer", () => {
    let state = null;
    beforeEach(() => {
        state = {};
    });

    describe("on action type of LOAD_FIVE_DAY_FORECAST_SUCCESS", () => {
        it("should return state with updated fiveDayForecasts", () => {
            let action = {
                type: types.LOAD_FIVE_DAY_FORECAST_SUCCESS,
                fiveDayForecasts: "five day forecasts"
            };
            let updatedState = weatherPageReducer(state, action);
            expect(updatedState).toEqual({ fiveDayForecasts: "five day forecasts" });
        });
    });

    describe("on action type of LOAD_HOURLY_FORECASTS_SUCCESS", () => {
        it("should return state with updated hourlyForecasts", () => {
            let action = {
                type: types.LOAD_HOURLY_FORECASTS_SUCCESS,
                hourlyForecasts: "hourly forecasts"
            };
            let updatedState = weatherPageReducer(state, action);
            expect(updatedState).toEqual({ hourlyForecasts: "hourly forecasts" });
        });
    });

    describe("on action type of GET_LOCATIONS_SUCCESS", () => {
        it("should return state with updated locations", () => {
            let action = {
                type: types.GET_LOCATIONS_SUCCESS,
                locations: "locations"
            };
            let updatedState = weatherPageReducer(state, action);
            expect(updatedState).toEqual({ locations: "locations" });
        });
    });

    describe("on action type of GET_CURRENT_LOCATION_SUCCESS", () => {
        it("should return state with updated currentLocation", () => {
            let action = {
                type: types.GET_CURRENT_LOCATION_SUCCESS,
                currentLocation: "current location"
            };
            let updatedState = weatherPageReducer(state, action);
            expect(updatedState).toEqual({ currentLocation: "current location" });
        });
    });

    describe("on action type of CURRENT_LOCATION_UPDATED", () => {
        it("should return state with updated newCurrentLocation", () => {
            let action = {
                type: types.CURRENT_LOCATION_UPDATED,
                newCurrentLocation: "new current location"
            };
            let updatedState = weatherPageReducer(state, action);
            expect(updatedState).toEqual({ currentLocation: "new current location" });
        });
    });

    describe("on action type of other", () => {
        it("should return original state", () => {
            let action = {
                type: "some random type",
                data: {}
            }
            let updatedState = weatherPageReducer(state, action);
            expect(updatedState).toEqual(state);
        });
    });
});