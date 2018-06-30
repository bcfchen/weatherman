import Location from "../../models/Location";
import { getJSONP } from "../baseApi/baseApi";
const config = require("../config.json");

export const getLocations = locationText => {
    let queryUrl = config.geoBytesAutoCompleteCities.basePath + locationText;
    return getJSONP(queryUrl)
        .then(locationsResponse => locationsResponse.map(location => Location.fromLocationString(location)));
}

export const getCurrentLocation = (position) => {
    return getCurrentPosition().then(coords => {
        let queryUrl = config.accuWeather.location.basePath + coords.latitude + "%2C" + coords.longitude;
        return getJSONP(queryUrl)
    }).then(locationsResponse => Location.fromLocationArr(locationsResponse));
}

const getCurrentPosition = () => {
    if (window.navigator.geolocation) {
        return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(position => resolve(position.coords)))
    } else { return Promise.reject("no geo"); }
}

// export const getLocation = locationKey => {

// }