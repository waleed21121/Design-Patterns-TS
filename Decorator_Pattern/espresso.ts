import { Beverage } from "./beverage";

export class Espresso extends Beverage {
    constructor() {
        super('Espresso')
    }

    cost(): number {
        return 1.99;
    }
}