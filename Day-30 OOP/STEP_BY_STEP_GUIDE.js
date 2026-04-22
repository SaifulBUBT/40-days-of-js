// ============================================
// BANK MANAGEMENT SYSTEM - STEP BY STEP GUIDE
// ============================================

// PROJECT OBJECTIVE:
// Build a simple bank system that demonstrates all OOP concepts
// Account types: Savings, Checking, Business

// ============================================
// 1️⃣ ENCAPSULATION - Hide Internal Data
// ============================================

/*
DEFINITION: Encapsulation restricts direct access to object data by using 
private properties. Only authorized methods can access/modify the data.

WHY USE IT:
- Prevent accidental data modification
- Control data access
- Validate before changing data
- Hide implementation details

HOW TO USE IN JAVASCRIPT:
- Use # prefix for private properties: #propertyName
- Create getters to read: get propertyName() {}
- Create setters to write: set propertyName(value) {}
*/

// ❌ BAD APPROACH (No Encapsulation):
class BadAccount {
    balance = 5000; // Public property - anyone can change it!
}

const badAcc = new BadAccount();
badAcc.balance = -10000; // ❌ Invalid data accepted!


// ✅ GOOD APPROACH (With Encapsulation):
class GoodAccount {
    #balance; // Private property (can't be accessed directly)

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Getter - Safe reading
    get balance() {
        return this.#balance;
    }

    // Setter - Safe writing with validation
    set balance(amount) {
        if (amount >= 0) {
            this.#balance = amount;
        } else {
            console.log('Invalid amount!');
        }
    }

    // Method - Controlled modification
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return true;
        }
        return false;
    }
}

const goodAcc = new GoodAccount(5000);
console.log(goodAcc.balance); // ✅ 5000 (using getter)
goodAcc.deposit(1000); // ✅ 6000
// goodAcc.#balance = -10000; // ❌ Error! Can't access private property


// ============================================
// 2️⃣ INHERITANCE - Parent-Child Relationship
// ============================================

/*
DEFINITION: A class inherits properties and methods from another class.
The child class extends the parent class and can reuse/override functionality.

WHY USE IT:
- Code reusability
- Establish hierarchy
- Share common functionality
- Reduce code duplication

SYNTAX:
class ChildClass extends ParentClass {
    // Child-specific code
}
*/

// Parent Class
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} is starting...`);
    }
}

// Child Class 1 - Inherits from Vehicle
class Car extends Vehicle {
    constructor(brand, doors) {
        super(brand); // Call parent constructor
        this.doors = doors;
    }

    // Inherited method: start() is available
    // New method specific to Car
    openTrunk() {
        console.log('Trunk opened');
    }
}

// Child Class 2 - Inherits from Vehicle
class Bike extends Vehicle {
    constructor(brand, type) {
        super(brand);
        this.type = type;
    }

    // New method specific to Bike
    wheelie() {
        console.log('Doing a wheelie!');
    }
}

const myCar = new Car('Toyota', 4);
myCar.start(); // ✅ Inherited from Vehicle
myCar.openTrunk(); // ✅ Specific to Car

const myBike = new Bike('Honda', 'Sports');
myBike.start(); // ✅ Inherited from Vehicle
myBike.wheelie(); // ✅ Specific to Bike


// ============================================
// 3️⃣ POLYMORPHISM - Different Behavior, Same Interface
// ============================================

/*
DEFINITION: Poly = Many, Morph = Form. Same method name behaves differently
in different child classes. Achieved by METHOD OVERRIDING.

WHY USE IT:
- Same interface, different implementations
- Makes code flexible
- Easy to extend
- Follow principle of "One interface, many implementations"

KEY CONCEPT: Override methods in child classes to provide specific behavior
*/

// Parent Class
class Animal {
    speak() {
        console.log('Some sound');
    }
}

// Child Class 1 - Override speak()
class Dog extends Animal {
    speak() {
        console.log('Woof Woof!'); // Different behavior
    }
}

// Child Class 2 - Override speak()
class Cat extends Animal {
    speak() {
        console.log('Meow Meow!'); // Different behavior
    }
}

// Same method, different results
const dog = new Dog();
const cat = new Cat();

dog.speak(); // Output: Woof Woof!
cat.speak(); // Output: Meow Meow!


// ============================================
// 4️⃣ ABSTRACTION - Hide Complexity
// ============================================

/*
DEFINITION: Show only essential features, hide internal implementation details.
User doesn't need to know HOW something works, only WHAT it does.

WHY USE IT:
- Simplify complex operations
- User works with simple interface
- Internal changes don't affect user code
- Security (hide sensitive operations)

TOOLS IN JAVASCRIPT:
- Private methods (#methodName)
- Private properties (#propertyName)
- Public methods (interface to user)
*/

// Without Abstraction (Complex for user)
class BadCar {
    startEngine() {
        console.log('1. Opening fuel valve');
        console.log('2. Injecting fuel');
        console.log('3. Compressing air');
        console.log('4. Igniting spark');
        console.log('5. Starting motor');
        console.log('6. Warming up engine');
        // ... more 20 steps
    }
}

// With Abstraction (Simple for user)
class GoodCar {
    startEngine() {
        this.#openFuelValve();
        this.#injectFuel();
        this.#ignite();
        console.log('✅ Engine started!'); // User sees only result
    }

    // Private methods - user doesn't see these
    #openFuelValve() {
        // Internal implementation
    }

    #injectFuel() {
        // Internal implementation
    }

    #ignite() {
        // Internal implementation
    }
}

const car = new GoodCar();
car.startEngine(); // User just calls this, doesn't care about details


// ============================================
// 5️⃣ STATIC METHODS & PROPERTIES
// ============================================

/*
DEFINITION: Static members belong to the CLASS, not to instances.
They are called on the class itself, not on objects.

WHY USE IT:
- Utility functions
- Shared data across all instances
- Constants
- Factory methods

SYNTAX:
static methodName() { }
*/

class MathUtil {
    // Static property - shared by all instances
    static PI = 3.14159;

    // Static method - called on class, not instance
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static generateId() {
        return Math.floor(Math.random() * 1000);
    }
}

// Call static methods on class, not instance
console.log(MathUtil.add(5, 3)); // 8
console.log(MathUtil.PI); // 3.14159
console.log(MathUtil.generateId()); // Random ID

// ❌ Wrong way:
// const util = new MathUtil();
// util.add(5, 3); // This won't work for static methods


// ============================================
// 6️⃣ GETTERS & SETTERS
// ============================================

/*
DEFINITION: Special methods that allow property-like access while running code
behind the scenes.

GETTER: get propertyName() { } - Read property with validation/computation
SETTER: set propertyName(value) { } - Write property with validation

WHY USE IT:
- Validate before setting
- Compute on-the-fly when getting
- Prevent invalid states
- Cleaner syntax than methods
*/

class Student {
    constructor(name, scores) {
        this.name = name;
        this._scores = scores; // Private
    }

    // GETTER - Computed on the fly
    get average() {
        const sum = this._scores.reduce((a, b) => a + b, 0);
        return sum / this._scores.length;
    }

    // GETTER - Returns derived data
    get grade() {
        if (this.average >= 80) return 'A';
        if (this.average >= 70) return 'B';
        if (this.average >= 60) return 'C';
        return 'F';
    }

    // SETTER - Validates before setting
    set scores(newScores) {
        if (Array.isArray(newScores) && newScores.length > 0) {
            this._scores = newScores;
        } else {
            console.log('Invalid scores!');
        }
    }
}

const student = new Student('Ali', [75, 85, 90]);
console.log(student.average); // 83.33 (Computed)
console.log(student.grade); // A
student.scores = [95, 98, 92];
console.log(student.grade); // A+


// ============================================
// HOW ALL CONCEPTS WORK TOGETHER
// ============================================

/*
In the Bank Management System:

1. ENCAPSULATION:
   - Account balance is private (#balance)
   - Only deposit/withdraw methods can modify it
   - Users get balance through getter

2. INHERITANCE:
   - SavingsAccount, CheckingAccount, BusinessAccount
   - All inherit from Account class
   - Share common: deposit, withdraw, accountNumber

3. POLYMORPHISM:
   - checkWithdrawalLimit() behaves differently for each account type
   - SavingsAccount: Has monthly limit
   - CheckingAccount: Can use overdraft
   - BusinessAccount: Charges transaction fee

4. ABSTRACTION:
   - Users call deposit(amount), don't see internal logic
   - Private #recordTransaction() hides transaction recording
   - Transaction history is private, accessed through getter

5. STATIC METHODS:
   - Account.generateAccountNumber() - utility for all accounts
   - Account.showAccountTypes() - display available types

6. GETTERS/SETTERS:
   - get balance() - read balance safely
   - get transactions - access transaction history
   - set accountHolder() - validate name before setting
*/

// ============================================
// KEY LEARNING POINTS
// ============================================

/*
✅ DO:
1. Use private properties for data that shouldn't be modified directly
2. Create getters/setters for controlled access
3. Use inheritance to avoid code duplication
4. Override methods in child classes for specific behavior (polymorphism)
5. Hide complex implementation in private methods (abstraction)
6. Use static methods for utility functions

❌ DON'T:
1. Make all properties public - exposes implementation
2. Copy-paste code - use inheritance instead
3. Make assumptions about invalid input - validate!
4. Expose internal logic - use private methods
5. Have complex class interactions - keep it simple

🎯 GOAL:
Write code that is:
- Easy to understand
- Safe (encapsulation)
- Reusable (inheritance)
- Flexible (polymorphism)
- Maintainable (abstraction)
*/
