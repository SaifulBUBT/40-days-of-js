const user = {
    name: "John",
    age: 30,
    "is admin": true
}

user.isSeniorCitizen = false

console.log(user);

console.log(user.name);
console.log(user.age);
console.log(user["is admin"]);

user["movie lover"] = false

console.log(user);

delete user["movie lover"];
console.log(user);


const someKey  = 'age';
console.log(user[someKey]); // Dynamically getting the key and retrieve the value


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
    },
    salary: 59000,
    "is admin": false // Adding a new property
}
console.log(profile.message());
console.log(profile.address.details());

if(profile.salary !== undefined) {
    console.log('Salary', profile.salary); // Check if salary is defined
}

// Check if properties exist in the object
if('salary' in profile) {
    console.log('Salary exists:', profile.salary); // Check if salary property exists
}

if('is admin' in profile) {
    console.log('Is Admin:', profile['is admin']); // Check if 'is admin' property exists
}

// loop through each property in an object using for...in loop
for (let key in profile) {
    console.log(key + ':' + profile[key])
}
console.log(Object.keys(profile)); // Get all keys of the object
console.log(Object.values(profile)); // Get all values of the object