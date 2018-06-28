import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as weatherActions from "../../redux/actions/weatherActions";
import { bindActionCreators } from "redux";

class WeatherPage extends React.Component {
    constructor(props, context) {
        super(props.context);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch() {
        this.props.actions.loadWeather("90403");
    }

    render() {
        return (<div className="weather-body">
            <h1>WEATHER PAGE HERE</h1>
            {this.props.weather.currentCondition ? this.props.weather.currentCondition.text : null}
            <Button onClick={this.onSearch} variant="contained" color="primary">Sign In</Button>
        </div>);
    }
}

function mapStateToProps(state, ownProps) {
    return { weather: state.weather };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(weatherActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);