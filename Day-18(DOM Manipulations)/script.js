//Craete element
{
  const pElem = document.createElement("p");
  pElem.innerText = "This is a para created using JS";
  pElem.style.color = "red";
  document.body.appendChild(pElem);
}

//Insert element
{
  const spanElem = document.createElement("span");
  spanElem.innerText = "I am a span element";
  spanElem.style.color = "blue";

  const infoElem = document.querySelector(".info");
  const divElem = document.getElementById("main-id");

  divElem.insertBefore(spanElem, infoElem); // Insert spanElem before infoElem in the body
  //   divElem.insertBefore(spanElem, infoElem);
}

// Remove / Replace element
{
  const heading = document.getElementById("heading");
  // heading.remove(); // Remove the heading element

  const list = document.getElementById("itemList");
  // console.log(list.children);
  const itemToRemove = list.children[0];
  list.removeChild(itemToRemove);

  // list.replaceChildren('hellow world'); // Replace all children of the list with 'hellow world'

  const card = document.querySelector(".card");
  const newHeading = document.createElement("h1");
  newHeading.innerText = "This is a new heading";
  newHeading.style.color = "green";
  card.replaceChild(newHeading, card.children[0]); // Replace the first child of the card with newHeading
  // card.replaceChildren(newHeading); // Replace all children of the card with newHeading
}

//Read write and update attributes
{
  const imgElement = document.querySelector("img");
  console.log(imgElement.getAttribute("src")); // Read the src attribute
  console.log(imgElement.getAttribute("alt"));
  imgElement.setAttribute("width", "200px"); // Read the src attribute
  imgElement.setAttribute("height", "200px");
  console.log(imgElement.hasAttribute("src")); // Check if the src attribute exists

  imgElement.removeAttribute("height"); // Remove the src attribute
}

// - Travarsing/Navigating DOM

{
  //parentElement / parentNode
  const spanElement = document.getElementById("text");
  console.log("Parent Element", spanElement.parentElement); // Get the parent element of the span element
  console.log("Grand Parent Element:", spanElement.parentElement.parentElement);
  console.log("Parent Node:", spanElement.parentNode);
  console.log("Grand Parent Node:", spanElement.parentNode.parentNode);

  // childern and childNodes
  const mainElem = document.getElementById("main-id");
  console.log("Children:", mainElem.children);
  console.log("Child Nodes:", mainElem.childNodes);

  console.log("First Child:", mainElem.firstChild);
  console.log("First Element Child:", mainElem.firstElementChild);
  console.log("Last Child:", mainElem.lastChild);
  console.log("Last Element Child:", mainElem.lastElementChild);

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
