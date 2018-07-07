import axios from "axios";
import baseApi from "./baseApi";
import * as ajaxActions from "../../redux/actions/ajaxStatusActions";
jest.mock("../../redux/actions/ajaxStatusActions");
jest.mock("axios", () => { return { create: () => { return { get: () => Promise.resolve("response"), defaults: { timeout: 1000 } } } } });

describe("baseApi", () => {
    beforeEach(() => {
        ajaxActions = {
            beginAjaxCall: jest.fn(),
            ajaxCallError: jest.fn(),
            ajaxCallSuccess: jest.fn()
        };
    });

    describe("get", () => {
        it("should return response", () => {
            let dispatchFunc = () => { },
                requestUrl = "requestUrl",
                errorMsg = "errorMsg";

            baseApi.get(requestUrl, dispatchFunc, errorMsg).then(response => {
                expect(response).toEqual("response");
            });
        });
    });

    describe("simpleGet", () => {
        it("should return response", () => {
            let requestUrl = "requestUrl",
                errorMsg = "errorMsg";

            baseApi.getSimple(requestUrl, errorMsg).then(response => {
                expect(response).toEqual("response");
            });
        });
    });
});