import * as types from "../constants/action-types";
import { getWeather, getWeatherByLatLong } from "../../api/weatherApi/weatherApi";
import { getCurrentCityName } from "../../api/locationApi/locationApi";

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

export const loadCurrentLocationWeather = () => {
    return (dispatch) => {
        return getCurrentCityName().then(locationStr => {
            return getWeather(locationStr);
        }).then(weatherResponse => {
            dispatch(loadWeatherSuccess(weatherResponse));
        })
    };
}