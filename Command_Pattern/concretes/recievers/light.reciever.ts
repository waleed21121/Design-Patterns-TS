import { ILight } from "../../interfaces/recievers/light.interface";

export class Light implements ILight {
    location: string;
    constructor(location: string) {
        this.location = location;
    }

    on() {
        console.log(`${this.location} Light is On`);
    }

    off() {
        console.log(`${this.location} Light is Off`);
    }
}