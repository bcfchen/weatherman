import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const WeatherDetails = ({ currentHourlyForecast }) => {
    return (
        <Grid container className="weather-details-item-container">
            <Grid item xs>
                <Typography variant="subheading">Humidity</Typography>
                <Typography variant="subheading">{currentHourlyForecast && currentHourlyForecast.humidity}</Typography>
            </Grid>
            <Grid item xs>
                <Typography variant="subheading">Wind</Typography>
                <Typography variant="subheading">{currentHourlyForecast && currentHourlyForecast.windSpeed}</Typography>
            </Grid>
            <Grid item xs>
                <Typography variant="subheading">UV Index</Typography>
                <Typography variant="subheading">{currentHourlyForecast && currentHourlyForecast.uvIndex}</Typography>
            </Grid>
        </Grid>
    );
};

export default WeatherDetails;