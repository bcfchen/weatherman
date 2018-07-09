import * as types from "../constants/action-types";
import { getFiveDayForecasts, getHourlyForecasts } from "../../api/weatherApi/weatherApi";
import { getCurrentLocation } from "../../api/locationApi/locationApi";

export const loadWeatherSuccess = fiveDayForecasts => {
    return { type: types.LOAD_FIVE_DAY_FORECAST_SUCCESS, fiveDayForecasts };
};

export const loadHourlyForecastsSuccess = hourlyForecasts => {
    return { type: types.LOAD_HOURLY_FORECASTS_SUCCESS, hourlyForecasts };
};

export const loadHourlyForecasts = locationKey => {
    return (dispatch) => {
        return getHourlyForecasts(locationKey, dispatch).then(hourlyForecasts => {
            dispatch(loadHourlyForecastsSuccess(hourlyForecasts));
        });
    };
}

export const loadCurrentLocationHourlyForecasts = () => {
    return async (dispatch) => {
        let location = await getCurrentLocation(dispatch);
        let hourlyForecasts = await getHourlyForecasts(location.key, dispatch);
        dispatch(loadHourlyForecastsSuccess(hourlyForecasts));
        return;
    };
}

export const loadFiveDayForecasts = locationKey => {
    if (!locationKey) {
        return loadCurrentLocationFiveDayForecasts();
    }

    return async (dispatch) => {
        let fiveDayForecasts = await getFiveDayForecasts(locationKey, dispatch);
        dispatch(loadWeatherSuccess(fiveDayForecasts));
        return;
    };
}

const loadCurrentLocationFiveDayForecasts = () => {
    return async (dispatch) => {
        let location = await getCurrentLocation(dispatch);
        let fiveDayForecasts = await getFiveDayForecasts(location.key, dispatch);
        dispatch(loadWeatherSuccess(fiveDayForecasts));
        return;
    };
}