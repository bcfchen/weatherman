
// ./page-objects/weather-page.js

class WeatherPageClass {
    constructor() {
        this.url = "http://localhost:3000";
    }

    open() {
        return helpers.loadPage(this.url);
    }

    waitTillPageLoaded() {
        let elem = driver.findElement(by.css(".current-temperature"));
        return driver.wait(until.elementIsVisible(elem));
    }

    waitForProgressIndicator() {
        let elem = driver.findElement(by.css(".progress-indicator"));
        return driver.wait(until.elementLocated(elem));
    }

    async waitForSelectMenu() {
        let selectMenuOuterElem = driver.findElement(by.css(".Select-menu-outer"));
        await driver.wait(until.elementIsVisible(selectMenuOuterElem));
        let selectMenuElem = driver.findElement(by.css(".Select-menu"));
        return driver.wait(until.elementIsVisible(selectMenuElem));
    }

    async searchNewLocation(newLocationText) {
        let locationInputElem = driver.findElement(by.css(".Select-input input"));
        await locationInputElem.sendKeys(newLocationText);
        await this.waitForSelectMenu();
        return driver.findElement(by.css(".Select-option")).click();
    }

    getCurrentLocationElem() {
        return driver.findElement(by.css(".Select-value-label"));
    }

    getCurrentTemperatureElem() {
        return driver.findElement(by.css(".current-temperature"));
    };
}

module.exports = new WeatherPageClass();