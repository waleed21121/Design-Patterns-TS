import { Duck } from "./duck";
import { FlyWithWings } from "./flyBehavior";
import { Quack } from "./quackBehavior";

export class MallardDuck extends Duck {
    constructor () {
        super(new FlyWithWings(), new Quack())
    }

    display(): void {
        console.log("I'm a real Mallard duck!!");
    }
}