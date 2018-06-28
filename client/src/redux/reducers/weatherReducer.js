import * as types from "../constants/action-types";

export default function weatherReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_WEATHER_SUCCESS:
            return action.weather;
        default:
            return state;
    }
}