import React from "react";
import { connect } from "react-redux";
import * as weatherActions from "../../redux/actions/weatherActions";
import * as locationActions from "../../redux/actions/locationActions";
import { bindActionCreators } from "redux";
import WeatherForecastList from "../../components/WeatherForecastList/WeatherForecastList";
import CurrentWeatherIndicator from "../../components/CurrentWeatherIndicator/CurrentWeatherIndicator";
import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";
import WeatherChart from "../../components/WeatherChart/WeatherChart";
import LocationSearch from "../../components/LocationSearch/LocationSearch";
import ReactPullToRefresh from "react-pull-to-refresh";

class WeatherPage extends React.Component {
    constructor(props, context) {
        super(props.context);
        this.loadWeather = this.loadWeather.bind(this);
        this.getSuggestedLocations = this.getSuggestedLocations.bind(this);
        props.locationActions.loadCurrentLocation();
        props.weatherActions.loadCurrentLocationHourlyForecasts();
        props.weatherActions.loadFiveDayForecasts();
    }

    loadWeather(selectedLocation) {
        if (selectedLocation) {
            this.props.weatherActions.loadFiveDayForecasts(selectedLocation.value);
            this.props.weatherActions.loadHourlyForecasts(selectedLocation.value);
            this.props.locationActions.updateCurrentLocation(selectedLocation);
        }
    }

    getSuggestedLocations(inputText) {
        if (inputText && inputText.length > 0) {
            this.props.locationActions.updateCurrentLocation(inputText);
            this.props.locationActions.getSuggestedLocations(inputText);
        }
    }

    handleRefresh(resolve, reject) {
        // do some async code here
        if (success) {
            resolve();
        } else {
            reject();
        }
    }

    render() {
        return (
            <ReactPullToRefresh onRefresh={this.handleRefresh}>
                <div className="weather-body">
                    <LocationSearch currentLocation={this.props.currentLocation}
                        onLocationSelected={this.loadWeather} suggestedLocations={this.props.locations}
                        onInputChanged={this.getSuggestedLocations} />
                    <CurrentWeatherIndicator currentHourlyForecast={this.props.hourlyForecasts[0]} />
                    <WeatherDetails currentHourlyForecast={this.props.hourlyForecasts[0]} />
                    <WeatherChart hourlyForecasts={this.props.hourlyForecasts} />
                    <WeatherForecastList weatherForecasts={this.props.fiveDayForecasts} />
                </div>
            </ReactPullToRefresh>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fiveDayForecasts: state.weatherPage.fiveDayForecasts,
        hourlyForecasts: state.weatherPage.hourlyForecasts,
        locations: state.weatherPage.locations,
        currentLocation: state.weatherPage.currentLocation
    };
}

const mapDispatchToProps = dispatch => {
    return {
        weatherActions: bindActionCreators(weatherActions, dispatch),
        locationActions: bindActionCreators(locationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);