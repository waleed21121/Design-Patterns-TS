import { ICommand } from "../../interfaces/command.interface";
import { ILight } from "../../interfaces/recievers/light.interface";

export class LightOnCommand implements ICommand {
    light: ILight;
    constructor(light: ILight) {
        this.light = light;
    }

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();    
    }

    getName(): string {
        return 'LightOnCommand';
    }
}