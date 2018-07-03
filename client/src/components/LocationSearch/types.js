import PropTypes from "prop-types";
import Location from "../../models/Location";

export const propTypes = {
    currentLocation: PropTypes.instanceOf(Location),
    onLocationSelected: PropTypes.func.isRequired
};
