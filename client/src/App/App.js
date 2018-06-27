import React, { Component } from 'react';
import '../App.css';
import WeatherPage from "../workflows/WeatherPage/WeatherPage";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <WeatherPage></WeatherPage>
            </div>
        );
    }
}
export default App; 
