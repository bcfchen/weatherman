import * as actions from "./ajaxStatusActions";
import * as types from "../constants/action-types";

describe("ajaxStatusActions", () => {
    describe("beginAjaxCall", () => {
        it("should return the beginAjaxCall function", () => {
            let expectedReturn = {
                type: types.BEGIN_AJAX_CALL
            };
            expect(actions.beginAjaxCall()).toEqual(expectedReturn);
        });
    });

    describe("ajaxCallError", () => {
        it("should return the ajaxCallError function", () => {
            let expectedReturn = {
                type: types.AJAX_CALL_ERROR
            };
            expect(actions.ajaxCallError()).toEqual(expectedReturn);
        });
    });

    describe("ajaxCallSuccess", () => {
        it("should return the ajaxCallSuccess function", () => {
            let expectedReturn = {
                type: types.AJAX_CALL_SUCCESS
            };
            expect(actions.ajaxCallSuccess()).toEqual(expectedReturn);
        });
    });
});