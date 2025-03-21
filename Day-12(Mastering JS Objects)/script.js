console.log('JavaScript Objects');

const user = {
    name: 'Alex',
    age: 40,
    "is admin": true,
}

console.log(user.name); // Alex
console.log(user.age); // 40

user.isSeniorCitizen = false; // add a new property
user["movie lover"] = false;

//delete user.age;

console.log(user);
console.log(user["is admin"]); // uese subscript notation to access this property.


const someKey = 'age'
console.log(user[someKey]); //Dynamically getting the key and retrieve the value


/*******   Dynamically create Object  with key ******/
// let car = prompt('What is your favourite car?');
// const favCars = {
//     [car] : 5
// }
// console.log(favCars[car]);
// console.log(favCars);



//*********  Constructor pattern   ********/
function Car(name, model){
    this.name = name;
    this.model = model;
    this.carInfo = function(){
        console.log(this.name, this.model);
        
    }
}

const bmwCar = new Car('BMW', '7Series');
console.log(bmwCar.carInfo());

//***********   new Object()   ****** */
const person = new Object();
person.name = 'John';
person.age = 40
console.log(person);


//*******   Factory pattern   ********* */
function createUser(name, age){
    return {
        name,
        age,
        grettings: function(){
            console.log('Welcome ',this.name);
            
        }
    }
}
const user1 = createUser('Saiful', 50)
console.log(user1.grettings());

const user2 = createUser('Bob', 30);
console.log(user2);



/******** Nested object  **** */
const profile = {
    name: "Saiful",
    company: "Abc",
    message: function(){
        console.log(this.name +' works at '+this.company);
        
    },
    address: {
        city: 'Dhaka',
        country: "Bangladesh",
        details: function(){
            console.log('Lives in '+ this.city, this.country);
            
        }
    }
}
console.log(profile.message());
console.log(profile.address.details());


//*******     in operator      ***********/
// To check if a property is present or not in an object
console.log("name" in profile); // true
console.log("salary" in profile); // false


// for ... in loop
// Loop through each property in an object use for in loop

for(let key in profile){
    console.log(key);
    console.log(profile[key]);
    
}

//********   Object.keys()  * ****** */
console.log(Object.keys(profile));


//********   Object References   ***** */
let fruit = {name: "mango"};
let oneMoreFruit = {name: "mango"};

console.log(fruit === oneMoreFruit);

fruit = oneMoreFruit;

console.log(fruit === oneMoreFruit);



//**********    Static methods    ****** */
//Object.assign() to copy all of the properties from a source object to a target object

const source = {
    a: 3,
    b: 5
}
const target = {
    b: 3,
    p: 5,
    q: 2
}

const newObject =  Object.assign(target, source);
console.log(newObject);


//Shallow copy
const obj1 = {
    a: 1,
    b: {
        c: 2
    }
}

obj2 = Object.assign({}, obj1);
obj1.b.c = 10;
console.log(obj2.b.c);
console.log(obj1.b.c);


//structuredClone()
const obj3 = {
    a: 1,
    b: {c:4}
}
const obj4 = structuredClone(obj3);
obj4.a = 100;
obj4.b.c = 20;
console.log(obj4);
console.log(obj3);


//*******  Convert an object into an array  ***** */
const obj5 = {
    name: "Martin",
    age: 22
}
const myArr = Object.entries(obj5);
console.log(myArr);

//****     Convert an array into an object     ******* */
const entries = new Map([
    ["foo", "bar"],
    ["baz", 40],
])
const objEntries = Object.fromEntries(entries);
console.log(objEntries);


//object freeze
const emp = {
    salary: 500
}

Object.freeze(emp);
emp.country = 'BD'
delete emp.salary;
console.log(emp);

console.log(Object.isFrozen(emp));



// Object seal()
const dept = {
    name: "Finance"
}

Object.seal(dept)

dept.address = 'Dhaka';
delete dept.name;
dept.name = 'HR'
console.log(dept);
console.log(Object.isSealed(dept));



//********  Object.hasOwn()   ****** */
// to check a property name in an object
console.log(Object.hasOwn(dept, "address"));
