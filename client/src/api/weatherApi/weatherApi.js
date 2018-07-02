import { getJSON } from "../baseApi/baseApi";
import DailyForecast from "../../models/DailyForecast";
import HourlyForecast from "../../models/HourlyForecast";
const config = require("../config.json");

export const getFiveDayForecasts = locationKey => {
    let queryUrl = config.accuWeather.fiveDayForecast.basePath + locationKey + "?metric=true&apikey=" + config.accuWeather.apiKey;
    return getJSON(queryUrl).then(response => {
        let forecastResponses = response.data.DailyForecasts;
        return forecastResponses.map(forecastResponse => new DailyForecast(forecastResponse))
    });
};

export const getHourlyForecasts = locationKey => {
    let queryUrl = config.accuWeather.hourlyForecast.basePath + locationKey + "?metric=true&details=true&apikey=" + config.accuWeather.apiKey;
    return getJSON(queryUrl).then(response => {
        let forecastResponses = response.data;
        return forecastResponses.map(forecastResponse => new HourlyForecast(forecastResponse))
    });
}