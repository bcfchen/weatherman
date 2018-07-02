import Location from "../../models/Location";
import axios from "axios";
const config = require("../config.json");

export const getLocations = async (locationText) => {
    let queryUrl = config.accuWeather.location.autoComplete.basePath + config.accuWeather.apiKey + "&q=" + locationText;
    let locationsResponse = await axios.get(queryUrl);
    let locations = locationsResponse && locationsResponse.data.length > 0 ? locationsResponse.data : [];
    return locations.map(location => Location.fromLocationObj(location));
}

export const getCurrentLocation = async (position) => {
    let coords = await getCurrentPosition();
    let queryUrl = config.accuWeather.location.locationByLatLong.basePath + coords.latitude + "%2C" + coords.longitude;
    let locationsResponse = await axios.get(queryUrl);
    return Location.fromLocationObj(locationsResponse.data);
}

const getCurrentPosition = () => {
    if (window.navigator.geolocation) {
        return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(position => resolve(position.coords)))
    } else { return Promise.reject("no geo"); }
}