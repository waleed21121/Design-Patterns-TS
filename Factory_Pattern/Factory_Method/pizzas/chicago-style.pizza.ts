import { Pizza } from "../pizza";

export class ChicagoStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago Style Deep Dish Cheese Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";
        this.toppings = ["Shredded Mozzarella Cheese"];
    }

    public cut(): void {
        console.log("Cutting the pizza into square slices (Chicago deep dish style!)");
    }

    public bake(): void {
        console.log("Bake for 35 minutes at 350°F (deep dish takes longer)");
    }
}

export class ChicagoStylePepperoniPizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago Style Deep Dish Pepperoni Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";
        this.toppings = ["Sliced Pepperoni", "Mozzarella", "Black Olives", "Oregano"];
    }

    public cut(): void {
        console.log("Cutting the pizza into square slices (Chicago deep dish style!)");
    }

    public bake(): void {
        console.log("Bake for 35 minutes at 350°F (deep dish takes longer)");
    }
}

export class ChicagoStyleClamPizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago Style Deep Dish Clam Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "White Garlic Sauce";
        this.toppings = ["Fresh Clams", "Parmesan", "Garlic"];
    }

    public cut(): void {
        console.log("Cutting the pizza into square slices (Chicago deep dish style!)");
    }

    public bake(): void {
        console.log("Bake for 35 minutes at 350°F (deep dish takes longer)");
    }
}

export class ChicagoStyleVeggiePizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago Style Deep Dish Veggie Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";
        this.toppings = ["Spinach", "Mushrooms", "Onions", "Red Peppers"];
    }

    public cut(): void {
        console.log("Cutting the pizza into square slices (Chicago deep dish style!)");
    }

    public bake(): void {
        console.log("Bake for 35 minutes at 350°F (deep dish takes longer)");
    }
}