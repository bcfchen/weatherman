import React from "react";
import Grid from '@material-ui/core/Grid';

const WeatherDetails = ({ currentHourlyForecast }) => {
    return (
        <Grid container>
            <Grid item xs>
                <div>Humidity</div>
                <div>{currentHourlyForecast && currentHourlyForecast.humidity}</div>
            </Grid>
            <Grid item xs>
                <div>Wind</div>
                <div>{currentHourlyForecast && currentHourlyForecast.windSpeed}</div>
            </Grid>
            <Grid item xs>
                <div>UV Index</div>
                <div>{currentHourlyForecast && currentHourlyForecast.uvIndex}</div>
            </Grid>
        </Grid>
    );
};

export default WeatherDetails;