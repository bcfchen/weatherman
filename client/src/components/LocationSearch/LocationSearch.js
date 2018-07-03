import React from "react";
import { Async } from 'react-select';
import { getLocations } from "../../api/locationApi/locationApi";
import SearchValue from "./SearchValue";

const LocationSearch = ({ isLoaded, currentLocation, suggestedLocations, onLocationSelected }) => {
    let currentLocationDisplay = {
        value: currentLocation ? currentLocation.key : null,
        label: currentLocation ? currentLocation.getLocationString() : null
    };

    let loadSuggestedLocations = async (inputText) => {
        let locations = await getLocations(inputText);
        let locationOptions = locations.map(location => {
            return {
                value: location.key,
                label: location.getLocationString()
            }
        });
        return { options: locationOptions };
    }

    return (
        <Async
            className="async-select"
            name="location"
            value={currentLocationDisplay}
            loadOptions={loadSuggestedLocations}
            onChange={onLocationSelected}
            valueComponent={SearchValue}
        />
    );
}

export default LocationSearch;