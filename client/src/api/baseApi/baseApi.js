import axios from "axios";

export const getJSON = url => {
    return axios.get(url);
}