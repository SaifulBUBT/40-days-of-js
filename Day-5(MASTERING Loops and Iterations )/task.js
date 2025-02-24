//Task - 01
for(let i = 1; i <= 5; i++){
    let row = '';
    for(let j = 1; j<= i; j++){
        row += "* ";
    }
    console.log(row);
    
}

console.log('Reverse');


for(let i = 5; i>= 1; i--){
    let row = '';
    for(let j = i; j>=1; j--){
        row += "* ";
    }
    console.log(row);
    
}

//Task - 02
let N = 3
for(let i = N; i<= N; i++){
    for(let j = 1; j<=10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
        
    }
}


//Task -03
let sum = 0;
for(let n = 1; n <= 500; n++){
    if(n%2 === 1){
        sum += n;        
    }
}
console.log("Summation of all odd numbers between 1 to 500 : ", sum);


//Task - 04
for(i = 1; i<= 20; i++){
    if(i%3 === 0) continue;
    console.log(i);
    
}

//Task -05
console.log('Reverse a number');


let num = 6789;
let reverseNum = 0;
while(num > 0){
    let rightMost = num%10;
    // console.log(rightMost);

    reverseNum = reverseNum * 10 + rightMost;
    // console.log(reverseNum);
    
    num = Math.floor(num/10);
    
}

console.log(reverseNum);
