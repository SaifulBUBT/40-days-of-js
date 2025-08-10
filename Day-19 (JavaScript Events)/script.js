// Event handing in Markup
function handleClick(greeting){
    console.log("Button clicked! Greeting:", greeting);
}


// Event handling in JavaScript
let counter = 0;
const countBtnElem = document.getElementById("countBtn");

const handleCount = function (){
    console.log("Counter:",counter);
    counter++;
}

const greetings = function(){
    console.log('Thank you!')
}
countBtnElem.addEventListener("click", handleCount);
countBtnElem.addEventListener('click', greetings)

// Remove event listener
// countBtnElem.removeEventListener("click", handleCount);


//DOM Content loaded

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM content loaded');
    
})

const inputElem = document.getElementById('search-id');
const handleChange = function(event){
    console.log(event);
    
    console.log('Event target:', event.target);
    console.log('Event type:', event.type);
    console.log('Event name:', event.target.name);
    console.log('Event value:', event.target.value);
    console.log('Event currentTarget:', event.currentTarget);
    console.log(this);
    
}
inputElem.addEventListener('change', handleChange);