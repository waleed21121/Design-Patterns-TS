import { LightOnCommand } from "./concretes/commands/ligh-on.command";
import { LightOffCommand } from "./concretes/commands/light-off.command";
import { MacroCommand } from "./concretes/commands/macro-command.command";
import { StereoOffCommand } from "./concretes/commands/stereo-off-command";
import { StereoOnWithCdCommand } from "./concretes/commands/stereo-on-with-cd.command";
import { RemoteControl } from "./concretes/invokers/remote-control.invoker";
import { Light } from "./concretes/recievers/light.reciever";
import { Stereo } from "./concretes/recievers/stereo.reciever";

function main() {
    const livingRoomLight = new Light("Living Room");
    const kitchenLight = new Light("Kitchen");
    const bedroomLight = new Light("Bedroom");

    const livingRoomStereo = new Stereo("Living Room");

    // Create the remote (7 slots)
    const remote = new RemoteControl();

    // Create commands
    const livingRoomLightOn = new LightOnCommand(livingRoomLight);
    const livingRoomLightOff = new LightOffCommand(livingRoomLight);
    const kitchenLightOn = new LightOnCommand(kitchenLight);
    const kitchenLightOff = new LightOffCommand(kitchenLight);
    const stereoOnWithCD = new StereoOnWithCdCommand(livingRoomStereo);
    const stereoOff = new StereoOffCommand(livingRoomStereo);

    // Load the remote
    remote.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remote.setCommand(1, kitchenLightOn, kitchenLightOff);
    remote.setCommand(2, stereoOnWithCD, stereoOff);

    // Show what's loaded
    console.log(remote.toString());

    // Press some buttons!
    remote.onButtonWasPressesd(0);   // Living Room Light ON
    remote.onButtonWasPressesd(1);   // kitchen light on
    remote.offButtonWasPressesd(2);  // Stereo OFF
    remote.onButtonWasPressesd(2);   // Party time! Stereo + CD + volume 11
    remote.undoButtonWasPressed();   // Oops → Stereo OFF again

    // Party mood
    const partyOn = new MacroCommand([livingRoomLightOn, stereoOnWithCD, kitchenLightOn]);
    const partyOff = new MacroCommand([livingRoomLightOff, stereoOff, kitchenLightOff]);

    partyOn.execute();
    partyOff.execute();
}

main();