import moment from "moment";

class DailyForecast {
    constructor(properties) {
        this.high = properties.Temperature.Maximum.Value;
        this.low = properties.Temperature.Minimum.Value;
        this.text = properties.Day.IconPhrase;
        this.dayOfWeek = moment(properties.Date).format("ddd");
    }
}

export default DailyForecast;