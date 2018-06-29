import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as weatherActions from "../../redux/actions/weatherActions";
import * as cityActions from "../../redux/actions/cityActions";
import { bindActionCreators } from "redux";

class WeatherPage extends React.Component {
    constructor(props, context) {
        super(props.context);
        this.onLoadWeather = this.onLoadWeather.bind(this);
        this.onSearchCities = this.onSearchCities.bind(this);
    }

    onLoadWeather() {
        this.props.weatherActions.loadWeather("90403");
    }

    onSearchCities() {
        this.props.cityActions.loadCities("chi");
    }

    render() {
        return (<div className="weather-body">
            <h1>WEATHER PAGE HERE</h1>
            {this.props.weather.currentCondition ? this.props.weather.currentCondition.text : null}
            <Button onClick={this.onLoadWeather} variant="contained" color="primary">load weather</Button>
            <Button onClick={this.onSearchCities} variant="contained" color="primary">load cities</Button>
        </div>);
    }
}

function mapStateToProps(state, ownProps) {
    return { weather: state.weatherPage.weather, cities: state.weatherPage.cities };
}

function mapDispatchToProps(dispatch) {
    return {
        weatherActions: bindActionCreators(weatherActions, dispatch),
        cityActions: bindActionCreators(cityActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);