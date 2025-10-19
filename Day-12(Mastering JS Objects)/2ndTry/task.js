// Task-1  What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

// user.age is explicitly set to undefined.

// The nullish coalescing operator (??) returns the right-hand side only if the left-hand side is null or undefined.

// Since user.age is undefined, it matches the condition.

// Therefore, "Not provided" is returned.

// Task-3

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};
const {
  name,
  company: {
    name: companyName,
    location: { city },
  },
} = person;

console.log(name, companyName, city);

// Task - 4;
//  Build a Student Management System
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

const studentDetails = {
  name: "Alex",
  age: 24,
  grades: [3, 3.5, 4, 3.9, 3.0],
};

function averageGrade({ grades }) {
  const total = grades.reduce((acc, grade) => {
    return acc + grade;
  }, 0);

  const averageGrade = total / grades.length;
  console.log(averageGrade);
}

averageGrade(studentDetails);

// 5. Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

function BookstoreInventorySyestem(title, author, quantity) {
  this.title = title;
  this.author = author;
  this.quantity = quantity;

  this.isAvailable = function () {
    return this.quantity > 0;
  };

  this.restock = function (amount) {
    this.quantity += amount;
    console.log(
      `Restocked ${amount} of ${this.title}. Now available ${this.quantity}`
    );
  };
}

const book1 = new BookstoreInventorySyestem("javascript", "Bob", 20);
console.log(book1.isAvailable());
book1.restock(10);
