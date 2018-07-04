import React from "react";
import WeatherForecastItem from "../WeatherForecastItem/WeatherForecastItem";
import Grid from '@material-ui/core/Grid';
import { propTypes } from "./types";

const WeatherForecastList = ({ weatherForecasts }) => {
    let counter = 0;
    let gridItems = weatherForecasts.map(forecast =>
        <Grid item xs key={counter++}>
            <WeatherForecastItem forecastItem={forecast} />
        </Grid>);
    return (
        <Grid className="weather-forecast-items-container" container>
            {gridItems}
        </Grid>);
}

WeatherForecastList.propTypes = propTypes;
export default WeatherForecastList;