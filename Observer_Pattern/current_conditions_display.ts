import { Display } from "./display";
import { Observer } from "./observer";
import { Subject } from "./subject";

export class CurrentConditionsDisplay implements Observer, Display {

    private temperature: number;
    private humidity: number;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
        this.temperature = 0;
        this.humidity = 0;
    }

    update(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }
    display(): void {
        console.log('#'.repeat(20));
        console.log(`Current Conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
        console.log('#'.repeat(20));
    }
}