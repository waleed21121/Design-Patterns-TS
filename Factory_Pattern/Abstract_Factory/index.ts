import { CaliforniaPizzaStore } from "./pizza-stores/califorbia-pizza-store";
import { ChicagoPizzaStore } from "./pizza-stores/chicago-pizza-store";
import { NYPizzaStore } from "./pizza-stores/new-york-pizza-store";

function main() {
    const nyPizzaStore = new NYPizzaStore();
    const chicagoPizzaStore = new ChicagoPizzaStore()
    const californiaPizzaStore = new CaliforniaPizzaStore();

    console.log("=== Ethan orders a cheese pizza from NY ===");
    nyPizzaStore.orderPizza("cheese");

    console.log("\n=== Joel orders a clam pizza from Chicago ===");
    chicagoPizzaStore.orderPizza("clam");

    console.log("\n=== Joel orders a clam pizza from California ===");
    californiaPizzaStore.orderPizza("veggie");
}

main();