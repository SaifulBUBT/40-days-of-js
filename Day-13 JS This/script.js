


/******** Nested object  **** */
const profile = {
    name: "Saiful",
    company: "Abc",
    message: function(){
        console.log(this.name +' works at '+this.company);
        
    },
    // getDetails: () => {
    //     console.log(this.name + ' works at ' + this.company);
    // }
    getDetails: function() {
        return () => {
            return this.name + ' works at ' + this.company;
        }
    }
}

const details = profile.getDetails();
console.log(details()); 


const fruit = {
    name: "Apple",
    color: "Red",
    // getDescription: function() {
    //     return `${this.name} is ${this.color}`;
    // }
    getDescription: function() {
      return () => {
            return `${this.name} is ${this.color}`
        }
    }
}
const fruitDescription = fruit.getDescription();
console.log(fruitDescription());


/***********=== Explecit binding ===******* */
const person1 = {
    name: "John",
    age: 30
};  
const person2 = {
    name: "Jane",
    age: 25
};  

function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
}
greet.call(person1, "Hello"); // Explicit binding with call
greet.apply(person2, ["Hi"]); // Explicit binding with apply

function greetWithContext(greeting) {
    console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
    
}
greetWithContext.call(person1, "Good morning")