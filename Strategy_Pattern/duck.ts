import { FlyBehavior } from "./flyBehavior";
import { QuackBehavior } from "./quackBehavior";

export abstract class Duck {
    flyBehavior: FlyBehavior
    quackBehavior: QuackBehavior

    constructor (flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
        this.flyBehavior = flyBehavior
        this.quackBehavior = quackBehavior
    }

    display(): void {}

    performFly() {
        this.flyBehavior.fly()
    }

    performQuack() {
        this.quackBehavior.quack()
    }

    swim() {
        console.log("All ducks float, even decoys!");
    }

    setFlyBehavior (fb: FlyBehavior): void {
        this.flyBehavior = fb
    }

    setQuackBehavior (qb: QuackBehavior): void {
        this.quackBehavior = qb
    }
}