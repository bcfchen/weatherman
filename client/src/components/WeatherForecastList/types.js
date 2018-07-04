import PropTypes from "prop-types";
import DailyForecast from "../../models/DailyForecast";

export const propTypes = {
    weatherForecasts: PropTypes.arrayOf(PropTypes.instanceOf(DailyForecast)).isRequired
};