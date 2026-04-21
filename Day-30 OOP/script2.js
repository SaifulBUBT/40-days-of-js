// getter & setter
class Animal {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if(!value || value.trim() === '') {
            throw new Error('Name cannot be empty');
        }
        this._name = value;
    }
}

const animal = new Animal('Tiger');
console.log(animal.name); // Tiger

animal.name = 'Lion';
console.log(animal.name); // Lion

//static method
class MyClass {
    static staticMethod(grettings) {
        console.log(this);
        console.log(grettings)
    }
}

MyClass.staticMethod('Hello World!');

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        console.log(`Hi, I am ${this.name}`)
    }

    // static utility method
    static isValidEmail(email) {
        if (email.includes("@") && email.includes(".")) {
            console.log(`${email} is valid email`);
            
        } else {
            console.log(`${email} is not valid email`);
            
        }
    }

    // static factory method
    static createGuest() {
        return new User('Guest', 'guest@gmail.com');
    }
}

const user  = new User('Saiful', 'saiful@gmail.com')
user.greet();

User.isValidEmail("something")
User.isValidEmail("something@gmail.com")

//
const guestUser = User.createGuest();
guestUser.greet()


// Public and Private

// Public: These fileds and methods are accessible from anywhere.
// Private: These fields and methods are only accessible from the inside of the class.

class WashingMachine {
    // private field
    #powerStatus = false;
    #currentCycle = null;

    constructor(brand) {
        this.brand = brand;
    }

    start(cycle) {

        if(!this.#powerStatus) {
            this.#turnOn();
        }

        this.#currentCycle = cycle;
        // spin
        console.log(`Starting ${cycle} cycle..`)
        this.#spin();

        // drain
        this.#drain();

        // stop
        this.stop();
    }

    stop() {
        // turn off
        this.#turnOff();
        console.log('Washing Machine Stopped')
    }

    #turnOff() {
        this.#powerStatus = false;
        console.log('Power OFF')
    }

    #turnOn() {
        this.#powerStatus = true;
        console.log('Power ON');
    }

    #spin() {
        console.log('Spining ..')
    }

    #drain() {
        console.log('Draining...')
    }
}

const lgWasher = new WashingMachine('LG');
lgWasher.start('Quick Wash');

//lgWasher.#turnOn(); // SyntaxError: Private field '#turnOn' must be declared in an enclosing class


// Inheritance
class Human {
    species = 'Homo Sapiens'; //public field
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

class Student extends Human {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, and I am ${this.age} years old. I am in grade ${this.grade}.`);
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

class Teacher extends Human {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, and I am ${this.age} years old. I teach ${this.subject}.`);
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }

}

const alice = new Student('Alice', 20, 7);
const bob = new Teacher('Bob', 35, 'Math');

alice.introduce();
alice.sleep();
alice.study();

bob.introduce();
bob.sleep();
bob.teach();