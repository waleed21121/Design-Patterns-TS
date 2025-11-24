import { IStereo } from "../../interfaces/recievers/stereo.interface";

export class Stereo implements IStereo {
    private location: string;
    constructor(location: string) {
        this.location = location;
    }

    on() {
        console.log(`${this.location} Stereo is On`);
    }

    off() {
        console.log(`${this.location} Stereo is Off`);
    }

    setCd() {
        console.log(`${this.location} Stereo is set to CD input`);
    }

    setDvd() {
        console.log(`${this.location} Stereo is set to DVD input`);
    }

    setRadio() {
        console.log(`${this.location} Stereo is set to Radio`);
    }

    setVolume(value: number) {
        console.log(`${this.location} Stereo volume set to ${value}`);
    }
}