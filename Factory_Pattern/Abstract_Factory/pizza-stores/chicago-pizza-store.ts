import { ChicagoPizzaIngredientFactory } from "../factories/chicago.factory";
import { Pizza } from "../pizza/abstract-pizza";
import { CheesePizza } from "../pizza/cheese-pizza";
import { ClamPizza } from "../pizza/clam-pizza";
import { PepperoniPizza } from "../pizza/pepproni-pizza";
import { VeggiePizza } from "../pizza/veggie-pizza";
import { PizzaStore } from "./abstract-pizza-store";

export class ChicagoPizzaStore extends PizzaStore {

    private ingredientFactory = new ChicagoPizzaIngredientFactory();

    protected createPizza(type: string): Pizza | null {
        let pizza: Pizza | null = null;

        if (type === "cheese") {
            pizza = new CheesePizza(this.ingredientFactory);
            pizza.setName("Chicago Deep Dish Cheese Pizza");
        } else if (type === "pepperoni") {
            pizza = new PepperoniPizza(this.ingredientFactory);
            pizza.setName("Chicago Deep Dish Pepperoni Pizza");
        } else if (type === "clam") {
            pizza = new ClamPizza(this.ingredientFactory);
            pizza.setName("Chicago Deep Dish Clam Pizza");
        } else if (type === "veggie") {
            pizza = new VeggiePizza(this.ingredientFactory);
            pizza.setName("Chicago Deep Dish Veggie Pizza");
        }

        return pizza;
    }

    public orderPizza(type: string): Pizza | null {
        const pizza = super.orderPizza(type);
        if (pizza) {
            console.log("Bake for 35 minutes at 350°F (deep dish!)");
            console.log("(Chicago style: cut into square slices)\n");
        }
        return pizza;
    }
}