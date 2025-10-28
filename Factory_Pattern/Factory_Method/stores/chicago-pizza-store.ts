import { DefaultPizza, Pizza } from "../pizza";
import { PizzaStore } from "../pizza_store";
import { ChicagoStyleCheesePizza, ChicagoStyleClamPizza, ChicagoStylePepperoniPizza, ChicagoStyleVeggiePizza } from "../pizzas/chicago-style.pizza";

export class ChicagoStylePizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        if(type === 'cheese') {
            return new ChicagoStyleCheesePizza();
        } else if (type === 'pepproni') {
            return new ChicagoStylePepperoniPizza();
        } else if (type === 'clam') {
            return new ChicagoStyleClamPizza();
        } else if (type === 'veggie') {
            return new ChicagoStyleVeggiePizza();
        } else {
            return new DefaultPizza();
        }
    }
}