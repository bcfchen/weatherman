import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Select from "react-select";
import * as locationActions from "../../redux/actions/locationActions";
import * as weatherActions from "../../redux/actions/weatherActions";

class LocationSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    onLocationSelected = selectedLocation => {
        if (selectedLocation) {
            let selectedLocationObj = this.props.locations.filter(loc => loc.key === selectedLocation.value)[0];
            this.props.weatherActions.loadFiveDayForecasts(selectedLocationObj.key);
            this.props.weatherActions.loadHourlyForecasts(selectedLocationObj);
        }
    }

    onInputChange = inputText => {
        if (inputText && inputText.length > 0) {
            this.props.locationActions.getSuggestedLocations(inputText);
        }
    }

    render() {
        const { hourlyForecasts, locations } = this.props;
        let currentLocation = hourlyForecasts[0].location;
        let currentVal = {
            value: currentLocation.key,
            label: currentLocation.getLocationString()
        };

        let locationOptions = locations.map(location => {
            return {
                value: location.key,
                label: location.getLocationString()
            }
        });

        return (
            <Select
                name="location"
                value={currentVal}
                onChange={this.onLocationSelected}
                onInputChange={this.onInputChange}
                options={locationOptions}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        hourlyForecasts: state.weatherPage.hourlyForecasts,
        locations: state.weatherPage.locations
    };
};

const mapDispatchToProps = dispatch => {
    return {
        locationActions: bindActionCreators(locationActions, dispatch),
        weatherActions: bindActionCreators(weatherActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);