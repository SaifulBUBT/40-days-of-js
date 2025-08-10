// 1. What will be the output and why?

const user = { name: "Alex", age: 50 };
console.log(user.age ?? "Not provided");

// The output of this code will be:

// ```
// Not provided
// ```

// **Here's why:**
// The `??` operator, known as the nullish coalescing operator, checks whether the left-hand side expression is `null` or `undefined`. If it is, the value on the right-hand side is used as the result. In your code:

// 1. `user.age` is `undefined`.
// 2. The `??` operator evaluates `undefined` and determines it's a "nullish" value (either `null` or `undefined`).
// 3. Therefore, `"Not provided"` (the right-hand side) becomes the output.

// If `user.age` had been any other value—such as `0` or `false`—it wouldn't trigger the `??` operator, and the left-hand side value would be used instead. Let me know if you'd like any further explanation!



// 2.  What will happen if we try to modify a frozen object?
const obj = Object.freeze({a:1});
obj.a = 10;
console.log(obj)

// If we freeze an object no modification will be allow in a frozeen object.


// 3.Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person = {
    name: "Tapas",
    company: {
      name: "tapaScript",
      location: {
        city: "Bangalore",
        zip: "94107"
      }
    }
};

const {name,company:{name:companyName,location:{city}}} = person;
console.log(name, companyName,city )

// 4. Build a Student Management System
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

const studentDetails = {
    name: "Alex",
    age: 24,
    grades: [3, 3.5, 4, 3.9, 3.00],
    getAgerageGrade: function() {
      if(this.grades.length === 0) {
        console.log("No grades available to calculate average.");
        return;   
      }
      const total = this.grades.reduce((acc, grade) => {
        return acc + grade
      },0);
      const average = total / this.grades.length;
      console.log(`Average grade for ${this.name} is: ${average.toFixed(2)}`);
    }
}

studentDetails.getAgerageGrade();

// 5. Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

function BookStoreInventorySystem(title, author, quantity){
  this.title = title;
  this.author = author;
  this.quantity = quantity;

  this.isAvailable = function(){
    return this.quantity > 0;
  }
  this.restock = function(amout){
    this.quantity += amout;
    console.log(`Restocked ${amout} copies of ${this.title}. Now available ${this.quantity}`)
  }
}

const book1 =  new BookStoreInventorySystem('JavaScript Essentials', 'John', 4);
console.log(`Is ${book1.title} available? ${book1.isAvailable() ? 'Yes' : 'No'}`);

book1.restock(6);


// 10. Loop and print values using Object destructuiring
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for( const{name, address, age} of users) {
  console.log(name, address, age)
}