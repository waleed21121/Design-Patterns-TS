export class Singleton {
    private static instance: Singleton | null = null;

    private constructor() {
        console.log("Singleton instance created");
    }

    // Global access point
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public doSomething(): void {
        console.log("Hello from the one and only Singleton!");
    }
}