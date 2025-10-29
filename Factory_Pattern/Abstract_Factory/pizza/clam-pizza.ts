import { PizzaIngredientFactory } from "../interfaces/factory.interface";
import { Pizza } from "./abstract-pizza";

export class ClamPizza extends Pizza {
    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): void {
        console.log(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.clam = this.ingredientFactory.createClam();
        console.log(`  Dough: ${this.dough}`);
        console.log(`  Sauce: ${this.sauce}`);
        console.log(`  Clams: ${this.clam}`);
    }
}