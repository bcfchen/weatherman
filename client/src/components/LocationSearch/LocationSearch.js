import React from "react";
import { Async } from 'react-select';
import { getLocations } from "../../api/locationApi/locationApi";

const LocationSearch = ({ currentLocation, suggestedLocations, onLocationSelected, onInputChanged }) => {
    let currentLocationDisplay = {
        value: currentLocation ? currentLocation.key : null,
        label: currentLocation ? currentLocation.getLocationString() : null
    };

    let locationOptions = suggestedLocations.map(location => {
        return {
            value: location.key,
            label: location.getLocationString()
        }
    });

    let loadSuggestedLocations = inputText => {
        return getLocations(inputText).then(locations => {
            let locationOptions = locations.map(location => {
                return {
                    value: location.key,
                    label: location.getLocationString()
                }
            });
            return {
                options: locationOptions
            };
        });
    }

    return (
        <Async
            name="location"
            value={currentLocationDisplay}
            loadOptions={loadSuggestedLocations}
            onChange={onLocationSelected}
        />
    );
}

export default LocationSearch;