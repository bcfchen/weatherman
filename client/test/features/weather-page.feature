# ./features/weather-pagefeature

Feature: Visualizing weather on weatherman app
    As an internet user
    In order to find out about the weather
    I want to be able to visualize weather info on weatherman

Scenario: Visualizing temperature of current location
    Given I am on the weatherman app
    Then I should see the current temperature
    And I should see the current location

Scenario: Searching for weather at different location
    Given I am on the weatherman app
    When I search for the location "Chicago"
    Then I should see the location updated to "Chicago, United States"

Scenario: Refreshing data on weatherman
    Given I am on the weatherman app
    When I search for the location "Abu Dhabi"
    Then I should see the location updated to "Abu Dhabi, United Arab Emirates"    
    When I drag down to refresh
    Then I should see the location not equal to "Abu Dhabi, United Arab Emirates"