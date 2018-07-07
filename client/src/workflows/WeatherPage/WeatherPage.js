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
import toastr from 'toastr';
import ReactPullToRefresh from "react-pull-to-refresh";
import { propTypes } from "./types";

export class WeatherPage extends React.Component {
    constructor(props, context) {
        super(props.context);
        this.loadWeather = this.loadWeather.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        let initialLoadRequests =
            [props.locationActions.loadCurrentLocation(),
            props.weatherActions.loadCurrentLocationHourlyForecasts(),
            props.weatherActions.loadFiveDayForecasts()];

        Promise.all(initialLoadRequests).catch(err => {
            toastr.error(err);
        });
    }

    loadWeather(selectedLocation) {
        if (selectedLocation) {
            let loadWeatherRequests =
                [this.props.weatherActions.loadFiveDayForecasts(selectedLocation.value),
                this.props.weatherActions.loadHourlyForecasts(selectedLocation.value),
                this.props.locationActions.updateCurrentLocation(selectedLocation)];

            return Promise.all(loadWeatherRequests).catch(err => {
                toastr.error(err);
            });
        }
    }

    handleRefresh(resolve, reject) {
        let refreshRequests =
            [this.props.locationActions.loadCurrentLocation(),
            this.props.weatherActions.loadCurrentLocationHourlyForecasts(),
            this.props.weatherActions.loadFiveDayForecasts()];
        return Promise.all(refreshRequests).then(() => resolve()).catch(err => {
            toastr.error(err);
            reject();
        })
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
                <ReactPullToRefresh onRefresh={this.handleRefresh}>
                    {this.props.isLoading && <ProgressIndicator />}
                    <div className={blurblur}>
                        <LocationSearch currentLocation={this.props.currentLocation}
                            onLocationSelected={this.loadWeather} />
                        <CurrentWeatherIndicator isLoading={this.props.isLoading} currentHourlyForecast={this.props.hourlyForecasts[0]} />
                        <WeatherDetails isLoading={this.props.isLoading} currentHourlyForecast={this.props.hourlyForecasts[0]} />
                        <WeatherChart isLoading={this.props.isLoading} hourlyForecasts={this.props.hourlyForecasts} />
                        <WeatherForecastList isLoading={this.props.isLoading} weatherForecasts={this.props.fiveDayForecasts} />
                    </div>
                </ReactPullToRefresh>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fiveDayForecasts: state.weatherPage.fiveDayForecasts,
        hourlyForecasts: state.weatherPage.hourlyForecasts,
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

WeatherPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);