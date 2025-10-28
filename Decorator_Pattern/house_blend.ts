import { Beverage } from "./beverage";

export class HouseBlend extends Beverage {
    constructor() {
        super('House Blend')
    }

    cost(): number {
        return 0.89;
    }
}