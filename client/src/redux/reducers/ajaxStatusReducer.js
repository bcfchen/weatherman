import * as types from "../constants/action-types";
import initialState from "./initialState";

export default function ajaxStatusReducer(state = initialState.ui.ajaxCallsInProgress, action) {
    if (action.type === types.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type === types.AJAX_CALL_SUCCESS || action.type === types.AJAX_CALL_ERROR) {
        return state - 1;
    }

    return state;
}