// Defination: Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP) 
// that restricts direct access to some of an object's components, 
// which can prevent the accidental modification of data. 
// It is achieved by using access modifiers (like private, protected, and public) to control the visibility of
//  class members.

class BankAccount {
    #balance; // private property

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getBalance()); // Output: 1300


class Car {
    #speed; // private property
    constructor() {
        this.#speed = 0;
    }

    accelerate(amount) {
        if (amount > 0) {
            this.#speed += amount;
        }   
    }

    brake(amount) {
        if (amount > 0 && amount <= this.#speed) {
            this.#speed -= amount;
        }
    }       
    getSpeed() {
        return this.#speed;
    }
}

const myCar = new Car();
myCar.accelerate(50);
console.log(myCar.getSpeed());