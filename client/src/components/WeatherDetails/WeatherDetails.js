import React from "react";
import Grid from '@material-ui/core/Grid';

const WeatherDetails = ({ weather }) => {
    return (
        <Grid container>
            <Grid item xs>
                <div>Humidity</div>
                <div>{weather.atmosphere && weather.getHumidity() + "%"}</div>
            </Grid>
            <Grid item xs>
                <div>Wind</div>
                <div>{weather.atmosphere && weather.getWindSpeed() + " MPH"}</div>
            </Grid>
            <Grid item xs>
                <div>Pressure</div>
                <div>{weather.atmosphere && weather.getPressure() + " mb"}</div>
            </Grid>
        </Grid>
    );
};

export default WeatherDetails;