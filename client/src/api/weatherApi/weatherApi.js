import { getJSON } from "../baseApi/baseApi";
import Weather from "../../models/Weather";
import DailyForecast from "../../models/DailyForecast";
import HourlyForecast from "../../models/HourlyForecast";
const config = require("../config.json");

export const getWeather = cityStateOrZip => {
    const testUrl = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"" + cityStateOrZip + "\")&format=json";
    return getJSON(testUrl).then(response => new Weather(response.data.query.results.channel));
};

export const getFiveDayForecasts = locationKey => {
    let queryUrl = config.accuWeather.fiveDayForecast.basePath + locationKey + "?apikey=" + config.accuWeather.apiKey;
    return getJSON(queryUrl).then(response => {
        let forecastResponses = response.data.DailyForecasts;
        return forecastResponses.map(forecastResponse => new DailyForecast(forecastResponse))
    });
};

export const getHourlyForecasts = location => {
    let queryUrl = config.accuWeather.hourlyForecast.basePath + location.key + "?details=true&apikey=" + config.accuWeather.apiKey;
    return getJSON(queryUrl).then(response => {
        let forecastResponses = response.data;
        return forecastResponses.map(forecastResponse => new HourlyForecast(forecastResponse, location))
    });
}

// export const getWeather = cityStateOrZip => {
//     const testUrl = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"" + cityStateOrZip + "\")&format=json";
//     return getJSON(testUrl).then(response => new Weather(response.data.query.results.channel));
// };