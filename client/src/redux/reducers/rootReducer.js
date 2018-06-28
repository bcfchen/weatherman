import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import weatherPageReducer from './weatherPageReducer';

const rootReducer = combineReducers({
	form: formReducer,
	weather: weatherPageReducer
});

export default rootReducer;