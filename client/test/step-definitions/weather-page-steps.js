// ./step-definitions/weather-page-steps.js

module.exports = function () {
    this.page = page.weatherPage;

    this.Given(/^I am on the weatherman app$/, async () => {
        await this.page.open();
        await this.page.waitTillPageLoaded();
        return;
    });

    this.Then(/^I should see the current temperature$/, async () => {
        let text = await this.page.getCurrentTemperatureElem().getText();
        expect(text.length).to.not.equal(0);
    });

    this.Then(/^I should see the current location$/, async () => {
        let locationText = await this.page.getCurrentLocationElem().getText();
        expect(locationText.length).to.not.equal(0);
    });

    this.When(/^I search for the location "([^"]*)"$/, async newLocationText => {
        await this.page.searchNewLocation(newLocationText);
        return;
    });

    this.When(/^I drag down to refresh$/, async () => {
        await this.page.dragDownToRefresh();
        await this.page.waitTillPageLoaded();
        return;
    });

    this.Then(/^I should see the location updated to "([^"]*)"$/, async expectedLocationText => {
        let locationText = await this.page.getCurrentLocationElem().getText();
        expect(locationText.indexOf(expectedLocationText)).to.not.equal(-1);
    });

    this.Then(/^I should see the location not equal to "([^"]*)"$/, async unexpectedLocationText => {
        let locationText = await this.page.getCurrentLocationElem().getText();
        expect(locationText.indexOf(unexpectedLocationText)).to.equal(-1);
    });
};