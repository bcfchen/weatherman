import axios from "axios";
import City from "../../models/City";
import jsonp from "jsonp";
const config = require("../config.json");

export const getCities = partialCityName => {
    let queryUrl = config.googlePlaces.basePath + partialCityName;
    return new Promise((resolve, reject) => {
        jsonp(queryUrl, (error, data) => {
            if (error) { reject(error); }
            else { resolve(data); }
        });
    });
}