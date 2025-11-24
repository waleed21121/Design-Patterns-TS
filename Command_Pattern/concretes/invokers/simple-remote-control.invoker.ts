import { ICommand } from "../../interfaces/command.interface";

export class SimpleRemoteControl {
    slot: ICommand;
    constructor() {}

    setCommand(command: ICommand) {
        this.slot = command;
    }

    buttonWasPressed() {
        this.slot.execute();
    }
}