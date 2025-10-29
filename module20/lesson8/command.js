// Command interface
class Command {
  execute() {}
}

// Concrete command 1
class TurnOnLightCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

// Concrete command 2
class TurnOffLightCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Receiver
class Light {
  turnOn() {
    console.log('The light is on');
  }

  turnOff() {
    console.log('The light is off');
  }
}

// Invoker
class RemoteControl {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Client code
const light = new Light();
const turnOn = new TurnOnLightCommand(light);
const turnOff = new TurnOffLightCommand(light);

const remote = new RemoteControl();

remote.setCommand(turnOn);
remote.pressButton(); // The light is on

remote.setCommand(turnOff);
remote.pressButton(); // The light is off
