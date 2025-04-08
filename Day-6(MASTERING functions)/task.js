// 3. Function to Check if a String is a Palindrome
function isPalindrome(str){
    let reverseStr = '';
    for(let i = str.length -1; i>=0; i--){
        reverseStr += str.charAt(i);
    }
    if(str === reverseStr){
        console.log(str + ' is a palindome');
        
    } else{
        console.log(str + ' is not a palindrome');
        
    }
    
}

isPalindrome('banana');


// 4. Write a Function to Find Factorial of a Number
function factorial(n){
    if(n===0){
        return 1;
    }
    if(n<0){
        console.log('please insert a positive number');
        
    }
    return n * factorial(n-1);
}
const factResult = factorial(5);
console.log(factResult);


// 5. Write a function to Count Vowels in a String
let counter = 0;
function countVowels (str){
    for(i = 0; i<str.length; i++){
        if(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u' || str.charAt(i) === 'A' || str.charAt(i) === 'E' || str.charAt(i) === 'I' || str.charAt(i) === 'O' || str.charAt(i) === 'U'){
            counter++
        }
    }
    console.log(str +' has '+ counter + ' vowels');
    
}

countVowels('JavaScript')

// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence

function capitalizeWords(sentence){
    return sentence
            .split(' ')
            .map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1)
            })
            .join(' ');
}
console.log(capitalizeWords('hello world! I am learning JavaScript'));


// 8. Create a Simple Callback Function

function greet(name, callback){
    callback(name)
}

greet("Saiful", function(name){
    console.log("hello "+ name);
})