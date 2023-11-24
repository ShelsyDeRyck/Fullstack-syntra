class Alien{
    // classes are always singular (and start with capitalized letter)
    constructor(name, phrase)
    {
        this.name = name;
        this.phrase = phrase;
        this.species = "alien";
    }

    fly =() => console.log("ZZZZZZZZZZIiiiiiiiiinnnnnngggggg");
    sayPhrase = () => console.log(this.phrase);
}

class Bug{
    constructor(name, phrase)
    {
        this.name = name;
        this.phrase = phrase;
        this.species = "bug";
    }

    hide =() => console.log("You can't catch me now");
    sayPhrase = () => console.log(this.phrase);
}

class Robot {
    constructor(name, phrase)
    {
        this.name = name;
        this.phrase = phrase;
        this.species = "robot";
    }

    transform = () => console.log("Optimus prime!")
    sayPhrase = () => console.log(this.phrase);
}

const alien1 = new alien("Ali", "I'm ali the alien")