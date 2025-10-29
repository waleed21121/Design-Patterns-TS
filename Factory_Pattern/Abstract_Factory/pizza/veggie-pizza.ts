import { PizzaIngredientFactory } from "../interfaces/factory.interface";
import { Pizza } from "./abstract-pizza";

export class VeggiePizza extends Pizza {
    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): void {
        console.log(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.veggies = this.ingredientFactory.createVeggies();
        console.log(`  Dough: ${this.dough}`);
        console.log(`  Sauce: ${this.sauce}`);
        console.log("  Veggies:");
        this.veggies.forEach(v => console.log(`    - ${v}`));
    }
}