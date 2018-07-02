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
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator";

class WeatherPage extends React.Component {
    constructor(props, context) {
        super(props.context);
        this.loadWeather = this.loadWeather.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
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

    handleRefresh() {
        this.setState({ isLoading: true });
        this.props.locationActions.loadCurrentLocation();
        this.props.weatherActions.loadCurrentLocationHourlyForecasts();
        this.props.weatherActions.loadFiveDayForecasts();
    }

    getBodyClassName(currentHourConditions) {
        if (!currentHourConditions) { return "weather-body"; }
        return currentHourConditions.isDaylight ? "weather-body-day" : "weather-body-night";
    }

    render() {
        let blurblur = this.props.isLoading ? "blur" : "";
        let bodyClassName = this.getBodyClassName(this.props.hourlyForecasts[0]);
        return (
            <div className={bodyClassName}>
                {this.props.isLoading && <ProgressIndicator />}
                <div className={blurblur}>
                    <LocationSearch currentLocation={this.props.currentLocation}
                        onLocationSelected={this.loadWeather} suggestedLocations={this.props.locations} />
                    <CurrentWeatherIndicator handleRefresh={this.handleRefresh} isLoading={this.props.isLoading} currentHourlyForecast={this.props.hourlyForecasts[0]} />
                    <WeatherDetails isLoading={this.props.isLoading} currentHourlyForecast={this.props.hourlyForecasts[0]} />
                    <WeatherChart isLoading={this.props.isLoading} hourlyForecasts={this.props.hourlyForecasts} />
                    <WeatherForecastList isLoading={this.props.isLoading} weatherForecasts={this.props.fiveDayForecasts} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fiveDayForecasts: state.weatherPage.fiveDayForecasts,
        hourlyForecasts: state.weatherPage.hourlyForecasts,
        locations: state.weatherPage.locations,
        currentLocation: state.weatherPage.currentLocation,
        isLoading: state.ajaxCallsInProgress > 0
    };
}

const mapDispatchToProps = dispatch => {
    return {
        weatherActions: bindActionCreators(weatherActions, dispatch),
        locationActions: bindActionCreators(locationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);