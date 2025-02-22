//Task 1
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}


//Task 2
let amount = 650;
if(amount % 100 == 0){
    console.log('Withdrawal successful');
    
} else{
    console.log('Invalid amount');
    
}

//Task 3
let operator = "/"
let a = 20;
let b = 10;
switch(operator){
    case "+":
        console.log("Addition if a and b: ",(a+b));
        break;
    case "-":
        console.log("Subtruction if a and b: ",(a-b));
        break;
    case "*":
        console.log("Multiplication if a and b: ",(a*b));
        break;
    case "/":
        console.log("Division if a and b: ",(a/b));
        break;
    case "%":
        console.log("Remainder if a and b: ",(a%b));
        break;               
    default:
        console.log('enter valid operator');
            
}

// Task 4
let age = 70;
if(age <= 10){
    console.log("Ticket price is : "+ "$3");  
} else if(age >= 12 && age <= 60){
    console.log("Ticket price is : "+ "$10");
    
} else{
    console.log("Ticket price is : "+ "$8"); 
}


// Task 5 Horoscope Sign Checker

let month = "june";
switch(month){
    case  "march" : 
    case  "april":
    console.log("your zodiac sign is Aries");
    break;

    case  "may" : 
    case  "april":
    console.log("your zodiac sign is Taurus");
    break;
        
    case  "june" : 
    case  "may":
    console.log("your zodiac sign is Gemini");
    break;

    default:
        console.log("Invalid month");
           
}


// Task 6 Which Triangle?
let x = 60;
let y = 70;
let z = 80;

if(x === y && y === z){
    console.log("Equilateral Triangle");
} else if(x==y || y===z || x===z){
    console.log('Isosceles Triangle');
    
} else{
    console.log('Scalene Triangle');
    
}