class Condition {
    constructor(properties) {
        this.date = properties ? properties.date : undefined;
        this.temp = properties ? properties.temp : undefined;
        this.text = properties ? properties.text : undefined;
    }
}

export default Condition;