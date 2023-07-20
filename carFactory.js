class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `${this.make} ${this.model} (${this.year})`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }

  getDescription() {
    return `${super.getDescription()}: ${this.range} mile range`
  }
}

const myCar = new ElectricCar(`Tesla`, `Model S`, 2019, 300);

console.log(myCar.getDescription());