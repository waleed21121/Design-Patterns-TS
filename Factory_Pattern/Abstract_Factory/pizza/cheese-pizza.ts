import { PizzaIngredientFactory } from "../interfaces/factory.interface";
import { Pizza } from "./abstract-pizza";

export class CheesePizza extends Pizza {
    constructor(factory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = factory;
    }

    prepare(): void {
        console.log(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        console.log(`Tossing dough: ${this.dough}`);
        console.log(`Adding sauce: ${this.sauce}`);
        console.log(`Adding cheese: ${this.cheese}`);
    }
}