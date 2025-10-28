import { Beverage } from "./beverage";
import { CondimentDecorator } from "./condiment_decorator";

export class Whip extends CondimentDecorator {
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super('Whip');
        this.beverage = beverage
    }

    cost(): number {
        return 0.10 + this.beverage.cost();
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', ' + this.description;
    }
}