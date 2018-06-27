import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from 'redux/configureStore';
import App from './App/App';
let initStore = store();
ReactDOM.render(
    <Provider store={initStore}>
        <div>
            <Router>
                <div>
                    <Route exact path="/" component={App} />
                </div>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);