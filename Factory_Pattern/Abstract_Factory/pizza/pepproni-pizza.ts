import { PizzaIngredientFactory } from "../interfaces/factory.interface";
import { Pizza } from "./abstract-pizza";

export class PepperoniPizza extends Pizza {
    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): void {
        console.log(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.pepperoni = this.ingredientFactory.createPepperoni();
        console.log(`  Dough: ${this.dough}`);
        console.log(`  Sauce: ${this.sauce}`);
        console.log(`  Cheese: ${this.cheese}`);
        console.log(`  Pepperoni: ${this.pepperoni}`);
    }
}