console.log("Learn Object Destructuring....");

const student = {
  name: "John Williamson",
  age: 9,
  std: 3,
  subjects: ["Maths", "English", "EVS"],
  parents: {
    father: "Brown Williamson",
    mother: "Sophia",
    email: "john-parents@abcde.com",
  },
  address: {
    street: "65/2, brooklyn road",
    city: "Carterton",
    country: "New Zealand",
    zip: 5791,
  },
};

const { name, age, meal = "Bread" } = student;
console.log(name, age, MessageChannel);

const { subjects, numberOfSubjects = subjects.length } = student;
console.log(subjects, numberOfSubjects);

// aliases
const { std: standard } = student;
console.log(standard);

// nested object destructuring
const {
  address: { city, country, street },
} = student;
console.log(city, street, country);

// function parameter object destructuring

function sendEmail({ parents: { email } }) {
  //   let email = student.parents.email;
  console.log(`Sent an email to ${email}`);
}

sendEmail(student);

/////
const getStudent = () => {
  return {
    name: "John Williamson",
    age: 9,
    std: 3,
    subjects: ["Maths", "English", "EVS"],
    parents: {
      father: "Brown Williamson",
      mother: "Sophia",
      email: "john-parents@abcde.com",
    },
    address: {
      street: "65/2, brooklyn road",
      city: "Carterton",
      country: "New Zealand",
      zip: 5791,
    },
  };
};

const { name: stdName, subjects: stdSubjects } = getStudent();
console.log(stdName, stdSubjects);

//
const students = [
  {
    name: "William",
    grade: "A",
  },
  {
    name: "Tom",
    grade: "A+",
  },
  {
    name: "Bob",
    grade: "B",
  },
];

for (let { name, grade } of students) {
  console.log(`${name}: ${grade}`);
}

/// optional chaining
const employee = {
  salary: {
    bonus: 300,
  },
};
console.log(employee.department);
console.log(employee.department?.name);
