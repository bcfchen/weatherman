class Location {
    constructor(city, state, country) {
        this.city = city;
        this.state = state;
        this.country = country;
    }

    getCurrentLocationString() {
        return this.city + ", " + this.state;
    }

    static fromLocationString(locationStr) {
        let locationArr = locationStr.split(", ");
        let city = locationArr[0],
            state = locationArr[1],
            country = locationArr[2];
        return new Location(city, state, country);
    }

    static fromLocationArr(locationArr) {
        let city = locationArr[1],
            state = locationArr[2],
            country = locationArr[3];
        return new Location(city, state, country);
    }
}

export default Location;