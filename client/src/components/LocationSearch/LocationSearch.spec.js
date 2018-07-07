import React from "react";
import { shallow } from "enzyme";
import LocationSearch from "./LocationSearch";
import toast from "toastr";
import * as locationApi from "../../api/locationApi/locationApi";
import Location from "../../models/Location";
jest.mock("../../api/locationApi/locationApi");
jest.mock("toastr");

describe("<LocationSearch/>", () => {
    let component = null,
        defaultProps = {
            onLocationSelected: jest.fn(),
            currentLocation: new Location("San Francisco", "CA", "USA", "123")
        };
    let render = (props = defaultProps) => {
        component = shallow(<LocationSearch {...props} />).dive();
    };

    beforeEach(() => { render(); });
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("on page load", () => {
        it("should render correctly", () => {
            expect(component).toMatchSnapshot();
        });

        it("should assign correct location value", () => {
            expect(component.find("Async").prop("value").value).toEqual("123");
        });
    });

    describe("on location selected", () => {
        it("should trigger onLocationSelected", () => {
            component.find("Async").prop("onChange")();
            expect(defaultProps.onLocationSelected).toHaveBeenCalled();
        });
    });

    describe("on load location options", () => {
        describe("on load success", () => {
            it("should return correct locations for the selector", () => {
                let locationAvailable = new Location("San Francisco", "CA", "USA", "123");
                locationApi.getLocations.mockImplementation(() => Promise.resolve([locationAvailable]));
                component.find("Async").prop("loadOptions")().then(loadedOptions => {
                    expect(loadedOptions.options).toEqual([{ "label": "San Francisco, USA", "value": "123" }]);
                });
            });
        });

        describe("on load error", () => {
            it("should trigger toast error", () => {
                locationApi.getLocations.mockImplementation(() => Promise.reject("bad"));
                component.find("Async").prop("loadOptions")().then(loadedOptions => {
                    expect(toast.error).toHaveBeenCalled();
                });
            });
        });
    });
});