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

class Character{
  constructor(speed){
    this.speed = speed;
  }
}

class Enemy {
  constructor(power,speed) {
    super(speed)
    this.power = power;
  }

  attack = () => console.log(`this is my power: ${this.power}`);
}

class Alien extends Enemy {
  constructor(name, phrase, power,speed) {
    super(power,speed);
    this.name = name;
    this.phrase = phrase;
    this.species = 'alien';
  }
  fly = () => console.log('ZZZZZZZZZZIiiiiiiiiinnnnnngggggg');
  sayPhrase = () => console.log(this.phrase);
}

class Bug extends Enemy {
  constructor(name, phrase, power,speed) {
    //without super is polymorphism
    super(power,speed);
    this.name = name;
    this.phrase = phrase;
    this.species = 'bug';
  }
  hide = () => console.log("You can't catch me now");
  sayPhrase = () => console.log(this.phrase);
}

class Robot extends Enemy {
  constructor(name, phrase, power,speed) {
    super(power,speed);
    this.name = name;
    this.phrase = phrase;
    this.species = 'bug';
  }
  transform = () => console.log('Optimus prime!');
  sayPhrase = () => console.log(this.phrase);
}

const alien1 = new Alien('alien', 'hey', 15, 50);
