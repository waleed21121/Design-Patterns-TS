import { CurrentConditionsDisplay } from "./current_conditions_display";
import { WeatherData } from "./weather_data"

function main () {
    let weatherData: WeatherData = new WeatherData();
    let currenConditionDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.setMeasurements(78, 90, 30.4);
}
main()