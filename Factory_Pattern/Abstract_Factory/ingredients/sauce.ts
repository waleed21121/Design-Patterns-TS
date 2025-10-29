import { Sauce } from "../interfaces/ingredients";

export class MarinaraSauce implements Sauce {
    toString(): string { return "Marinara Sauce"; }
}

export class PlumTomatoSauce implements Sauce {
    toString(): string { return "Plum Tomato Sauce"; }
}

export class BruschettaSauce implements Sauce {
    toString(): string { return "Bruschetta Sauce"; }
}