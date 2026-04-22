class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }

}

class Emplyee extends Human {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }
    introduce() {
        // super.introduce();
        console.log(`I am ${this.name}, ${this.age} years old. I am working as a ${this.jobTitle}`);
        
    }
}

const john = new Emplyee('John', 30, 'Software Engineer');
john.introduce();