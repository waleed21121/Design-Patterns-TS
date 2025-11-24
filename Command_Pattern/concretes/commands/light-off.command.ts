import { ICommand } from "../../interfaces/command.interface";
import { ILight } from "../../interfaces/recievers/light.interface";

export class LightOffCommand implements ICommand {
    light: ILight;
    constructor(light: ILight) {
        this.light = light;
    }

    execute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }

    getName(): string {
        return 'LightOffCommand';
    }
}