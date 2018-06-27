import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import App from '../App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(connect(<App />), div);
    ReactDOM.unmountComponentAtNode(div);
});
