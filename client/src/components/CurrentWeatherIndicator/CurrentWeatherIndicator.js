import React from "react";
import Typography from '@material-ui/core/Typography';
import MdRefresh from "react-icons/lib/md/refresh";
import Grow from '@material-ui/core/Grow';

const CurrentWeatherIndicator = ({ isLoading, currentHourlyForecast, handleRefresh }) => {
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

export default CurrentWeatherIndicator;