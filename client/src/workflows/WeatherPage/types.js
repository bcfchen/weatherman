import PropTypes from "prop-types";
import DailyForecast from "../../models/DailyForecast";
import Location from "../../models/Location";
import HourlyForecast from "../../models/HourlyForecast";

export const propTypes = {
    fiveDayForecasts: PropTypes.arrayOf(PropTypes.instanceOf(DailyForecast)).isRequired,
    hourlyForecasts: PropTypes.arrayOf(PropTypes.instanceOf(HourlyForecast)).isRequired,
    currentLocation: PropTypes.instanceOf(Location),
    isLoading: PropTypes.bool.isRequired
};