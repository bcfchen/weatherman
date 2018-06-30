import moment from "moment";

class HourlyForecast {
    constructor(properties, location) {
        this.temperature = properties.Temperature.Value;
        this.text = properties.IconPhrase;
        this.dateTime = properties.DateTime;
        this.windSpeed = properties.Wind.Speed.Value + " km/h";
        this.humidity = properties.RelativeHumidity + " %";
        this.uvIndex = properties.UVIndex;
        this.location = location;
    }

    getHoursAndMinutes() {
        return moment(this.dateTime).format("HH:mm A");
    }

    getLocationString() {
        return this.location.getLocationString();
    }
}

export default HourlyForecast;