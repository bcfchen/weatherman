import * as types from "../constants/action-types";
import { getFiveDayForecasts, getHourlyForecasts } from "../../api/weatherApi/weatherApi";
import { getCurrentLocation } from "../../api/locationApi/locationApi";
import { beginAjaxCall } from "./ajaxStatusActions";

export const loadWeatherSuccess = fiveDayForecasts => {
    return { type: types.LOAD_FIVE_DAY_FORECAST_SUCCESS, fiveDayForecasts };
};

export const loadHourlyForecastsSuccess = hourlyForecasts => {
    return { type: types.LOAD_HOURLY_FORECASTS_SUCCESS, hourlyForecasts };
};

export const loadHourlyForecasts = locationKey => {
    return (dispatch) => {
        getHourlyForecasts(locationKey).then(hourlyForecasts => {
            dispatch(loadHourlyForecastsSuccess(hourlyForecasts));
        });
    };
}

export const loadCurrentLocationHourlyForecasts = () => {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        return getCurrentLocation().then(location => {
            return getHourlyForecasts(location.key);
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
        dispatch(beginAjaxCall());
        return getFiveDayForecasts(locationKey).then(fiveDayForecasts => {
            dispatch(loadWeatherSuccess(fiveDayForecasts));
        });
    };
}

const loadCurrentLocationFiveDayForecasts = () => {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        return getCurrentLocation().then(location => {
            return getFiveDayForecasts(location.key);
        }).then(fiveDayForecasts => {
            dispatch(loadWeatherSuccess(fiveDayForecasts));
        });
    };
}