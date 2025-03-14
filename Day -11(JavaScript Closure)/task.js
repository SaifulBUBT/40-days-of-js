// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

function createDynamicButton(){
    let clickCount = 0;
    let button = document.createElement('button');
    button.textContent = 'Click Me';
    button.classList.add('dynamicBtn');
    document.body.appendChild(button);

    button.addEventListener('click', function(){
        clickCount++;
        console.log("Button clicked",clickCount ,"times");
    })

}
createDynamicButton()



// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.
function createMultiplier(multiplier){
    return function(number){
        return multiplier * number;
    }
}

const result = createMultiplier(10);
console.log(result(20));

// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function counterFunc(){
    let count = 0;

    return {
        increment: function (){
            count++;
            console.log('Count incremnt value',count);   
        },
        decrement: function(){
            count--;
            console.log('Count Decrement value', count);  
        },
        reset: function(){
            count = 0;
            console.log('Counter has been reset to', count);
            
        }
    }
}
const counter = counterFunc()
counter.increment()
counter.increment()
counter.increment()
counter.increment()

counter.decrement()
counter.decrement()

counter.reset()