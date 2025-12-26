//Getter Setter
const Animal = class {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }

  set name(value) {
    if(!value) {
      throw new Error('Name cannot be empty');
    }

    if(value.length < 2) {
      throw new Error('Name is too short');
    }
    this._name = value;
  }
}


try {
  const dog = new Animal('Rex');
  console.log(dog.name); // Rex
} catch(error) {
  console.error(error.message);
}

// Static Methods

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }

  static createGuest(name, email) {
    return new User(name, email);
  }
}

// const user1 = new User('Alice', 'alice@gmail.com');
// console.log(user1.getInfo());

const guestUser = User.createGuest('Saiful', 'saiful@gmail.com');
console.log(guestUser.getInfo());



// Private Fields and Methods


