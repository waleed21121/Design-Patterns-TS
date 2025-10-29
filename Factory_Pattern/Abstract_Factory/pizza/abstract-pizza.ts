import { PizzaIngredientFactory } from "../interfaces/factory.interface";
import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from "../interfaces/ingredients";

export abstract class Pizza {
    name: string = "";
    dough: Dough = null!;
    sauce: Sauce = null!;
    veggies: Veggies[] = [];
    cheese: Cheese = null!;
    pepperoni: Pepperoni = null!;
    clam: Clams = null!;

    protected ingredientFactory: PizzaIngredientFactory;
    
    abstract prepare(): void;

    bake(): void {
        console.log("Bake for 25 minutes at 350");
    }

    cut(): void {
        console.log("Cutting the pizza into diagonal slices");
    }

    box(): void {
        console.log("Place pizza in official PizzaStore box");
    }

    setName(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}