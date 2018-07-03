import PropTypes from "prop-types";
import HourlyForecast from "../../models/HourlyForecast";

export const propTypes = {
    isLoading: PropTypes.bool.isRequired,
    hourlyForecasts: PropTypes.arrayOf(PropTypes.instanceOf(HourlyForecast)).isRequired
};
