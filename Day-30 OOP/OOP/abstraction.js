// Abstraction

// Abstraction is the process of hiding the internal details and showing only the essential features to the user. 

// In JavaScript, we can achieve abstraction using classes and methods. We can define a class with private properties and methods that are not accessible from outside the class, and public methods that are accessible to the user.

class Car {
    startEngine() {
        this.#injectFuel();
        this.#ignite();
        console.log("Engine started");
    }

    #injectFuel () {
        console.log("Fuel injected");
    }

    #ignite() {
        console.log("Spark generated");
    }
}

const myCar = new Car();
myCar.startEngine(); // Output: Fuel injected, Spark generated, Engine started