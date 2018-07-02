import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const WeatherChart = ({ hourlyForecasts }) => {
    const options = {
        responsive: {
            rules: [{
                condition: {
                    maxHeight: 1
                }
            }]
        },
        chart: {
            backgroundColor: null,
            height: "180px"
        },
        title: {
            text: null,
        },
        tooltip: {
            enabled: false
        },
        xAxis: {
            visible: false
        },
        yAxis: {
            visible: false
        },
        plotOptions: {
            series: {
                showInLegend: false,
                marker: {
                    enabled: false
                }
            }
        },
        series: [{
            data: hourlyForecasts.map(forecast => forecast.temperature),
            type: "spline",
            color: "#fff"
        }]
    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />);
}

export default WeatherChart;