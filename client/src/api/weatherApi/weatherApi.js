import { getJSON } from "../baseApi/baseApi";
import Weather from "../../models/Weather";

export const getWeather = cityStateOrZip => {
    const testUrl = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"" + cityStateOrZip + "\")&format=json";
    return getJSON(testUrl).then(response => new Weather(response.data.query.results.channel));
};