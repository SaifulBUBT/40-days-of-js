// - Promise Chain

 // Rule 1: Every promise gives you a .then() handler method. Every rejected promise provides you a .catch() handler.

 // Rule 2: You can do mainly three valuable things from the .then() method. You can return another promise(for async operation). You can return any other value from a synchronous operation. Lastly, you can throw an error.

 // Return a promise from the .then() handler

let getUser = new Promise(function(resolve, reject){
    const user = {
        name: 'John Doe',
        email: 'jdoe@email.com',
        password: 'jdoe.password',
        permissions: [ 'db', 'dev', ]
    };

    resolve(user);
});

getUser
.then((user) => {
    console.log(`User name fatched: ${user.name}`);
    // Returning a promise from the .then() handler
    // This promise will resolve after 2 seconds with the user's email
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Got user email: ${user.email}`);
        },2000)
    })
})
.then((userEmail) => {
    console.log(userEmail);
})

// Return a simple value from the .then() handler
getUser
.then((user) => {
    return `User password is: ${user.password}`;    
})
.then((userPassword) => {
    console.log(userPassword);
})


// Throw an error from the .then() handler
getUser
.then((user) => {
    if(!user.permissions.includes('admin')) {
        throw new Error('User does not have admin permissions');
    }
    return `User has admin permissions`;
})
.then((hasAdminPermision) => {
    console.log(hasAdminPermision);
})
.catch((error) => {
    console.error(`Error: ${error.message}`);
})