import { Dough } from "../interfaces/ingredients";

export class ThinCrustDough implements Dough {
    toString(): string { return "Thin Crust Dough"; }
}

export class ThickCrustDough implements Dough {
    toString(): string { return "Thick Crust Dough"; }
}

export class VeryThinCrust implements Dough {
    toString(): string { return "Very Thin Crust"; }
}