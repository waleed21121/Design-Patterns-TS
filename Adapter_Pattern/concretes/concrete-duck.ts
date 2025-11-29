import { IDuck } from "../interfaces/duck";

export class MallardDuck implements IDuck {
    quack() {
        console.log("Quack! Quack!");
    }

    fly() {
        console.log("I'm flying with duck wings!");
    }
}