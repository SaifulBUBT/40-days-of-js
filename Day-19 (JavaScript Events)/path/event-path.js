console.log('Event Bubbling, Capturing, and Delegation');

// Event Bubbling
// In event bubbling, the event starts from the target element and bubbles upwards through its ancestors (parent → grandparent → etc.).

// The Flow is: Child → Parent → Grandparent → Document

document.getElementById('grandparent').addEventListener('click', function() {
    console.log('Grandparent clicked')
}); 

document.getElementById('parent').addEventListener('click', function() {
    console.log('Parent clicked')
});
document.getElementById('child').addEventListener('click', function() {
    console.log('Child clicked')
}); 

//Event Capturing
// In event capturing, the event flows from the outermost ancestor down to the target element before the actual target handles it.

// The Flow is: Document → Grandparent → Parent → Child

// Rarely used, but useful if you want to catch events before they reach the target.

document.getElementById('grandparent').addEventListener('click', function() {
    console.log('Grandparent clicked in capturing phase')
}, true);   
document.getElementById('parent').addEventListener('click', function(){
    console.log('Parent clicked in capturing phase');
}, true);

document.getElementById('child').addEventListener('click', function() {
    console.log('Child clicked in capturing phase');
}, true); 


// Event Delegation - it is a technique where you add a single event listener to a parent element instead of each child. It uses event bubbling to handle events from dynamically added or existing child elements.

// Efficient for handling events on lists, tables, or any repeated/dynamic content.
document.getElementById('itemList').addEventListener('click', function(event){
    console.log(event.target);
    
    if(event.target.tagName === 'LI') {
        console.log('You clicked on:', event.target.textContent);
    }
})


// event.stopPropagation() - event.stopPropagation() is a method used inside an event handler to stop the event from bubbling up (or propagating further) through the DOM tree
document.getElementById('father').addEventListener('click', function(event){
    console.log('Father clicked');
});
document.getElementById('son').addEventListener('click', function(event){
    event.stopPropagation(); // Stops the event from bubbling up to the father
    console.log('Son clicked');
}); 