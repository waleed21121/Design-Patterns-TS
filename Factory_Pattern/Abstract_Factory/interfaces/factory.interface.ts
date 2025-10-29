import { Dough, Sauce, Cheese, Veggies, Pepperoni, Clams } from "./ingredients";

export interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createPepperoni(): Pepperoni;
    createClam(): Clams;
}