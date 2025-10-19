// state -
// pending: Initially when the executor function starts the execution.
// fulfilled: When the promise is resolved.
// rejected: When the promise is rejected.

// result -
// undefined: Initially when the state value is pending.
// value: When resolve(value) is called.
// error: When reject(error) is called.

// - How promises are resolved and rejected
// let promise1 = new Promise(function (resolve, reject) {
//   resolve("Promise resolved successfully!");
// });

// let promise2 = new Promise(function (resolve, reject) {
//   reject("Promise rejected with an error!");
// });

// Handling promise
const promise = new Promise(function (resolve, reject) {
  resolve("Hey I am resolved!");
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise handling completed!");
  });

// - Promise Chain

// Rule 1: Every promise gives you a .then() handler method. Every rejected promise provides you a .catch() handler.

// Rule 2: You can do mainly three valuable things from the .then() method. You can return another promise(for async operation). You can return any other value from a synchronous operation. Lastly, you can throw an error.

// Return a promise from the .then() handler

const getUser = new Promise(function (resolve, reject) {
  const user = {
    name: "John Doe",
    email: "jhon@gmail.com",
    password: "password123",
    address: "123 Main St, Anytown, USA",
    permissions: ["read", "write"],
  };
  resolve(user);
});

getUser
  .then((user) => {
    console.log(user.name);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let address = user.address;
        resolve(address);
      }, 2000);
    });
  })
  .then((address) => {
    console.log(`User address is: ${address}`);
  });

// Return a simple value from the .then() handler
getUser
  .then((user) => {
    return user.email;
  })
  .then((email) => {
    console.log(`User email is: ${email}`);
  });

// Throw an error from the .then() handler
// getUser
//   .then((user) => {
//     if (!user.permissions.includes("admin")) {
//       throw new Error("User does not have admin permissions");
//     }
//     return `User has admin permissions`;
//   })
//   .then((hasAdminPermision) => {
//     console.log(hasAdminPermision);
//   })
//   .catch((error) => {
//     console.error(`Error: ${error.message}`);
//   });
