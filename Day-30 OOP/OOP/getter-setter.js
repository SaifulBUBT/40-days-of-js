class Animal {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return `The name is ${this._name}`;
    }
    set name(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._name = value;
        } else { 
           console.error('Name must be a non-empty string.');
        }
    }
}

const dog = new Animal('Buddy');
console.log(dog.name); // Output: The name is Buddy

dog.name = '';
console.log(dog.name);
