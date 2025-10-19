// join()
const cars = ["BMW", "Audi", "Volvo"];
console.log(cars.join(","));

//fill()  // Mutate the main array
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
console.log(colors.fill("Pink", 1, 4));

//includes() if the items is present it return true
const names = ["tom", "Bob", "Reno"];
console.log(names.includes("tom"));
console.log(names.includes("Tom"));

//toReversed()
{
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.toReversed());

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits.toReversed());

  const letters = ["a", "b", "c", "d"];
  console.log(letters.toReversed());

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log(months.toReversed());
}

//toSorted()
{
  const numbers = [5, 3, 8, 1, 2];
  console.log(numbers.toSorted());

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const sortedFruits = fruits.toSorted();
  console.log(sortedFruits);
}

//toSpliced()
{
  const months = ["Jan", "March", "April", "June"];
  const newMonths = months.toSpliced(1, 0, "Feb");
  console.log(newMonths);

  const colors = ["Red", "Green", "Blue", "Yellow"];
  const newColors = colors.toSpliced(2, 1, "Purple", "Orange"); //["Red", "Green", "Purple", "Orange", "Yellow"]
  console.log(newColors);
}

//with(index,value) // does not mutate the original array
{
  const numbers = [10, 20, 30, 40, 50];
  const newNumbers = numbers.with(2, 99); // Change index 2 to 99
  console.log(newNumbers);
  console.log(numbers); // Original array remains unchanged
}

//Array like
function checkArgs() {
  console.log(arguments);

  const argsArray = [...arguments];
  argsArray.forEach((arg) => console.log(arg));
}

checkArgs(1, 2, 3);

console.log("HTMLCollection as Array using Array.from()");
const li = document.getElementsByTagName("li");
const collectionArray = Array.from(li);
console.log(collectionArray);

//Array.fromAsync()
{
  const li = document.getElementsByTagName("li");
  const collectionPromise = Array.fromAsync(li);
  console.log(collectionPromise);
  collectionPromise.then((arr) => {
    console.log(arr);
    // arr.forEach((item) => console.log(item.textContent));
  });
}
