import * as types from "../constants/action-types";

export default function weatherPageReducer(state = {}, action) {
    switch (action.type) {
        case types.LOAD_WEATHER_SUCCESS:
            let weather = Object.assign({}, action.weather);
            return { ...state, ...weather };
        case types.LOAD_CITIES_SUCCESS:
            let cities = action.cities.slice();
            return { ...state, cities }
        default:
            return state;
    }
}