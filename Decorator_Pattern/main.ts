import { Espresso } from "./espresso";
import { HouseBlend } from "./house_blend";
import { Mocha } from "./mocha";
import { Whip } from "./whip";

function main () {
    let beverage1 = new Espresso();
    let beverage2 = new HouseBlend();

    beverage1 = new Mocha(beverage1);
    beverage1 = new Whip(beverage1);

    console.log(beverage1.getDescription());
    console.log(beverage1.cost());
}

main();