import React from "react";
import List from "@material-ui/core/List";
import WeatherForecastItem from "../WeatherForecastItem/WeatherForecastItem";
import Grid from '@material-ui/core/Grid';

const WeatherForecastList = ({ weatherForecasts }) => {
    let gridItems = weatherForecasts.map(forecast =>
        <Grid item xs>
            <WeatherForecastItem forecastItem={forecast} />
        </Grid>);
    return (
        <Grid className="weather-forecast-items-container" container>
            {gridItems}
        </Grid>);
}

export default WeatherForecastList;