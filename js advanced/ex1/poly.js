// class Alien {
//   // classes are always singular (and start with capitalized letter)
//   constructor(name, phrase) {
//     this.name = name;
//     this.phrase = phrase;
//     this.species = 'alien';
//   }

//   fly = () => console.log('ZZZZZZZZZZIiiiiiiiiinnnnnngggggg');
//   sayPhrase = () => console.log(this.phrase);
// }

// class Bug {
//   constructor(name, phrase) {
//     this.name = name;
//     this.phrase = phrase;
//     this.species = 'bug';
//   }

//   hide = () => console.log("You can't catch me now");
//   sayPhrase = () => console.log(this.phrase);
// }

// class Robot {
//   constructor(name, phrase) {
//     this.name = name;
//     this.phrase = phrase;
//     this.species = 'robot';
//   }

//   transform = () => console.log('Optimus prime!');
//   sayPhrase = () => console.log(this.phrase);
// }

// const alien1 = new Alien('Ali', "I'm ali the alien");
// alien1.fly();
// alien1.sayPhrase();

class Character {
  constructor(speed) {
    this.speed = speed;
  }
}

class Enemy extends Character {
  constructor(power, speed) {
    super(speed);
    this.power = power;
  }

  attack = () => console.log(`this is my power: ${this.power}`);
}

class Alien extends Enemy {
  constructor(name, phrase, power, speed) {
    super(power, speed);
    this.name = name;
    this.phrase = phrase;
    this.species = 'alien';
  }
  fly = () => console.log('ZZZZZZZZZZIiiiiiiiiinnnnnngggggg');
  sayPhrase = () => console.log(this.phrase);
  //polymorphism
  attack = () => console.log('attack is changed');
}

class Goomba extends Enemy {
  // declare the private here
  #name;
  constructor(name, power, speed) {
    super(power, speed);
    // encapsulation -> objects capacity to decide to expose to the outside
    this.#name = name;
  }
  getName = () => console.log(`I am ${this.#name}`);
}

const goomba = new Goomba('momo', 14, 12);
goomba.getName();
