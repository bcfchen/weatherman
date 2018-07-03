class Location {
    constructor(city, region, country, key) {
        this.city = city;
        this.region = region;
        this.country = country;
        this.key = key;
    }

    getLocationString() {
        let locationText = this.city;
        if (this.country) { locationText += ", " + this.country; }
        return locationText;
    }

    static fromSelectedLocation(selectedLocation) {
        return new Location(selectedLocation.label, "", "", selectedLocation.value);
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