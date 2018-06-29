import * as types from "../constants/action-types";
import initialState from './initialState';

export default function weatherPageReducer(state = initialState.ui.weatherPage, action) {
    let newState;
    switch (action.type) {
        case types.LOAD_WEATHER_SUCCESS:
            newState = { ...state };
            newState.weather = Object.assign({}, action.weather);
            break;
        case types.GET_LOCATIONS_SUCCESS:
            newState = { ...state };
            newState.locations = action.locations.slice();
            break;
        default:
            break;
    }
    return newState || state;
}