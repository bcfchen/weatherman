import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Select from "react-select";
import * as locationActions from "../../redux/actions/locationActions";
import * as weatherActions from "../../redux/actions/weatherActions";
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
        // onInputChange={onInputChanged}
        // options={locationOptions}
        />
    );
}

export default LocationSearch;