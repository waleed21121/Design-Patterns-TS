import { GoatCheese } from "../ingredients/cheese";
import { Calamari } from "../ingredients/clam";
import { VeryThinCrust } from "../ingredients/dough";
import { SlicedPepperoni } from "../ingredients/pepperoni";
import { BruschettaSauce } from "../ingredients/sauce";
import { BlackOlives, Eggplant, Onion } from "../ingredients/veggies";
import { PizzaIngredientFactory } from "../interfaces/factory.interface";
import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from "../interfaces/ingredients";

export class CaliforniaPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): Dough {
        return new VeryThinCrust();
    }

    createSauce(): Sauce {
        return new BruschettaSauce();
    }

    createCheese(): Cheese {
        return new GoatCheese();
    }

    createVeggies(): Veggies[] {
        return [new BlackOlives(), new Onion(), new Eggplant()];
    }

    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    createClam(): Clams {
        return new Calamari();
    }
}