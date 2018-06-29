import axios from "axios";
import Weather from "../../models/Weather";

export const getWeather = cityStateOrZip => {
    const testUrl = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"chicago, il\")&format=json";
    return axios.get(testUrl).then(response => new Weather(response.data.query.results.channel));
};