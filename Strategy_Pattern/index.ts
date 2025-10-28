import { DecoyDuck } from "./decoyDuck";
import { Duck } from "./duck";
import { FlyRocketPowered } from "./flyBehavior";
import { MallardDuck } from "./mallardDuck";
import { Squeak } from "./quackBehavior";


// With strategy pattern, we separated the algorithms that change and used by some of the classes
// from those still the same between all the classes


// Now we can change the code in one block only

// also, we can change the behaviors in the runtime

function main() {

    let mallard: Duck = new MallardDuck();
    
    // Used the encapsulated fly and quack
    mallard.performFly()
    mallard.performQuack()

    let decoy: Duck = new DecoyDuck();

    decoy.performFly();
    // change the behavior at runtime
    decoy.setFlyBehavior(new FlyRocketPowered())
    decoy.setQuackBehavior(new Squeak())

    decoy.performFly()
    decoy.performQuack()
}

main();