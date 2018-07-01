import React from "react";
import Sunny from "react-icons/lib/ti/weather-sunny";
import Shower from "react-icons/lib/ti/weather-shower";
import Cloudy from "react-icons/lib/ti/weather-cloudy";
import Snow from "react-icons/lib/ti/weather-snow";

export const getWeatherIcon = weatherDesc => {
    let matchingIcon = <Sunny />;
    Object.keys(mappingRules).forEach(key => {
        let icon = mappingRules[key](weatherDesc);
        if (icon) {
            matchingIcon = icon;
            return;
        }
    });

    // return Sunny by default if no rule applies
    return matchingIcon;
};

const mappingRules = {
    sunny: weatherDesc => { if (weatherDesc.toLowerCase().indexOf("sunny") > -1) return <Sunny />; return null; },
    downpour: weatherDesc => { if (weatherDesc.toLowerCase().indexOf("downpour") > -1) return <Shower />; return null; },
    shower: weatherDesc => { if (weatherDesc.toLowerCase().indexOf("downpour") > -1) return <Shower />; return null; },
    rain: weatherDesc => { if (weatherDesc.toLowerCase().indexOf("rain") > -1) return <Shower />; return null; },
    stormy: weatherDesc => { if (weatherDesc.toLowerCase().indexOf("stormy") > -1) return <Shower />; return null; },
    snow: weatherDesc => { if (weatherDesc.toLowerCase().indexOf("cloud") > -1) return <Snow />; return null; },
    cloudy: weatherDesc => { if (weatherDesc.toLowerCase().indexOf("cloud") > -1) return <Cloudy />; return null; }
};
