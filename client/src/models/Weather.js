import ForecastItem from "./ForecastItem";
import Condition from "./Condition";

class Weather {
    constructor(properties) {
        this.units = properties.units;
        this.location = properties.location;
        this.currentCondition = new Condition(properties.item.condition);
        this.forecastItems = properties.item.forecast.map(forecastItem => new ForecastItem(forecastItem));
    }
}

export default Weather;