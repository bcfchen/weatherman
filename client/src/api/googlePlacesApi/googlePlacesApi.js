import axios from "axios";
import City from "../../models/City";

const config = require("../config.json");
export const getCities = partialCityName => {
    let queryUrl = config.googlePlaces.basePath + partialCityName;
    return axios.get(queryUrl).then(response => new City());
}