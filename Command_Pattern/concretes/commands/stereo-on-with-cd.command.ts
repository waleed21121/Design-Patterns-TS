import { ICommand } from "../../interfaces/command.interface";
import { IStereo } from "../../interfaces/recievers/stereo.interface";

export class StereoOnWithCdCommand implements ICommand {
    stereo: IStereo;
    constructor(stereo: IStereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(11);
    }

    undo(): void {
        this.stereo.off();    
    }

    getName(): string {
        return 'StereoOnWithCdCommand';
    }
}