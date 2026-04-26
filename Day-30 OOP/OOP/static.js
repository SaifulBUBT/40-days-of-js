class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        return `Hello, my name is ${this.name} and my email is ${this.email}.`;
    }

    //static method to validate email format
    static isValidEmail(email) {
        
        return email.includes('@') && email.includes('.');
    }
}

const user1 = new User('Alice', 'alice@example.com');

console.log(user1.greet()); // Output: Hello, my name is Alice and my email is

console.log(User.isValidEmail('something'));
