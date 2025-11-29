import { IDuck } from "../interfaces/duck";
import { ITurkey } from "../interfaces/turkey";

export class TurkeyAdapter implements IDuck {
    constructor(private turkey: ITurkey) { }

    // Duck wants quack() → translate to gobble()
    quack() {
        this.turkey.gobble();
    }

    // Duck flies long → turkey flies short, so we call it 5 times
    fly() {
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}