
Function.prototype.myBind = function (context,...args) {
  return () => this.call(context,...args);
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function(...args) {
   console.log("Turning on " + this.name +' ' + args);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp,1,2,3);
const myBoundTurnOn = turnOn.myBind(lamp,[1,2,3,123,3,4,5,3,34]);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"