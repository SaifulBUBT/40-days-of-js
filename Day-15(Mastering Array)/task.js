// T-012: Create an Array of 10 elements. Use the splice() method to empty the array.
{
    const nums = [1,2,3,4,5,6,7,8,9,10];
    nums.splice(0,nums.length);
    console.log(nums);
    
    
}

// T-014: What happens when you concatenate two empty arrays?

{
    const arr1 = [];
    const arr2 = [];
    const merged = arr1.concat(arr2);
    console.log(merged); // output will be an empty Array. []
    
}

// T-015: How can you check if a value is partially matching with any of the elements of an Array?
{
    const fruits = ["apple", "banana", "cherry"];
    const value = "apple";

    // const isPartiallyMatching = array.some(element => element.includes(value));
    const isMathching = fruits.includes(value)

    console.log(isMathching); // Output: true
}

// T-016: What is the difference between the slice() and splice() methods?
// slice(): slice is used to copy an Array. Splice() is used to add, delete, edit / replace any Element. 

// T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
{
    const fruits = ["apple", "water melon", "grapes", "banana", "cherry", "orange"];

    const ascendingSortedFruits = fruits.toSorted((a,b) => {
        return a==b ? 0 : a>b? 1 : -1;
    })

    const descendingSortedFruits = fruits.toSorted((a,b) => {
        return a==b ? 0 : a>b? -1 : 1;
    })
    console.log("Original Fruits Array: ", fruits);
    
    console.log("Ascending Sorted: ",ascendingSortedFruits);
    console.log("Descending Sorted: ",descendingSortedFruits);
    
    

}


// T-018: Can you give examples of sparse and dense arrays?
// {
//     Sparse Array Example
//     A sparse array has missing or unassigned indices:
//     const sparseArray = [];
//     sparseArray[0] = "apple";
//     sparseArray[5] = "banana"; // Indices 1 to 4 are empty
    
//     console.log(sparseArray); // Output: [ 'apple', <4 empty items>, 'banana' ]
//     console.log(sparseArray.length); // Output: 6

//     Here, the array has gaps between indices 0 and 5, making it sparse.


//     Dense Array Example
//     A dense array has elements assigned to every index without gaps:

// }


// T-020: How to convert an array to a string?

{
    const fruits = ["apple", "water melon", "grapes", "banana", "cherry", "orange"];
   console.log( fruits.join( ' '));
   
   
}



const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
];

// T-021: Can you filter employees who work in the "Engineering" department?
const engineeringDept = employees.filter((employee) => {
    return employee.departmentId === 2
})
console.log('Employees in Engineering Dept: ', engineeringDept);

// T-065: Group the follwing array elements based on age(Adult vs Non-Adult):

const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];

const userGroup =  Object.groupBy(users, ({age}) => {
    return age>=18 ? 'Adult' : 'Non-Adult';
})
console.log(userGroup);
