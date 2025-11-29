import { ITurkey } from "../interfaces/turkey";

export class WildTurkey implements ITurkey {
    gobble() {
        console.log("Gobble gobble!");
    }

    fly() {
        console.log("I'm flying a short distance (turkey style)");
    }
}