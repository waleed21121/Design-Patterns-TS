import { Veggies } from "../interfaces/ingredients";

export class Garlic implements Veggies {
    toString(): string { return "Garlic"; }
}

export class Onion implements Veggies {
    toString(): string { return "Onion"; }
}

export class Mushroom implements Veggies {
    toString(): string { return "Mushroom"; }
}

export class RedPepper implements Veggies {
    toString(): string { return "Red Pepper"; }
}

export class BlackOlives implements Veggies {
    toString(): string { return "Black Olives"; }
}

export class Spinach implements Veggies {
    toString(): string { return "Spinach"; }
}

export class Eggplant implements Veggies {
    toString(): string { return "Eggplant"; }
}