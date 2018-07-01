import React, { Component } from 'react';
import '../App.css';
import WeatherPage from "../workflows/WeatherPage/WeatherPage";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="app">
                    <WeatherPage></WeatherPage>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default App; 
