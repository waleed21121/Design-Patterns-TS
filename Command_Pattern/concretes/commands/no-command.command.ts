import { ICommand } from "../../interfaces/command.interface";

export class NoCommand implements ICommand {
    execute(): void {
        
    }

    undo(): void {
        
    }
    
    getName(): string {
        return 'NoCommand'
    }
}