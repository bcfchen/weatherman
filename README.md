# weatherman

![alt text](https://images-na.ssl-images-amazon.com/images/I/51JTWC5Y4HL.jpg "Weather Man Logo")
## Weather forecasts. Anywhere. Anytime.
Application features:
- Displays weather conditions for current location by default
- Search for location by clicking on the location label
- Pull down to reload data
- Trendline to visualize temperature for next 12 hours 
- Weather forecast for the next 5 days
- Background color changes depending on daytime/nighttime
- Development items visible on trello board ![Weatherman Trello](https://trello.com/b/IeEqHBs4/weather-man, "Weatherman Link")

## Assumptions and caveats
- App was mainly designed with __mobile web__, though dev and testing was done on desktop for convenience
- Development and testing done on Chrome 67.0.3396.79 
- Pull down to reload data will reload data for user's current physical location

### To run
Clone this repo with 
```
git clone https://github.com/bcfchen/weatherman
```
cd into the __weatherman/client__ folder and install npm packages by:
```
npm install
```
Run the project by:
```
npm start
```
The page should automatically open up in your browser at __localhost:3000__
### To use
Navigate to localhost:3000 (if not there already) to view current weather
![alt text](https://s8.postimg.cc/dovz9n54l/Screen_Shot_2018-07-03_at_2.03.57_AM.png "Nighttime Screenshot")


Click on location name to search for new location. If new location is currently daytime, background will change to daytime theme


![alt text](https://s8.postimg.cc/5w5bhnjpx/Screen_Shot_2018-07-03_at_2.04.31_AM.png "Daytime Screenshot")

Drag down anywhere on the page to reload data (for your current location)


### Main libraries & services used
- __React/Redux__
- __Material-ui__ for components and typography
- __Accuweather__ for weather data
- __react-select__ for location name search autocomplete 
- __highcharts__ for temperature visualization

