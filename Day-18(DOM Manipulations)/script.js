// Remove / Replace element


const heading = document.getElementById("heading");
// heading.remove(); // Remove the heading element

const list = document.getElementById("itemList");
// console.log(list.children);
const itemToRemove = list.children[0];
list.removeChild(itemToRemove);


// list.replaceChildren('hellow world'); // Replace all children of the list with 'hellow world'


//Read write and update attributes
const imgElement = document.querySelector("img");
console.log(imgElement.getAttribute("src")); // Read the src attribute
console.log(imgElement.getAttribute("alt"));
imgElement.setAttribute("width", "200px") // Read the src attribute
imgElement.setAttribute("height", "200px") 
console.log(imgElement.hasAttribute("src")); // Check if the src attribute exists

imgElement.removeAttribute("height"); // Remove the src attribute


// - Travarsing/Navigating DOM

{
    //parentElement / parentNode
    const spanElement = document.getElementById("text");
    console.log("Parent Element", spanElement.parentElement);// Get the parent element of the span element
    console.log("Grand Parent Element:", spanElement.parentElement.parentElement); 
    console.log("Parent Node:", spanElement.parentNode)
    console.log("Grand Parent Node:", spanElement.parentNode.parentNode)

    // childern and childNodes
    const mainElem = document.getElementById("main-id");
    console.log("Children:", mainElem.children);
    console.log("Child Nodes:", mainElem.childNodes);

    console.log("First Child:", mainElem.firstChild);
    console.log("First Element Child:", mainElem.firstElementChild)
    console.log("Last Child:", mainElem.lastChild);
    console.log("Last Element Child:", mainElem.lastElementChild)   


    
    // nextSibling
    // nextElementSibling
    // previousSibling
    // previousElementSibling
    const something = document.getElementById("something-id2");
    console.log("Next Sibling:", something.nextSibling);
    console.log("Next Element Sibling:", something.nextElementSibling);
    console.log("Previous Sibling:", something.previousSibling);
    console.log("Previous Element Sibling:", something.previousElementSibling);


}