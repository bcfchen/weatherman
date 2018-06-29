import * as types from "../constants/action-types";
import { getLocations, getCurrentLocation } from "../../api/locationApi/locationApi";

export const getLocationsSuccess = locations => {
    return { type: types.GET_LOCATIONS_SUCCESS, locations };
};

export const getCurrentLocationSuccess = currentLocation => {
    return { type: types.GET_CURRENT_LOCATION_SUCCESS, currentLocation };
};

export const getSuggestedLocations = locationText => {
    return (dispatch) => {
        return getLocations(locationText).then(locations => {
            dispatch(getLocationsSuccess(locations));
        }).catch(error => {
            throw (error);
        });
    }
};

// export const getUserLocation = () => {
//     return (dispatch) => {
//         return getCurrentLocation().then(currentLocation => {
//             dispatch(getCurrentLocationSuccess(currentLocation));
//         }).catch(error => {
//             throw (error);
//         })
//     }
// }