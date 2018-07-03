import PropTypes from "prop-types";
import HourlyForecast from "../../models/HourlyForecast";

export const propTypes = {
    isLoading: PropTypes.bool.isRequired,
    currentHourlyForecast: PropTypes.instanceOf(HourlyForecast)
};
