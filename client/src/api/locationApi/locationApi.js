import Location from "../../models/Location";
import jsonp from "jsonp";
const config = require("../config.json");

export const getLocations = locationText => {
    let queryUrl = config.geoBytesAutoCompleteCities.basePath + locationText;
    return new Promise((resolve, reject) => {
        jsonp(queryUrl, (error, locationsResponse) => {
            if (error) { reject(error); }
            else {
                let locations = locationsResponse.map(location => Location.fromLocationString(location));
                resolve(locations);
            }
        });
    });
}

const getCurrentPosition = () => {
    if (window.navigator.geolocation) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(position.coords);
            })
        })
    } else {
        return Promise.reject("no geo");
    }
}

export const getCurrentCityName = (position) => {
    return new Promise((resolve, reject) => {
        getCurrentPosition().then(coords => {
            let queryUrl = config.geoBytesNearbyCities.basePath + "longitude=" + coords.longitude + "&latitude=" + coords.latitude;
            jsonp(queryUrl, (error, locationsResponse) => {
                if (error) { reject(error); }
                else {
                    let currentLocationStr = Location.fromLocationArr(locationsResponse[0]).getCurrentLocationString();
                    resolve(currentLocationStr);
                }
            });
        })
    })
}