import { combineReducers } from 'redux';
import weatherPageReducer from './weatherPageReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	weatherPage: weatherPageReducer,
	ajaxCallsInProgress
});

export default rootReducer;