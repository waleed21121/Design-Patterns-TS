import { Beverage } from "./beverage";

export abstract class CondimentDecorator extends Beverage {
    constructor(desc: string = 'Unknown Condiment') {
        super(desc);
    }
}