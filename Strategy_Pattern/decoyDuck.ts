import { Duck } from "./duck";
import { FlyNoWay } from "./flyBehavior";
import { MuteQuack } from "./quackBehavior";

export class DecoyDuck extends Duck {
    constructor () {
        super(new FlyNoWay(), new MuteQuack())
    }

    display(): void {
        console.log("I'm a real Decoy duck!!");
    }
}