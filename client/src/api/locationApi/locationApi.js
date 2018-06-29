import Location from "../../models/Location";
import { getJSONP } from "../baseApi/baseApi";
const config = require("../config.json");

export const getLocations = locationText => {
    let queryUrl = config.geoBytesAutoCompleteCities.basePath + locationText;
    return getJSONP(queryUrl)
        .then(locationsResponse => locationsResponse.map(location => Location.fromLocationString(location)));
}

export const getCurrentCityName = (position) => {
    return getCurrentPosition().then(coords => {
        let queryUrl = config.geoBytesNearbyCities.basePath + "longitude=" + coords.longitude + "&latitude=" + coords.latitude;
        return getJSONP(queryUrl)
    }).then(locationsResponse => Location.fromLocationArr(locationsResponse[0]).getCurrentLocationString());
}

const getCurrentPosition = () => {
    if (window.navigator.geolocation) {
        return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(position => resolve(position.coords)))
    } else { return Promise.reject("no geo"); }
}