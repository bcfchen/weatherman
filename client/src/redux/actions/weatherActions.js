import * as types from "../constants/action-types";
import { getWeather } from "../../api/weatherApi/weatherApi";

export const loadWeatherSuccess = weather => {
    return { type: types.LOAD_WEATHER_SUCCESS, weather };
};

export const loadWeather = text => {
    return (dispatch) => {
        return getWeather(text).then(weatherResponse => {
            dispatch(loadWeatherSuccess(weatherResponse));
        }).catch(error => {
            throw (error);
        });
    }
};