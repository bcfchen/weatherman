
// ./page-objects/weather-page.js

class WeatherPageClass {
    constructor() {
        this.url = "http://localhost:3000";
    }

    open() {
        return helpers.loadPage(this.url);
    }

    /* wait for spinning wheel to appear and then disappear to assert page has loaded */
    async waitTillPageLoaded() {
        let elem = driver.findElement(by.css(".progress-indicator"));
        await driver.wait(until.elementIsVisible(elem));

        /* 
         * using this to assert spinning wheel has disappeared. checking with driver.findElements 
         * instead of until.elementIsNotVisible to avoid stale element error
         */
        await driver.wait(async () => {
            let isPresent = await driver.findElements(by.css(".progress-indicator"));
            return isPresent.length < 1;
        }, 10000);
        return;
    }

    async waitForSelectMenu() {
        let selectMenuOuterElem = driver.findElement(by.css(".Select"));
        await driver.wait(until.elementIsVisible(selectMenuOuterElem));
        let selectMenuElem = driver.findElement(by.css(".Select-menu"));
        return await driver.wait(until.elementIsVisible(selectMenuElem));
    }

    async searchNewLocation(newLocationText) {
        let locationInputElem = driver.findElement(by.css(".Select-input input"));
        await locationInputElem.sendKeys(newLocationText);
        await this.waitForSelectMenu();
        return locationInputElem.sendKeys(selenium.Key.ENTER);
    }

    async dragDownToRefresh() {
        let currentLocationElem = await this.getCurrentLocationElem();
        await driver.actions().dragAndDrop(currentLocationElem, { x: 0, y: 1000 }).perform();
    }

    getCurrentLocationElem() {
        return driver.findElement(by.css(".Select-value-label"));
    }

    getCurrentTemperatureElem() {
        return driver.findElement(by.css(".current-temperature"));
    };
}

module.exports = new WeatherPageClass();