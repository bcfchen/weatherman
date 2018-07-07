import baseApi from "../baseApi/baseApi";
import * as locationApi from "./locationApi";
import Location from "../../models/Location";
jest.mock("../baseApi/baseApi");

describe("locationApi", () => {
    let locationProperties = {
        LocalizedName: "San Francisco",
        AdministrativeArea: {
            ID: "CA"
        },
        Country: {
            LocalizedName: "USA"
        },
        Key: 123
    };

    describe("getLocations", () => {
        describe("locations are returned rom server side", () => {
            beforeEach(() => {
                baseApi.getSimple.mockImplementation(() => Promise.resolve({
                    data: [locationProperties]
                }));
            });
            it("should return locations", () => {
                locationApi.getLocations().then(response => {
                    expect(response).toEqual([Location.fromLocationObj(locationProperties)]);
                });
            });
        });

        describe("locations are not returned rom server side", () => {
            beforeEach(() => {
                baseApi.getSimple.mockImplementation(() => Promise.resolve());
            });
            it("should return locations as empty array", () => {
                locationApi.getLocations().then(response => {
                    expect(response).toEqual([]);
                });
            });
        });
    });

    describe("getCurrentLocation", () => {
        let dispatch = jest.fn();
        beforeEach(() => {
            baseApi.get.mockImplementation(() => Promise.resolve({ data: locationProperties }));
        });

        it("should return location", () => {
            locationApi.getCurrentLocation(dispatch).then(response => {
                expect(response).toEqual(Location.fromLocationObj(locationProperties));
            });
        });
    });
});