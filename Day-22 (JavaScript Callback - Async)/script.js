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