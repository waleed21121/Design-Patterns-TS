import { NYPizzaIngredientFactory } from "../factories/new-york.factory";
import { Pizza } from "../pizza/abstract-pizza";
import { CheesePizza } from "../pizza/cheese-pizza";
import { ClamPizza } from "../pizza/clam-pizza";
import { PepperoniPizza } from "../pizza/pepproni-pizza";
import { VeggiePizza } from "../pizza/veggie-pizza";
import { PizzaStore } from "./abstract-pizza-store";

export class NYPizzaStore extends PizzaStore {
    private ingredientFactory = new NYPizzaIngredientFactory();

    protected createPizza(type: string): Pizza | null {
        let pizza: Pizza | null = null;

        if (type === "cheese") {
            pizza = new CheesePizza(this.ingredientFactory);
            pizza.setName("New York Style Cheese Pizza");
        } else if (type === "pepperoni") {
            pizza = new PepperoniPizza(this.ingredientFactory);
            pizza.setName("New York Style Pepperoni Pizza");
        } else if (type === "clam") {
            pizza = new ClamPizza(this.ingredientFactory);
            pizza.setName("New York Style Clam Pizza");
        } else if (type === "veggie") {
            pizza = new VeggiePizza(this.ingredientFactory);
            pizza.setName("New York Style Veggie Pizza");
        }

        return pizza;
    }

    public orderPizza(type: string): Pizza | null {
        const pizza = super.orderPizza(type);
        if (pizza) {
            console.log("(NY style: cut into square slices)\n");
        }
        return pizza;
    }
}