// make, model, and year. Add a method called displayInfo that prints out the car’s information.

// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   displayInfo = () => {
//     console.log(`make: ${this.make}, model: ${this.model}, year: ${this.year}`);
//   };
// }

// Encapsulation1: Modify the Car class to include a private property for the year property.
// The getYear method should return the year, and the setYear method should validate that the year is a positive number.

class Car {
  #year;
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.#year = year;
  }
  getYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - this.#year;
  };

  setYear = (year) => {
    if (year - this.#year >= 0) {
      this.#year = year;
    } else {
      console.log(`Error ${year} isn't valid`);
    }
  };
  displayInfo = () => {
    console.log(
      `make: ${this.make}, model: ${this.model}, age of car: ${this.getYear()}`
    );
  };

  startEngine = () => {
    console.log('engine started!');
  };
}

class SportCar extends Car {
  constructor(make, model, year, topspeed) {
    super(make, model, year);
    this.topspeed = topspeed;
  }

  displayInfo = () => {
    // super.displayInfo(); -> doesn't work yet but in angular it will
    console.log(
      `make: ${this.make}, model: ${
        this.model
      }, age of car: ${this.getYear()}, top speed: ${this.topspeed}`
    );
  };
}

class Race {
  #participants;
  constructor() {
    this.#participants = {};
  }
  addParticipants = (name, car) => {
    try {
      if (typeof name !== 'string') {
        throw new Error('Name must be a string');
      }

      if (!(car instanceof Car)) {
        throw new Error('Invalid car object');
      } else {
        this.#participants[name] = car;
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  getParticipants = () => {
    for (let player in this.#participants) {
      console.log(`${player}:`);
      this.#participants[player].displayInfo();
    }
  };
}

// Encapsulation2: Create a class Race that has a private property participants (an array of Car instances).
// Add a method addParticipant to add a car to the race.

let car1 = new Car('x', 'y', 2001);
let car2 = new Car('i', 'j', 2000);
let sportCar = new SportCar('a', 'b', 2010, 300);

// car1.displayInfo();

// car2.displayInfo();
// car2.startEngine();

// sportCar.displayInfo();

let race = new Race();
race.addParticipants('idiot1', car1);
race.addParticipants('idiot2', car2);
race.addParticipants('idiot3', sportCar);

race.getParticipants();
