import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import weatherChartConfig from "./WeatherChartConfig";

const WeatherChart = ({ isLoading, hourlyForecasts }) => {
    let series = [{
        data: hourlyForecasts.map(forecast => forecast.temperature),
        type: "spline",
        color: "#fff"
    }];
    let configOptions = { ...weatherChartConfig, series };

    return (
        <Grow in={!isLoading}>
            <div className="weather-chart">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={configOptions} />
            </div>
        </Grow>);
}

const styles = theme => ({
    "weather-chart": {
        margin: theme.spacing.unit,
    }
});

export default withStyles(styles)(WeatherChart);