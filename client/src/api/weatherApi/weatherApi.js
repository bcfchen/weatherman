import DailyForecast from "../../models/DailyForecast";
import HourlyForecast from "../../models/HourlyForecast";
import axios from "axios";
const config = require("../config.json");

export const getFiveDayForecasts = async (locationKey) => {
    let queryUrl = config.accuWeather.fiveDayForecast.basePath + locationKey + "?metric=true&apikey=" + config.accuWeather.apiKey;
    let response = await axios.get(queryUrl);
    let forecastResponses = response.data.DailyForecasts;
    return forecastResponses.map(forecastResponse => new DailyForecast(forecastResponse))
};

export const getHourlyForecasts = async (locationKey) => {
    let queryUrl = config.accuWeather.hourlyForecast.basePath + locationKey + "?metric=true&details=true&apikey=" + config.accuWeather.apiKey;
    let response = await axios.get(queryUrl);
    return response.data.map(forecastResponse => new HourlyForecast(forecastResponse))
}