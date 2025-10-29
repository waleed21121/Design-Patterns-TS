import { ReggianoCheese } from "../ingredients/cheese";
import { FreshClams } from "../ingredients/clam";
import { ThinCrustDough } from "../ingredients/dough";
import { SlicedPepperoni } from "../ingredients/pepperoni";
import { MarinaraSauce } from "../ingredients/sauce";
import { Garlic, Mushroom, Onion, RedPepper } from "../ingredients/veggies";
import { PizzaIngredientFactory } from "../interfaces/factory.interface";
import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from "../interfaces/ingredients";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): Dough {
        return new ThinCrustDough();
    }

    createCheese(): Cheese {
        return new ReggianoCheese()
    }

    createSauce(): Sauce {
        return new MarinaraSauce();
    }

    createVeggies(): Veggies[] {
        return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
    }

    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    createClam(): Clams {
        return new FreshClams();
    }
}