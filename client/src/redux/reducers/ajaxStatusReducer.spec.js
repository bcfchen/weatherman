import ajaxStatusReducer from "./ajaxStatusReducer";
import * as types from "../constants/action-types";

describe("ajaxStatusReducer", () => {
    describe("on action type of BEGIN_AJAX_CALL", () => {
        it("should increment state by 1", () => {
            let action = {
                type: types.BEGIN_AJAX_CALL
            };
            let outputState = ajaxStatusReducer(1, action);
            expect(outputState).toEqual(2);
        });
    });

    describe("on action type of AJAX_CALL_SUCCESS", () => {
        it("should decrement state by 1", () => {
            let action = {
                type: types.AJAX_CALL_SUCCESS
            };
            let outputState = ajaxStatusReducer(1, action);
            expect(outputState).toEqual(0);
        });
    });

    describe("on action type of AJAX_CALL_ERROR", () => {
        it("should decrement state by 1", () => {
            let action = {
                type: types.AJAX_CALL_ERROR
            };
            let outputState = ajaxStatusReducer(1, action);
            expect(outputState).toEqual(0);
        });
    });

    describe("on action type of some other action", () => {
        it("should return original state", () => {
            let action = {
                type: "some other type"
            };
            let outputState = ajaxStatusReducer(1, action);
            expect(outputState).toEqual(1);
        });
    });
});