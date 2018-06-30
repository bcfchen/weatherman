import React from "react";
import Grid from '@material-ui/core/Grid';

const WeatherDetails = ({ currentHourlyForecast }) => {
    return (
        <Grid container>
            <Grid item xs className="weather-details-item-container">
                <div>Humidity</div>
                <div>{currentHourlyForecast && currentHourlyForecast.humidity}</div>
            </Grid>
            <Grid item xs className="weather-details-item-container">
                <div>Wind</div>
                <div>{currentHourlyForecast && currentHourlyForecast.windSpeed}</div>
            </Grid>
            <Grid item xs className="weather-details-item-container">
                <div>UV Index</div>
                <div>{currentHourlyForecast && currentHourlyForecast.uvIndex}</div>
            </Grid>
        </Grid>
    );
};

export default WeatherDetails;