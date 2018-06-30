import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from 'redux/configureStore';
import App from './App/App';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);