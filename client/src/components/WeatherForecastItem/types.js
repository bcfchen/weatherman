import PropTypes from "prop-types";
import DailyForecast from "../../models/DailyForecast";

export const propTypes = {
    forecastItem: PropTypes.instanceOf(DailyForecast).isRequired
};