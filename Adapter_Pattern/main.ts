import { TurkeyAdapter } from "./adapters/turkey-duck-adapter";
import { MallardDuck } from "./concretes/concrete-duck";
import { WildTurkey } from "./concretes/concrete-turkey";
import { IDuck } from "./interfaces/duck";

function testDuck(duck: IDuck) {
    duck.quack();
    duck.fly();
    console.log('#'.repeat(15));
}

function main() {
    const realDuck = new MallardDuck();
    const turkey = new WildTurkey();
    const turkeyInDisguise = new TurkeyAdapter(turkey); // The magic!

    console.log("The real duck says:");
    testDuck(realDuck);

    console.log("The turkey says:");
    turkey.gobble();
    turkey.fly();
    console.log("---");

    console.log("The turkey ADAPTED as a duck says:");
    testDuck(turkeyInDisguise); // Looks exactly like a duck!

    /**
     *  @error: we cannot pass the real turkey as a duck but we could have done this with the adapter.
     *  testDuck(turkey) => error
     */
}

main();