import axios from "axios";
import WeatherResponse from "../../models/WeatherResponse";

export async const getWeather = cityStateOrZip => {
    const testUrl = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"chicago, il\")&format=json";
    let response = await axios.get(testUrl)
    return new WeatherResponse(response);
};