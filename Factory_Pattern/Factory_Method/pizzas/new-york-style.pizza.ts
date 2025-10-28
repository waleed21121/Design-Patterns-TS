import { Pizza } from "../pizza";

export class NYStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Cheese Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";
        this.toppings = ["Grated Reggiano Cheese"];
    }

    public cut(): void {
        console.log("Cutting the pizza into square slices (NY style!)");
    }
}

export class NYStylePepperoniPizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Pepperoni Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";
        this.toppings = ["Sliced Pepperoni", "Mozzarella", "Oregano"];
    }

    public cut(): void {
        console.log("Cutting the pizza into square slices (NY style!)");
    }
}

export class NYStyleClamPizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Clam Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "White Garlic Sauce";
        this.toppings = ["Fresh Clams", "Parmesan", "Oregano"];
    }

    public cut(): void {
        console.log("Cutting the pizza into square slices (NY style!)");
    }
}

export class NYStyleVeggiePizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Veggie Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";
        this.toppings = ["Mushrooms", "Onions", "Bell Peppers", "Olives"];
    }

    public cut(): void {
        console.log("Cutting the pizza into square slices (NY style!)");
    }
}