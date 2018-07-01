import * as types from "../constants/action-types";
import initialState from './initialState';

export default function weatherPageReducer(state = initialState.ui.weatherPage, action) {
    let newState;
    switch (action.type) {
        case types.LOAD_FIVE_DAY_FORECAST_SUCCESS:
            newState = { ...state };
            newState.fiveDayForecasts = action.fiveDayForecasts;
            break;
        case types.LOAD_HOURLY_FORECASTS_SUCCESS:
            newState = { ...state };
            newState.hourlyForecasts = action.hourlyForecasts;
            break;
        case types.GET_LOCATIONS_SUCCESS:
            newState = { ...state };
            newState.locations = action.locations.slice();
            break;
        case types.GET_CURRENT_LOCATION_SUCCESS:
            newState = { ...state };
            newState.currentLocation = action.currentLocation;
            break;
        case types.CURRENT_LOCATION_UPDATED:
            newState = { ...state };
            newState.currentLocation = action.newCurrentLocation;
            break;
        default:
            break;
    }
    return newState || state;
}