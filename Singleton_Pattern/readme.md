## Singleton Pattern

> **"Ensure a class has only one instance, and provide a global point of access to it."**

The Singleton pattern is one of the simplest yet most controversial design patterns. It guarantees that **only one object** of a class exists in the entire application and gives everyone easy access to it.

### When to Use Singleton

Use Singleton when **exactly one instance** of a class is needed across the system:

| Real-World Examples | Why Singleton? |
|---------------------|----------------|
| Configuration manager | Only one set of app settings |
| Logger | All logs go through one object |
| Database connection pool | One pool shared by all requests |
| Cache | One in-memory cache |
| Thread pool | Single pool of worker threads |
| Runtime / Application context | One global state |

Avoid using Singleton for:
- Objects that need multiple instances
- Testing (hard to mock)
- Just to "share data" — consider Dependency Injection instead

### Benefits

| Benefit | Explanation |
|-------|-------------|
| Controlled global access | One place to get the instance |
| Lazy initialization | Object created only when first needed |
| Reduced memory usage | Only one instance ever exists |
| Global state management | Consistent state across the app |

### TypeScript Implementation (Classic Singleton)

```ts
// singleton/Singleton.ts

export class Singleton {
  private static instance: Singleton | null = null;

  // Private constructor prevents direct instantiation
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

  // Example method
  public doSomething(): void {
    console.log("Hello from the one and only Singleton!");
  }
}