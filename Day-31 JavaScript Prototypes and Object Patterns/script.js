// Object creation patterns

// Object Literal
const person1 = {
  name: 'Alice',
    age: 30,
    greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// constructor Function
function Car2(brand, model, color, owner) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.owner = owner;

    // this.wheelNumber = function() {
    //     return 4;
    // }

}

Car2.prototype.wheelNumber = function() {
    return 4;
}

const toyotaCar = new Car2('Toyota', 'Corolla', 'Blue', { name: 'Bob'});
console.log(toyotaCar.wheelNumber()); // 4

// class Pattern
class Animal {
    constructor(species, age) {
        this.species = species;
        this.age = age;
    }
    sound() {
        console.log('Some generic sound');
    }
}

const dog = new Animal('Dog', 5);
dog.sound(); // Some generic sound



class Car {
    constructor(model, color, year, owner) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.owner = owner;
    }

    wheelNumber() {
        return 4;
    }
}

const bmwCar = new Car('BMW', 'Black', 2025, {name: "Saiful"})
console.log(bmwCar);



class LuxeryCar extends Car {
    constructor(model) {
        super(model)
    }
    isLuxery() {
        return true;
    }
}
const lc = new LuxeryCar('Ferrari');
console.log(lc); // true
console.log(lc.wheelNumber()); // 4


// Prototype-based inheritance  
const vehicle = {
    isLuxery: false,
    isFourWheeler: true,
    start: function() {
        console.log('Vehicle started');
    },
    stop: function() {
        console.log('Vehicle stopped');
    },

    showInfo: function() {
        console.log(`The Vehicle ${this.name} is ${this.color} color. Is it luxury vehicle?
            ${this.isLuxery}. Does it 4 wheel? ${this.isFourWheeler}`);
        
    }
};

const bike = Object.create(vehicle);
bike.ride = function() {
    console.log('Bike is being ridden');
};  
bike.start(); // Vehicle started
bike.ride(); // Bike is being ridden    



const myCar = Object.create(vehicle);
myCar.name = 'Audi';
myCar.color = 'Red';
myCar.isLuxery = true;
myCar.showInfo();