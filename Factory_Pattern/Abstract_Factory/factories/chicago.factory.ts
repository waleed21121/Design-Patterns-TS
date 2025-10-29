import { MozzarellaCheese } from "../ingredients/cheese";
import { FrozenClams } from "../ingredients/clam";
import { ThickCrustDough } from "../ingredients/dough";
import { SlicedPepperoni } from "../ingredients/pepperoni";
import { PlumTomatoSauce } from "../ingredients/sauce";
import { BlackOlives, Spinach, Eggplant } from "../ingredients/veggies";
import { PizzaIngredientFactory } from "../interfaces/factory.interface";
import { Dough, Sauce, Cheese, Veggies, Pepperoni, Clams } from "../interfaces/ingredients";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): Dough {
        return new ThickCrustDough();
    }

    createSauce(): Sauce {
        return new PlumTomatoSauce();
    }

    createCheese(): Cheese {
        return new MozzarellaCheese();
    }

    createVeggies(): Veggies[] {
        return [new BlackOlives(), new Spinach(), new Eggplant()];
    }

    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    createClam(): Clams {
        return new FrozenClams();
    }
}