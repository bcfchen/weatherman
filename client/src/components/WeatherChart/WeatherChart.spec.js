import React from "react";
import { shallow } from "enzyme";
import WeatherChart from "./WeatherChart";
import Highcharts from "highcharts/highstock";
import HourlyForecast from "../../models/HourlyForecast";
jest.mock("highcharts/highstock", () => () => { });

describe("<WeatherChart/>", () => {
    let defaultWeatherProps = {
        Temperature: {
            Value: 15
        },
        Wind: {
            Speed: {
                Value: 6
            }
        },
        IconPhrase: "Sunny"
    };
    let defaultProps = {
        isLoading: true,
        hourlyForecasts: [new HourlyForecast(defaultWeatherProps)]
    };

    let component = null;
    let render = (props = defaultProps) => {
        component = shallow(<WeatherChart {...props} />);
    };

    describe("on page load", () => {
        it("should render correctly", () => {
            render();
            expect(component).toMatchSnapshot();
        });
    });
});
