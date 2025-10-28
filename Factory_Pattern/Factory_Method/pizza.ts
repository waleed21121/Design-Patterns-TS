export abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    toppings: string[];

    public prepare(): void {
        console.log(`preparing: ${this.name}...`);
        console.log(`tossing dough: ${this.dough}...`);
        console.log(`adding sauce: ${this.sauce}...`);
        console.log(`adding toppings: ${this.toppings}...`);
    }

    public bake(): void {
        console.log(`bake for 25 minutes at 250`);
    }

    public cut(): void {
        console.log(`cutting pizza in diagonal slices`);
    }

    public box(): void {
        console.log(`place pizza in official pizzastore box`);
    }

    public getName(): string {
        return this.name
    }
}

export class DefaultPizza extends Pizza {
    constructor() {
        super();
    }
}