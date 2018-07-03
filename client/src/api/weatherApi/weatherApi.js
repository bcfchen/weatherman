import DailyForecast from "../../models/DailyForecast";
import HourlyForecast from "../../models/HourlyForecast";
import baseApi from "../baseApi/baseApi";
const config = require("../config.json");

export const getFiveDayForecasts = async (locationKey, dispatch) => {
    let queryUrl = config.accuWeather.fiveDayForecast.basePath + locationKey + "?metric=true&apikey=" + config.accuWeather.apiKey;
    let errMsg = "Get five day forecasts failed for location: " + locationKey;
    let response = await baseApi.get(queryUrl, dispatch, errMsg);
    let forecastResponses = response.data.DailyForecasts;
    return forecastResponses.map(forecastResponse => new DailyForecast(forecastResponse))
};

export const getHourlyForecasts = async (locationKey, dispatch) => {
    let queryUrl = config.accuWeather.hourlyForecast.basePath + locationKey + "?metric=true&details=true&apikey=" + config.accuWeather.apiKey;
    let errMsg = "Get hourly forecasts failed for location: " + locationKey;
    let response = await baseApi.get(queryUrl, dispatch, errMsg);
    return response.data.map(forecastResponse => new HourlyForecast(forecastResponse))
}