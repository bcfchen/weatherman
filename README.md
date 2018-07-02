# weatherman

![alt text](https://images-na.ssl-images-amazon.com/images/I/51JTWC5Y4HL.jpg "Weather Man Logo")
## Weather forecasts. Anywhere. Anytime.
Application features include:
- Displays weather conditions for current location by default
- Provides temperature forecast visualization for the next 12 hours 
- Shows weather forecast for the next 5 days
- User can search for any location by clicking on the location label
- background color changes depending on daytime/nighttime

#### To run
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
#### To use
Navigate to localhost:3000 (if not there already) to view current weather
![alt text](https://s8.postimg.cc/lzca12svp/Screen_Shot_2018-07-02_at_1.23.17_AM.png "Nighttime Screenshot")


Click on location name to search for new location. If new location is currently daytime, background will change to daytime theme


![alt text](https://s8.postimg.cc/dh2twr9id/Screen_Shot_2018-07-02_at_1.21.32_AM.png "Daytime Screenshot")

Click on refresh icon below current temperature to reload data


#### Main libraries & services used
- __React/Redux__
- __Material-ui__ for components and typography
- __Accuweather__ for weather data
- __react-select__ for location name search autocomplete 
- __highcharts__ for temperature visualization

