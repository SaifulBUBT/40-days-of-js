console.log("Learn Object Destructuring....")

const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parents@abcde.com'
    },
    'address': {
      'street': '65/2, brooklyn road',
      'city': 'Carterton',
      'country': 'New Zealand',
      'zip': 5791
    }
}

// const name = student.name;
// const city = student.address.city;

const {name, age, meal="Bread"} = student //Default value of meal

console.log(name, age, meal);

const {subjects, numberOfSubjects = subjects.length} = student; // Default value of number of subjects
console.log(numberOfSubjects);


/******** Alis ***** */
const {std:standard} = student;
console.log(standard);


/******** Nested destructuring  ***** */

const {address: {zip, country}} = student;
console.log('Zip:', zip);
console.log('Country:', country);


/******* Function parameter Destrcturing *****/
function sendEmail({parents: {email}}){
  console.log('Sent email to ', email);
  
}
sendEmail(student);

/****** Function return value destructuring ** */

function getStudent(){
  return {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parents@abcde.com'
    },
    'address': {
      'street': '65/2, brooklyn road',
      'city': 'Carterton',
      'country': 'New Zealand',
      'zip': 5791
    }
  }
}

const {name: studentName, age:studentAge, subjects:studentSubjects, address:{street}} = getStudent();
console.log(studentSubjects);
console.log(street);

/*******  Destructuring in for loop  ******* */

const employees =[
  {
    name: 'Alex',
    age: 38
  },
  {
    name: 'Bob',
    age: 22
  }
]

for(let{name, age} of employees){
  console.log(name, age);
  
}


/********* Optional chaining  *** */

const teacher = {
  name: 'Martin',
  salary: 90000
}

console.log(teacher.salary); // 90000
console.log(teacher.department); //undefined
// console.log(teacher.department.name);  //Error


console.log(teacher.department?.name); //undefined
