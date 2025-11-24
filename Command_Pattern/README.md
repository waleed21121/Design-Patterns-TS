# Command Pattern README

Welcome to the Command Pattern implementation in TypeScript! This README explains the pattern in the spirit of *Head First Design Patterns*, using our ongoing examples (like the remote control for lights and stereos)

## Problem It Solves

The Command Pattern solves the problem of **decoupling the requester of an action from the object that performs the action**. Without it, your code can become tightly coupled: buttons or UI elements directly call methods on devices (e.g., a button hard-wired to `light.on()`). This makes it hard to:

- Add undo/redo functionality.
- Queue or log requests.
- Support macros (multiple actions in one command).
- Change behaviors dynamically without rewriting code.

It also violates the **Single Responsibility Principle** (SRP) and **Open-Closed Principle** (OCP), as adding new actions requires modifying existing classes.

In short: It turns requests into standalone objects, making your system more flexible, extensible, and testable.

## Example of Bad Practice (Before Using Command)

Imagine a simple remote control without the Command Pattern. Here's some "bad" TypeScript code where the invoker (remote) is tightly coupled to receivers (light and stereo). Adding undo or a new device means hacking the `RemoteControl` class every time — nightmare for maintenance!

```typescript
// BadRemoteControl.ts (tight coupling everywhere!)
class BadRemoteControl {
  private light: Light;
  private stereo: Stereo;

  constructor(light: Light, stereo: Stereo) {
    this.light = light;
    this.stereo = stereo;
  }

  // Each button is hard-wired to a specific action
  pressLightOn() {
    this.light.on();
  }

  pressLightOff() {
    this.light.off();
  }

  pressStereoOnWithCD() {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume(11);
  }

  pressStereoOff() {
    this.stereo.off();
  }

  // No undo! If you want it, you'd have to add state tracking here for EVERY action.
  // Want a macro? Add another method. Want to swap actions? Rewrite the class.
}

// Usage
const light = new Light("Living Room");
const stereo = new Stereo("Living Room");
const remote = new BadRemoteControl(light, stereo);

remote.pressLightOn();  // Works, but inflexible
// Output: Living Room Light is On
```

Problems here:
- **Coupling**: `BadRemoteControl` knows *everything* about `Light` and `Stereo`.
- **Scalability**: Adding a garage door? Modify the class and add more methods.
- **No Undo/Queue**: Impossible without bloating the remote with state for each device.
- **Violates OCP**: Closed for extension — can't add behaviors without changing code.

## Definition and Pros

### Definition
The **Command Pattern** encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

Key players (from the Gang of Four):
- **Command**: Interface declaring `execute()` (and often `undo()`).
- **ConcreteCommand**: Binds a receiver to an action (e.g., `LightOnCommand` calls `light.on()`).
- **Receiver**: Performs the actual work (e.g., `Light`, `Stereo`).
- **Invoker**: Triggers the command (e.g., `RemoteControl` calls `command.execute()`).
- **Client**: Creates commands and sets them on the invoker.

It's a behavioral pattern that turns methods into first-class objects.

### Pros
- **Decoupling**: Invoker doesn't know about receivers — just calls `execute()`.
- **Undo/Redo**: Easy to implement by storing commands and calling `undo()`.
- **Macros**: Compose multiple commands into one (e.g., "Party Mode").
- **Queuing/Logging**: Commands can be queued, delayed, or logged.
- **Extensibility**: Add new commands without changing existing code (OCP compliant).
- **Testability**: Commands are easy to mock and test in isolation.
- **Flexibility**: Supports dynamic behavior changes at runtime.

Cons (for balance): Can lead to many small classes if overused.

## Architecture of the Pattern

Here's a UML class diagram showing the structure of the Command Pattern:

```mermaid
classDiagram
    direction TB

    class Command {
        <<interface>>
        +execute() void
        +undo() void
        +getName() string
    }

    class NoCommand {
        +execute()
        +undo()
    }

    class LightOnCommand {
        -light: ILight
        +execute()
        +undo()
    }

    class LightOffCommand {
        -light: ILight
        +execute()
        +undo()
    }

    class StereoOnWithCDCommand {
        -stereo: IStereo
        +execute()
        +undo()
    }

    class StereoOffCommand {
        -stereo: IStereo
        +execute()
        +undo()
    }

    class MacroCommand {
        -commands: Command[]
        +execute()
        +undo()
    }

    class RemoteControl {
        -onCommands: Command[]
        -offCommands: Command[]
        -undoCommand: Command
        +setCommand(slot, onCmd, offCmd)
        +onButtonWasPushed(slot)
        +offButtonWasPushed(slot)
        +undoButtonWasPushed()
    }

    class ILight {
        <<interface>>
        +on()
        +off()
    }

    class Light {
        -location: string
        +on()
        +off()
    }

    class IStereo {
        <<interface>>
        +on()
        +off()
        +setCd()
        +setVolume(value)
    }

    class Stereo {
        -location: string
        +on()
        +off()
        +setCd()
        +setVolume(value)
    }

    Command <|.. NoCommand
    Command <|.. LightOnCommand
    Command <|.. LightOffCommand
    Command <|.. StereoOnWithCDCommand
    Command <|.. StereoOffCommand
    Command <|.. MacroCommand

    LightOnCommand --> ILight
    LightOffCommand --> ILight
    StereoOnWithCDCommand --> IStereo
    StereoOffCommand --> IStereo
    MacroCommand o--> Command
    RemoteControl o--> Command

    ILight <|.. Light
    IStereo <|.. Stereo

    %% Add blank line before note and wrap multi-line text
    note right of RemoteControl
    """
    Client (main.ts) creates:
    • Concrete Commands
    • Receivers (Light, Stereo)
    • Sets commands into RemoteControl
      (configures at runtime)
    """
```

In our TypeScript version:
- `Command` is the interface.
- `LightOnCommand`, `StereoOffCommand`, etc., are concrete commands.
- `RemoteControl` is the invoker.
- `Light` and `Stereo` are receivers.

## Sample Code

Here's a complete, runnable TypeScript example based on our study session. It includes the remote control with undo and a macro command. Save these in separate files or a single `command-pattern.ts` and run with `npx ts-node command-pattern.ts`.

```typescript
// command.ts
export interface Command {
  execute(): void;
  undo(): void;
  getName?(): string; // Optional for debugging
}

// No-op command
export class NoCommand implements Command {
  execute() {}
  undo() {}
  getName() { return "NoCommand"; }
}

// Macro command (composes multiple commands)
export class MacroCommand implements Command {
  constructor(private commands: Command[]) {}

  execute() {
    this.commands.forEach(cmd => cmd.execute());
  }

  undo() {
    this.commands.slice().reverse().forEach(cmd => cmd.undo());
  }

  getName() { return "MacroCommand"; }
}

// light.ts
export interface ILight {
  on(): void;
  off(): void;
}

export class Light implements ILight {
  constructor(private location: string) {}

  on() { console.log(`${this.location} Light is On`); }
  off() { console.log(`${this.location} Light is Off`); }
}

// stereo.ts
export interface IStereo {
  on(): void;
  off(): void;
  setCd(): void;
  setVolume(value: number): void;
}

export class Stereo implements IStereo {
  constructor(private location: string) {}

  on() { console.log(`${this.location} Stereo is On`); }
  off() { console.log(`${this.location} Stereo is Off`); }
  setCd() { console.log(`${this.location} Stereo is set to CD`); }
  setVolume(value: number) { console.log(`${this.location} Stereo volume set to ${value}`); }
  // Other methods omitted for brevity
}

// commands.ts (examples)
export class LightOnCommand implements Command {
  constructor(private light: ILight) {}

  execute() { this.light.on(); }
  undo() { this.light.off(); }
  getName() { return "LightOnCommand"; }
}

export class LightOffCommand implements Command {
  constructor(private light: ILight) {}

  execute() { this.light.off(); }
  undo() { this.light.on(); }
  getName() { return "LightOffCommand"; }
}

export class StereoOnWithCDCommand implements Command {
  constructor(private stereo: IStereo) {}

  execute() {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume(11);
  }

  undo() { this.stereo.off(); }
  getName() { return "StereoOnWithCDCommand"; }
}

export class StereoOffCommand implements Command {
  constructor(private stereo: IStereo) {}

  execute() { this.stereo.off(); }
  undo() {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume(11);
  }
  getName() { return "StereoOffCommand"; }
}

// remote-control.ts
export class RemoteControl {
  private onCommands: Command[] = [];
  private offCommands: Command[] = [];
  private undoCommand: Command = new NoCommand();

  constructor() {
    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  offButtonWasPushed(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  undoButtonWasPushed() {
    this.undoCommand.undo();
  }

  toString() {
    let str = "\n------ Remote Control -------\n";
    for (let i = 0; i < this.onCommands.length; i++) {
      str += `[slot ${i}] ${this.onCommands[i].getName?.() ?? 'Unknown'}    ${this.offCommands[i].getName?.() ?? 'Unknown'}\n`;
    }
    str += `[undo] ${this.undoCommand.getName?.() ?? 'Unknown'}\n`;
    return str;
  }
}

// main.ts (usage example)
const remote = new RemoteControl();

const livingRoomLight = new Light("Living Room");
const livingRoomStereo = new Stereo("Living Room");

const lightOn = new LightOnCommand(livingRoomLight);
const lightOff = new LightOffCommand(livingRoomLight);
const stereoOnWithCD = new StereoOnWithCDCommand(livingRoomStereo);
const stereoOff = new StereoOffCommand(livingRoomStereo);

// Set up slots
remote.setCommand(0, lightOn, lightOff);
remote.setCommand(1, stereoOnWithCD, stereoOff);

// Macro example: Party Mode!
const partyOn = new MacroCommand([lightOn, stereoOnWithCD]);
const partyOff = new MacroCommand([lightOff, stereoOff]);
remote.setCommand(2, partyOn, partyOff);

console.log(remote.toString());

// Simulate button presses
remote.onButtonWasPushed(0);   // Living Room Light is On
remote.onButtonWasPushed(1);   // Stereo On, set CD, volume 11
remote.undoButtonWasPushed();  // Undo: Stereo Off
remote.onButtonWasPushed(2);   // Party Mode: Light On + Stereo On/CD/11
remote.offButtonWasPushed(2);  // Party Off: Light Off + Stereo Off
```

Run this, and you'll see the output demonstrating decoupling, undo, and macros.

## Real-World Examples

1. **Undo/Redo in Editors**: In apps like Photoshop or Google Docs, each action (e.g., "draw line") is a command object. The invoker (menu or keyboard) executes it, and the history stack allows undo/redo.
2. **GUI Buttons and Menus**: In frameworks like React or Swing, event handlers are like commands — a button click invokes a command without knowing what it does (e.g., save file, print).
3. **Task Queues in Web Servers**: In Node.js or AWS Lambda, requests are encapsulated as command objects, queued, and executed asynchronously (e.g., process payment, send email).
4. **Home Automation Systems**: Like our remote example — smart home apps (e.g., Google Home) use commands to control devices without tight coupling.
5. **Transactional Systems**: Database transactions or banking apps wrap operations (e.g., transfer money) as commands for atomic execution and rollback.
6. **Game Development**: In Unity or Unreal Engine, player inputs (e.g., "jump", "shoot") are commands that can be replayed for demos or undone in editors.

This pattern is everywhere in flexible, user-facing software. If you expand this codebase, try adding more receivers like a `CeilingFan` or `HotTub`! 🚀