import React from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import LocationSearch from "../LocationSearch/LocationSearch";

const CurrentWeatherIndicator = ({ currentHourlyForecast, location }) => {
    return (
        <div className="current-weather-indicator-container">
            <Typography variant="display2" gutterBottom>
                {currentHourlyForecast && currentHourlyForecast.getHoursAndMinutes()}
            </Typography>
            {currentHourlyForecast && <LocationSearch initialLocation={currentHourlyForecast.getLocationString()} />}
            {/* <Typography variant="display2" gutterBottom>
                {currentHourlyForecast && currentHourlyForecast.getLocationString()}
            </Typography> */}
            <Typography variant="display1" gutterBottom>
                {currentHourlyForecast && currentHourlyForecast.temperature}
            </Typography>
            <Typography variant="display1" gutterBottom>
                {currentHourlyForecast && currentHourlyForecast.text}
            </Typography>
        </div>
    );
};

export default CurrentWeatherIndicator;