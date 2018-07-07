import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import { propTypes } from "./types";

const WeatherDetails = ({ isLoading, currentHourlyForecast }) => {
    return (
        <Grow in={!isLoading}>
            <Grid container className="weather-details-item-container">
                <Grid item xs>
                    <Typography variant="subheading">Humidity</Typography>
                    <Typography className="humidity-value" variant="subheading">{currentHourlyForecast && currentHourlyForecast.humidity}</Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant="subheading">Wind</Typography>
                    <Typography className="wind-speed-value" variant="subheading">{currentHourlyForecast && currentHourlyForecast.windSpeed}</Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant="subheading">UV Index</Typography>
                    <Typography className="uv-index-value" variant="subheading">{currentHourlyForecast && currentHourlyForecast.uvIndex}</Typography>
                </Grid>
            </Grid>
        </Grow>
    );
};

WeatherDetails.propTypes = propTypes;
export default WeatherDetails;