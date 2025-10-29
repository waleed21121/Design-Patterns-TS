import { Cheese } from "../interfaces/ingredients";

export class ReggianoCheese implements Cheese {
    toString(): string { return "Reggiano Cheese"; }
}

export class MozzarellaCheese implements Cheese {
    toString(): string { return "Mozzarella Cheese"; }
}

export class GoatCheese implements Cheese {
    toString(): string { return "Goat Cheese"; }
}