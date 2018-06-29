import jsonp from "jsonp";
import axios from "axios";

export const getJSON = url => {
    return axios.get(url);
}

export const getJSONP = url => {
    return new Promise((resolve, reject) => {
        jsonp(url, (error, response) => {
            if (error) { reject(error); }
            else { resolve(response); }
        });
    });
}