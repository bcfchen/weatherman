import { combineReducers } from 'redux';
import weatherPageReducer from './weatherPageReducer';

const rootReducer = combineReducers({
	weatherPage: weatherPageReducer
});

export default rootReducer;