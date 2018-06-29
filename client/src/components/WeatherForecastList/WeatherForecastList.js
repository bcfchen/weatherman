import React from "react";
import List from "@material-ui/core/List";
import WeatherForecastItem from "../WeatherForecastItem/WeatherForecastItem";

const WeatherForecastList = ({ weatherForecasts }) => {
    let counter = 0;
    let forecastItemRows = weatherForecasts.map(forecastItem => {
        counter++;
        return <WeatherForecastItem key={counter} forecastItem={forecastItem} itemIndex={counter} />;
    });
    return (< List component="nav">{forecastItemRows}</List>);
}

export default WeatherForecastList;