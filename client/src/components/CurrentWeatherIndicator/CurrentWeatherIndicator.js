import React from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import LocationSearch from "../LocationSearch/LocationSearch";
import MdRefresh from "react-icons/lib/md/refresh";
import Grow from '@material-ui/core/Grow';

const CurrentWeatherIndicator = ({ isLoading, currentHourlyForecast, location, handleRefresh }) => {
    let refreshIconClass = isLoading ? "rotating" : "";
    return (
        <Grow in={!isLoading}>
            <div className="current-weather-indicator-container">
                <Typography variant="display4">
                    {currentHourlyForecast && currentHourlyForecast.temperature}
                </Typography>
                <Typography variant="headline" gutterBottom>
                    {currentHourlyForecast && currentHourlyForecast.text}
                    <MdRefresh className={refreshIconClass} onClick={handleRefresh} />
                </Typography>
            </div>
        </Grow >
    );
};

const styles = theme => ({
    "current-weather-indicator-container": {
        margin: theme.spacing.unit,
    }
});

export default withStyles(styles)(CurrentWeatherIndicator);