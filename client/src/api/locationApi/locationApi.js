import Location from "../../models/Location";
import baseApi from "../baseApi/baseApi";
import { beginAjaxCall, ajaxCallError, ajaxCallSuccess } from "../../redux/actions/ajaxStatusActions";
const config = require("../config.json");

export const getLocations = async (locationText) => {
    let queryUrl = config.accuWeather.location.autoComplete.basePath + config.accuWeather.apiKey + "&q=" + locationText;
    let errMsg = "Getting location for " + locationText + " failed";
    let locationsResponse = await baseApi.getSimple(queryUrl, errMsg);
    let locations = locationsResponse && locationsResponse.data.length > 0 ? locationsResponse.data : [];
    return locations.map(location => Location.fromLocationObj(location));
}

export const getCurrentLocation = async (dispatch) => {
    let coords = await getCurrentPosition(dispatch);
    let queryUrl = config.accuWeather.location.locationByLatLong.basePath + coords.latitude + "%2C" + coords.longitude;
    let errMsg = "Getting current location failed";
    let locationsResponse = await baseApi.get(queryUrl, dispatch, errMsg);
    return Location.fromLocationObj(locationsResponse.data);
}

const getCurrentPosition = (dispatch) => {
    if (window.navigator.geolocation) {
        dispatch(beginAjaxCall());
        return new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(position => {
                dispatch(ajaxCallSuccess());
                resolve(position.coords);
            }))
    } else { dispatch(ajaxCallError()); return Promise.reject("no geo"); }
}