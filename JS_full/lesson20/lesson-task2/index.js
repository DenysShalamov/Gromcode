// eslint-disable-next-line max-classes-per-file
class Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, maxSpeed) {
    super(name, false, maxSpeed);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    console.log(`${this.name} lifting anchor down`);
    super.stop();
  }
}

const ship1 = new Ship('Argo', 2500);
console.log(ship1);
console.log(ship1.move());
