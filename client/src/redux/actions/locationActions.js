import * as types from "../constants/action-types";
import { getLocations, getCurrentLocation } from "../../api/locationApi/locationApi";
import Location from "../../models/Location";

export const getLocationsSuccess = locations => {
    return { type: types.GET_LOCATIONS_SUCCESS, locations };
};

export const getCurrentLocationSuccess = currentLocation => {
    return { type: types.GET_CURRENT_LOCATION_SUCCESS, currentLocation };
};

export const currentLocationUpdated = newCurrentLocation => {
    return { type: types.CURRENT_LOCATION_UPDATED, newCurrentLocation };
}

export const getSuggestedLocations = locationText => {
    return (dispatch) => {
        return getLocations(locationText).then(locations => {
            dispatch(getLocationsSuccess(locations));
        }).catch(error => {
            throw (error);
        });
    }
};

export const updateCurrentLocation = selectedLocation => {
    return (dispatch) => {
        dispatch(currentLocationUpdated(Location.fromSelectedLocation(selectedLocation)));
    }
}

export const loadCurrentLocation = () => {
    return (dispatch) => {
        return getCurrentLocation().then(location => {
            dispatch(getCurrentLocationSuccess(location));
        });
    }
}