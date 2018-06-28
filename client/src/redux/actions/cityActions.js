import * as types from "../constants/action-types";
import { getWeather } from "../../api/weatherApi/weatherApi";
import { getCities } from "../../api/googlePlacesApi/googlePlacesApi";

export const loadCitiesSuccess = cities => {
    return { type: types.LOAD_CITIES_SUCCESS, cities };
};

export const loadCities = partialCityName => {
    return (dispatch) => {
        return getCities(partialCityName).then(cityResponse => {
            dispatch(loadCitiesSuccess(cityResponse));
        }).catch(error => {
            throw (error);
        });
    }
};