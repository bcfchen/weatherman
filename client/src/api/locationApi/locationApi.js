import Location from "../../models/Location";
import { getJSONP, getJSON } from "../baseApi/baseApi";
const config = require("../config.json");

export const getLocations = locationText => {
    let queryUrl = config.accuWeather.location.autoComplete.basePath + config.accuWeather.apiKey + "&q=" + locationText;
    return getJSON(queryUrl)
        .then(locationsResponse => {
            let locations = locationsResponse && locationsResponse.data.length > 0 ? locationsResponse.data : [];
            return locations.map(location => Location.fromLocationObj(location))
        });
}


export const getCurrentLocation = (position) => {
    return getCurrentPosition().then(coords => {
        let queryUrl = config.accuWeather.location.locationByLatLong.basePath + coords.latitude + "%2C" + coords.longitude;
        return getJSON(queryUrl)
    }).then(locationsResponse => Location.fromLocationObj(locationsResponse.data));
}

const getCurrentPosition = () => {
    if (window.navigator.geolocation) {
        return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(position => resolve(position.coords)))
    } else { return Promise.reject("no geo"); }
}

// export const getLocation = locationKey => {

// }