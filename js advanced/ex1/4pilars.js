// Create a class which will have different methods inserted in it to be used by all objects in that class
class Shape {

    // Declare height and width, no more const and let necessary! It is also technically not necessary to type these here
    height;
    width;

    // constructor is a method that is called when an object is created
    constructor(height, width) {
        // this is the self-referencer (in all OOP-languages) => attributes and variables in the class can be used
        this.height = height;
        this.width = width;
    }
    // Method which is used by every object in this class
    draw() {
        console.log("Drawing"+this.height+"x"+this.width);
    }

}

// deze class gaat alles van shape nemen en zijn eigen methods ook kunnen hebben => draw is ook mogelijk in Rectangle!
class Rectangle extends Shape{
    constructor(height, width) {
        super(height, width);
    }
    sayBoo(){
        console.log("Boo")
    }
}

// You create an object with the command 'new' followed by the class name
// the parameters are passed to the constructor (in this case height and width) => rectangle: 10 width, 20 height
const rectangle = new Shape (10,20);
console.log(rectangle.draw);

const square = new Shape(10,10);
console.log(square.draw);