// function father(){
//     let houseName = "ChayaNir";

//     return function son(){
//         console.log(houseName);
        
//     }
// }

// const ex1 = father();
// console.log(ex1());

// exaple 2 closure in loop


// for(var i = 0; i<5; i++){
//     setTimeout(function(){
//         console.log(i);  
//     }, 100)
// }

// for(var i = 0; i<5; i++){
//     (function(j){
//         setTimeout(function(){
//             console.log(j)
//         }, 1000)
//     })(i)
// }

// for(let i = 0; i<5; i++){
//     setTimeout(function(){
//         console.log(i);  
//     }, 100)
// }


//*************** */
function outerCount(){
    let count = 0;

    return function innerCount(){
        count++;
        console.log(count);
        
    }
}
const returnValue = outerCount();
console.log(returnValue());
console.log(returnValue());
console.log(returnValue());


/********* Real world example ******* */

function createBankAccount(initialBalance){
    let balance  = initialBalance;

    return {
        diposit: function (amount){
            balance = balance + amount;
            console.log('Deposited '+amount+ ' current balance is '+ balance);  
        },
        withdraw: function(amount){
            if(amount > balance){
                console.log('Insufficient Balance');
            } else{
                balance = balance - amount;
                console.log('Withdrawn ', amount,' current balance ', balance);
                
            }
        },
        checkBalance: function(){
            console.log('Balance is', balance);
            
        }

    }
}

const saifulAccount = createBankAccount(500);
saifulAccount.diposit(1000);
saifulAccount.diposit(500);

saifulAccount.checkBalance()

saifulAccount.withdraw(1000)



//********** Closure in Event listener  ***** */

function setupButton(){
    let clickCount = 0;
    document.getElementById("myButton").addEventListener('click', function(){
        clickCount++;
        console.log('Button clicked '+clickCount +' times');
        
    })
}

setupButton()