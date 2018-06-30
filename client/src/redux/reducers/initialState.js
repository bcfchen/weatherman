import Condition from "../../models/Condition";
import Location from "../../models/Location";

const initialState = {
	ui: {
		weatherPage: {
			fiveDayForecasts: [],
			hourlyForecasts: [],
			locations: []
		}
	},
	server: {}
};

export default initialState;