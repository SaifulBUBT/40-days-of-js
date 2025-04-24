// Find the Most Frequent Word in a Paragraph

// <div id="text">This is a test. This test is only a test.</div>

// let text = document.getElementById('text');
// console.log(text);
// const wordArray = text.innerText.split(' ');
// console.log(wordArray);



let array = [6, 9, 15, 6, 13, 9, 11, 15];
let index = 0, newArr = [];
const length = array.length; // to get length of array 8
function findDuplicates(arr) {
   for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
      if (arr[i] === arr[j]) {
            newArr[index] = arr[i];
            index++;
         }
      }
   }
   return newArr;
}

console.log(findDuplicates(array));




// Our array of values
const myArray = [1, 2, 3, 1, 2, 4, 5, 1, 2];

// The magical counting process
const countDuplicates = (arr) => {
  // Let's use a JavaScript object to keep track of counts
  const counts = {};

  // Loop through each element in the array
  arr.forEach((value) => {
    // If the value is encountered for the first time, set the count to 1
    if (!counts[value]) {
      counts[value] = 1;
    } else {
      // If the value has been seen before, increment the count
      counts[value]++;
    }
  });

  // Voilà! The counts object now holds the frequency of each value
  return counts;
};

// Let's see the result
const result = countDuplicates(myArray);
console.log(result);



// 2. Create a zebra pattern

const carList = document.querySelectorAll("ul#cars li");
console.log(carList);
carList.forEach((car, index) => {
  if(index % 2 === 0){
    car.style.color = '#fff';
    car.style.backgroundColor = "#000";
    car.style.listStyle = "none";
  } else{
    car.style.color = '#000';
    car.style.backgroundColor = "yellow";
    car.style.listStyle = "none";
  }

  
})



// 5. Extract and Count Unique Links from a Page
const hyperLinks = document.querySelectorAll('a');
console.log("Hyeper links:",hyperLinks);

hyperLinks.forEach((link, index) => {
  console.log(link.getAttribute('href'));
  
})

