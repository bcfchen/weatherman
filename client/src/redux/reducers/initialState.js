import Condition from "../../models/Condition";
import Location from "../../models/Location";

const initialState = {
	ui: {
		weatherPage: {
			weather: {
				currentCondition: new Condition(),
				location: new Location()
			},
			locations: []
		}
	},
	server: {}
};

export default initialState;