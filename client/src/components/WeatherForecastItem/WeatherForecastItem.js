import React from "react";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const WeatherForecastItem = ({ forecastItem, itemIndex }) => {
    let containerClass = itemIndex % 2 === 0 ? "weather-forecast-item-container-even" : "weather-forecast-item-container-odd";
    return (
        <div className="weather-forecast-item-container-even">
            < ListItem>
                <Grid container spacing={8}>
                    <Grid item xs>
                        <ListItemText primary={forecastItem.day} secondary={forecastItem.getMonthDay()} />
                    </Grid>
                    <Grid item xs>
                        <ListItemText primary={forecastItem.day} secondary={forecastItem.getMonthDay()} />
                    </Grid>
                    <Grid item xs>
                        <ListItemText primary={forecastItem.text} />
                    </Grid>
                    <Grid item xs>
                        <ListItemText primary={"Hi " + forecastItem.high} secondary={"Lo " + forecastItem.low} />
                    </Grid>
                </Grid>
            </ListItem>
            <Divider />
        </div>
    );
}

export default WeatherForecastItem;