import * as actions from '../constants/action-types';
import initialState from './initialState'

export function uiReducer(state = initialState.ui, action) {
    let newState;
    switch (action.type) {
        case actions.FORM_VALIDATION_RESULTS:
            newState = { ...state };
            newState[action.formName].validationResults = action.validationResults;
            break;

        case actions.SHOW_MODAL:
            newState = { ...state };
            newState.app.currentModal = state.app.currentModal === action.modalName ? null : action.modalName;
            break;

        default:
            break;
    }
    return newState || state;
};