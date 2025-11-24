import { ICommand } from "../../interfaces/command.interface";
import { NoCommand } from "../commands/no-command.command";

export class RemoteControl {
    onCommand: ICommand[];
    offCommand: ICommand[];
    lastCommand: ICommand;
    constructor() {
        const noCommand= new NoCommand();
        this.onCommand = [];
        this.offCommand = [];

        for (let index = 0; index < 7; index++) {
            this.onCommand.push(noCommand);
            this.offCommand.push(noCommand);
        }

        this.lastCommand = noCommand;
    }

    setCommand(slot: number, onCommand: ICommand, offCommand: ICommand) {
        this.onCommand[slot] = onCommand;
        this.offCommand[slot] = offCommand;
    }

    onButtonWasPressesd(slot: number) {
        this.onCommand[slot].execute();
        this.lastCommand = this.onCommand[slot];
    }

    offButtonWasPressesd(slot: number) {
        this.offCommand[slot].execute();
        this.lastCommand = this.offCommand[slot];
    }

    undoButtonWasPressed() {
        this.lastCommand.undo();
    }

    toString() {
        let str = '\n---------- Remote Control ----------\n';
        for(let i = 0; i < 7; i++) {
            str += `[slot {${i}}] ${this.onCommand[i].getName()} ######### [slot {${i}}] ${this.offCommand[i].getName()}\n`;
        }
        return str;
    }
}