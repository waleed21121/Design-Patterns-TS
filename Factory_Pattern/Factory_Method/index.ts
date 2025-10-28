import { Pizza } from "./pizza";
import { PizzaStore } from "./pizza_store";
import { ChicagoStylePizzaStore } from "./stores/chicago-pizza-store";
import { NewYorkStylePizzaStore } from "./stores/new-york-pizza-store";

function main() {
    const nyStore: PizzaStore = new NewYorkStylePizzaStore();
    const chicagoStore: PizzaStore = new ChicagoStylePizzaStore();

    let pizza: Pizza = nyStore.orderPizza('cheese');
    console.log(`Ethan ordered a ${pizza.getName()}`);
    
    pizza = chicagoStore.orderPizza('cheese');
    console.log(`Joel ordered a ${pizza.getName()}`);
}

main();