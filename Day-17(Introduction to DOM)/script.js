console.log("Day 17 - Introduction to DOM");

/*
- What is DOM?
- Understanding DOM Types
- Accessing DOM
- Mini Project(s)
- DevTools and DOM
- Tasks
*/

// DOM Types
    // 1. Document - Represents the entire page and it is the root node of the DOM tree.
        console.log(document);
    // 2. Node - A generic term for any elements in the DOM tree. Element Node, Text Node, Attribute Node.
    // 3. Element - A specific type of node that represents HTML tags/elements
    // 4. NodeList - An array of Nodes.
    // 5. Attr - repesents the attribute of a node.
        // <img src="/" alt="some image" />
    // 6. NameNodeMap - A collection of Attr.


// Accessing DOM

//By id
const titleElem = document.getElementById('heading');
console.log(titleElem);

//By class name
const infoElems = document.getElementsByClassName('info');
console.log(infoElems);


[...infoElems].forEach((element) => {
    console.log(element);
    
})

//BY tag name
const pTagElems = document.getElementsByTagName('p');
console.log(pTagElems);


// Selctors - Query Selector and Query Selector All

// Query Selector - querySelector()

let para = document.querySelector('.info');
console.log("using query selector: ", para);

//Query Selector All
let paras= document.querySelectorAll('.info');
console.log(paras);


// DOM Access Methods:

// 1. getElementById(id)
// 2. getElementsByClassName(className)
// 3. getElementsByTagName(tagName)
//4. querySelector(cssSelector)
//5. querySelectorAll(cssSelector)


// Mini Project - 1: Highlighter App

function highightText(){
    let elements = document.querySelectorAll('p.info');

    elements.forEach(elem => {
        elem.style.backgroundColor = 'yellow';
    })
}


// Mini Project - 2: Filter list
function filterList(){
    let inputElem = document.getElementById('searchInput');
    let input = inputElem.value;
    // console.log(input);
    
    const listItems = document.querySelectorAll('ul#itemList li');
    // console.log(listItems);
    listItems.forEach((item) => {
       item.style.display =  item.innerText.toLowerCase().includes(input.toLowerCase()) ? 'block' : 'none';
        
        
    })
    
}