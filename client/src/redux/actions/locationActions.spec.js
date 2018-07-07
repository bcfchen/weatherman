import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as types from "../constants/action-types";
import { getCurrentLocation } from "../../api/locationApi/locationApi";
import Location from "../../models/Location";
import * as locationActions from "./locationActions";
jest.mock("../../api/locationApi/locationApi");
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("location actions", () => {
    let store = null,
        selectedLocation = { label: "San Francisco", value: 123 },
        currentLocation = new Location();
    beforeEach(() => {
        store = mockStore();
        getCurrentLocation.mockImplementation(() => Promise.resolve(currentLocation));
    });

    describe("loadCurrentLocation", () => {
        it("creates GET_CURRENT_LOCATION_SUCCESS action when location is fetched", () => {
            let expectedActions = [
                {
                    type: types.GET_CURRENT_LOCATION_SUCCESS,
                    currentLocation: currentLocation
                }
            ];

            store.dispatch(locationActions.loadCurrentLocation()).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        });
    });

    describe("updateCurrentLocation", () => {
        let expectedLocation = Location.fromSelectedLocation(selectedLocation);
        it("creates CURRENT_LOCATION_UPDATED action", () => {
            let expectedActions = [
                {
                    type: types.CURRENT_LOCATION_UPDATED,
                    newCurrentLocation: expectedLocation
                }
            ];

            store.dispatch(locationActions.updateCurrentLocation(selectedLocation));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});