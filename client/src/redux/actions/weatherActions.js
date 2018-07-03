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
        getHourlyForecasts(locationKey, dispatch).then(hourlyForecasts => {
            dispatch(loadHourlyForecastsSuccess(hourlyForecasts));
        });
    };
}

export const loadCurrentLocationHourlyForecasts = () => {
    return (dispatch) => {
        return getCurrentLocation(dispatch).then(location => {
            return getHourlyForecasts(location.key, dispatch);
        }).then(hourlyForecasts => {
            dispatch(loadHourlyForecastsSuccess(hourlyForecasts));
        });
    };
}

export const loadFiveDayForecasts = locationKey => {
    if (!locationKey) {
        return loadCurrentLocationFiveDayForecasts();
    }

    return (dispatch) => {
        return getFiveDayForecasts(locationKey, dispatch).then(fiveDayForecasts => {
            dispatch(loadWeatherSuccess(fiveDayForecasts));
        });
    };
}

const loadCurrentLocationFiveDayForecasts = () => {
    return (dispatch) => {
        return getCurrentLocation(dispatch).then(location => {
            return getFiveDayForecasts(location.key, dispatch);
        }).then(fiveDayForecasts => {
            dispatch(loadWeatherSuccess(fiveDayForecasts));
        });
    };
}