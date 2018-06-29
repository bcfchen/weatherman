import ForecastItem from "./ForecastItem";
import Condition from "./Condition";
import Location from "./Location";
class Weather {
    constructor(properties) {
        this.units = properties.units;
        this.location = Location.fromLocationObj(properties.location);
        this.currentCondition = new Condition(properties.item.condition);
        this.forecastItems = properties.item.forecast.map(forecastItem => new ForecastItem(forecastItem));
    }
}

export default Weather;