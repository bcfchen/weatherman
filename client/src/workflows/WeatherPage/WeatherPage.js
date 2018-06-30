import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as weatherActions from "../../redux/actions/weatherActions";
import * as locationActions from "../../redux/actions/locationActions";
import { bindActionCreators } from "redux";
import WeatherForecastList from "../../components/WeatherForecastList/WeatherForecastList";
import CurrentWeatherIndicator from "../../components/CurrentWeatherIndicator/CurrentWeatherIndicator";
import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";
import WeatherChart from "../../components/WeatherChart/WeatherChart";

class WeatherPage extends React.Component {
    constructor(props, context) {
        super(props.context);
        this.onLoadWeather = this.onLoadWeather.bind(this);
        this.onGetLocations = this.onGetLocations.bind(this);
        props.weatherActions.loadCurrentLocationHourlyForecasts();
        props.weatherActions.loadFiveDayForecasts();
    }

    onLoadWeather() {
        this.props.weatherActions.loadWeather("90403");
    }

    onGetLocations() {
        this.props.locationActions.getSuggestedLocations("chi");
    }

    render() {
        return (<div className="weather-body">
            <CurrentWeatherIndicator currentHourlyForecast={this.props.hourlyForecasts[0]} />
            {/* location={this.props.weather.location} />} */}
            <WeatherDetails currentHourlyForecast={this.props.hourlyForecasts[0]} />
            <WeatherChart hourlyForecasts={this.props.hourlyForecasts} />
            <WeatherForecastList weatherForecasts={this.props.fiveDayForecasts} />
            {/* <Button onClick={this.onLoadWeather} variant="contained" color="primary">load weather</Button>
            <Button onClick={this.onGetLocations} variant="contained" color="primary">load locations</Button> */}
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fiveDayForecasts: state.weatherPage.fiveDayForecasts,
        hourlyForecasts: state.weatherPage.hourlyForecasts,
        locations: state.weatherPage.locations
    };
}

const mapDispatchToProps = dispatch => {
    return {
        weatherActions: bindActionCreators(weatherActions, dispatch),
        locationActions: bindActionCreators(locationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);