import { Pizza } from "../pizza/abstract-pizza";

export abstract class PizzaStore {

    protected abstract createPizza(type: string): Pizza | null;
    
    public orderPizza(type: string): Pizza | null {
        const pizza = this.createPizza(type);

        if (!pizza) {
            console.log(`Sorry, we don't have ${type} pizza.`);
            return null;
        }

        console.log(`--- Making a ${pizza.getName()} ---`);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}