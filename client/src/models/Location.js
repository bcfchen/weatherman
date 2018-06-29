class Location {
    constructor(city, region, country) {
        this.city = city;
        this.region = region;
        this.country = country;
    }

    getLocationString() {
        let hasInfo = this.city && this.region;
        return hasInfo ? this.city + ", " + this.region : "";
    }

    static fromLocationObj(locationObj) {
        return new Location(locationObj.city, locationObj.region, locationObj.country);
    }

    static fromLocationString(locationStr) {
        let locationArr = locationStr.split(", ");
        let city = locationArr[0],
            region = locationArr[1],
            country = locationArr[2];
        return new Location(city, region, country);
    }

    static fromLocationArr(locationArr) {
        let city = locationArr[1],
            region = locationArr[2],
            country = locationArr[3];
        return new Location(city, region, country);
    }
}

export default Location;