import { Display } from "./display";
import { Observer } from "./observer";

export class ForecastDisplay implements Observer, Display {
    update(temp: number, humidity: number, pressure: number): void {
        
    }
    display(): void {
        
    }
}