import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as weatherActions from "../../redux/actions/weatherActions";
import * as locationActions from "../../redux/actions/locationActions";
import { bindActionCreators } from "redux";

class WeatherPage extends React.Component {
    constructor(props, context) {
        super(props.context);
        this.onLoadWeather = this.onLoadWeather.bind(this);
        this.onGetLocations = this.onGetLocations.bind(this);
    }

    onLoadWeather() {
        this.props.weatherActions.loadWeather("90403");
    }

    onGetLocations() {
        this.props.locationActions.getSuggestedLocations("chi");
    }

    render() {
        return (<div className="weather-body">
            <h1>WEATHER PAGE HERE</h1>
            {this.props.weather.currentCondition ? this.props.weather.currentCondition.text : null}
            <Button onClick={this.onLoadWeather} variant="contained" color="primary">load weather</Button>
            <Button onClick={this.onGetLocations} variant="contained" color="primary">load locations</Button>
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return { weather: state.weatherPage.weather, locations: state.weatherPage.locations };
}

const mapDispatchToProps = dispatch => {
    return {
        weatherActions: bindActionCreators(weatherActions, dispatch),
        locationActions: bindActionCreators(locationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);