// import libs
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/rootReducer';

// create the browser history object redux keeps track of
export const history = createHistory();

// create middleware (additional tools the redux can use)
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

// add developer tools enhancers array if in development mode
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
  	middleware.push(createLogger({
	  level: 'info',
	  collapsed: true,
	}));
    enhancers.push(devToolsExtension());
  }
}

// combine middleware and enhancers
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

// create function that when called returns a fully configured store
const configureStore = () => {
	return createStore(
  		rootReducer,
  		{},
  		composedEnhancers
	);
};

export default configureStore;