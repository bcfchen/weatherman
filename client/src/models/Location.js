class Location {
    constructor(city, region, country, key) {
        this.city = city;
        this.region = region;
        this.country = country;
        this.key = key;
    }

    getLocationString() {
        let hasInfo = this.city && this.region;
        return hasInfo ? this.city + ", " + this.country : "";
    }

    static fromLocationString(locationStr) {
        let locationArr = locationStr.split(", ");
        let city = locationArr[0],
            region = locationArr[1],
            country = locationArr[2];
        return new Location(city, region, country);
    }

    static fromLocationObj(accuLocationObj) {
        let city = accuLocationObj.LocalizedName,
            region = accuLocationObj.AdministrativeArea.ID,
            country = accuLocationObj.Country.LocalizedName,
            key = accuLocationObj.Key;
        return new Location(city, region, country, key);
    }
}

export default Location;