const parent = document.getElementById('parent');
const form = document.getElementById('form');
const button = document.getElementById('button');



function listener(event) {
    // console.log(event.target);
    console.log(event.currentTarget);    
}

parent.addEventListener('click', listener);
form.addEventListener('click', listener, true);
button.addEventListener('click', listener);