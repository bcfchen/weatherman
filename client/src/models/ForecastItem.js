class ForecastItem {
    constructor(properties) {
        this.code = properties.code;
        this.date = properties.date;
        this.day = properties.day;
        this.high = properties.high;
        this.low = properties.low;
        this.text = properties.text;
    }
}

export default ForecastItem;