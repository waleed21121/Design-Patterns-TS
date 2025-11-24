import { ICommand } from "../../interfaces/command.interface";

export class MacroCommand implements ICommand {
    commands: ICommand[];
    constructor(commands: ICommand[]) {
        this.commands = commands;
    }

    execute(): void {
        for(const command of this.commands) {
            command.execute();
        }
    }

    undo(): void {
        for(const command of this.commands) {
            command.undo();
        }
    }

    getName(): string {
        return "MacroCommand";
    }
}