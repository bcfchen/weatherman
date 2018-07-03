import React from "react";
import { Async } from 'react-select';
import { getLocations } from "../../api/locationApi/locationApi";
import SearchValue from "./SearchValue";
import toast from "toastr";
import styles from './LocationSearchStyles';
import { withStyles } from '@material-ui/core/styles';

const LocationSearch = ({ isLoaded, currentLocation, suggestedLocations, onLocationSelected }) => {
    let currentLocationDisplay = {
        value: currentLocation ? currentLocation.key : null,
        label: currentLocation ? currentLocation.getLocationString() : null
    };

    let loadSuggestedLocations = async (inputText) => {
        return getLocations(inputText).then(locations => {
            let locationOptions = locations.map(location => {
                return {
                    value: location.key,
                    label: location.getLocationString()
                }
            });
            return { options: locationOptions };
        }).catch(err => {
            toast.error(err);
        });
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

export default withStyles(styles)(LocationSearch);
