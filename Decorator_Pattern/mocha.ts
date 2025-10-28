import { Beverage } from "./beverage";
import { CondimentDecorator } from "./condiment_decorator";

export class Mocha extends CondimentDecorator {
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super('Mocha');
        this.beverage = beverage
    }

    cost(): number {
        return 0.20 + this.beverage.cost();
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', ' + this.description;
    }
}