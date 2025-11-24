import { ICommand } from "../../interfaces/command.interface";
import { IStereo } from "../../interfaces/recievers/stereo.interface";

export class StereoOffCommand implements ICommand {
    stereo: IStereo;
    constructor(stereo: IStereo) {
        this.stereo = stereo
    }

    execute() {
        this.stereo.off();
    }

    undo() {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(11);
    }

    getName() { return "StereoOffCommand"; }
}