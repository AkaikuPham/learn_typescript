class Vehicle {
  // color: string;

  // constructor(color: string = "red") {
  //   this.color = color;
  // }

  // Viet lai nhu sau
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car1 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("heheh");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car1 = new Car1(4, "red");
car1.startDrivingProcess();
