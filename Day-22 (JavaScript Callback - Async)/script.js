// function fn(arg){
//     arg();
// }

// fn(function(){
//     console.log("Hello World!");
// })



////
function greet(name, callback) {
    console.log("Hello, " + name + "!");

    setTimeout(function() {
        callback();
    }, 2000); // 2 seconds delay

    console.log("I am still hanging here")
    
}
function sayHi() {
    console.log("This is a callback function.");
}

greet("Alice", sayHi)



// orderPizza

function orderPizza(type, name, callback) {
    console.log(`Order received for a ${type} ${name} `);

    setTimeout(function() {
        const mesg = `${type} ${name} pizza is ready`;
        callback(mesg);
    }, 2000)
}

orderPizza("Veg", "Margherita", function(message) {
    console.log(`Your ${message} pizza is ready!`);
})




// Async-await

const validateUser = ({userId, password}) => {
    return new Promise((resolve, reject) => {
        if(userId && password) {
            resolve("User validated successfully");
        } else {
            reject({error: "Invalid credentials"});
        }
    })
}

const app = async () => {
    const user = {
        userId: "john_doe",
        password: "password123"
    }
    const result = await validateUser(user)
    console.log(result);
    
}

app()