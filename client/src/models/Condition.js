import moment from "moment";
class Condition {
    constructor(properties) {
        this.date = properties ? properties.date : undefined;
        this.temp = properties ? properties.temp : undefined;
        this.text = properties ? properties.text : undefined;
    }

    getTime() {
        let time = moment(this.date).format("h:mm A");
        return time;
    }
}

export default Condition;