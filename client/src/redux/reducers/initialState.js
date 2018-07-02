import Condition from "../../models/Condition";
import Location from "../../models/Location";

const initialState = {
	ui: {
		weatherPage: {
			fiveDayForecasts: [],
			hourlyForecasts: [],
			locations: []
		},
		ajaxCallsInProgress: 0
	},
	server: {}
};

export default initialState;