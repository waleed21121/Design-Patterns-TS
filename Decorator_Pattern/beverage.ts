export abstract class Beverage {
    public description: string;
    constructor(desc: string = 'Unknown Beverage') {
        this.description = desc;
    }

    getDescription(): string {
        return this.description;
    }

    abstract cost (): number;
}