import { Duck } from "./duck";
import { FlyNoWay } from "./flyBehavior";
import { Quack } from "./quackBehavior";

export class RubberDuck extends Duck {
    constructor () {
        super(new FlyNoWay(), new Quack())
    }

    display(): void {
        console.log("I'm a real Rubber duck!!");
    }
}