import { DefaultPizza, Pizza } from "../pizza";
import { PizzaStore } from "../pizza_store";
import { NYStyleCheesePizza, NYStyleClamPizza, NYStylePepperoniPizza, NYStyleVeggiePizza } from "../pizzas/new-york-style.pizza";

export class NewYorkStylePizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        if(type === 'cheese') {
            return new NYStyleCheesePizza();
        } else if (type === 'pepproni') {
            return new NYStylePepperoniPizza();
        } else if (type === 'clam') {
            return new NYStyleClamPizza();
        } else if (type === 'veggie') {
            return new NYStyleVeggiePizza();
        } else {
            return new DefaultPizza();
        }
    }
}