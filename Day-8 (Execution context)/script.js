// var name = 'Tom';

// function tom(){
//     console.log(name+ ' runs');
    
// }

// tom()


console.log("Inside Global Execution Context");
var a = 5;

function testMe(){
    console.log("Inside testMe Execution Context");
    var b = 10;
    var user = {
        name: "Saiful",
        country: "Bangladesh"
    }

    function testAgain(){
        console.log('Inside testAgain Execution Context');
        console.log('Exeting testAgain Execution Context');
        
    }
    testAgain()
    console.log("Exeting testMe Execution Context");
    
}
testMe();
console.log("Exeting Global Execution Context");
