import { Clams } from "../interfaces/ingredients";

export class FreshClams implements Clams {
    toString(): string { return "Fresh Clams from Long Island Sound"; }
}

export class FrozenClams implements Clams {
    toString(): string { return "Frozen Clams from Chesapeake Bay"; }
}

export class Calamari implements Clams {
    toString(): string { return "Calamari (treated as clams)"; }
}