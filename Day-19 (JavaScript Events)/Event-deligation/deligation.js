const list = document.getElementById('list');
list.addEventListener('click', function(event) {
    // console.log(event.target);
    if(event.target.matches('li')) {
        
        if(event.target.textContent.toLowerCase() === 'javascript'){
            event.target.style.backgroundColor = 'yellow';
        } else{
            event.target.style.backgroundColor = 'lightblue';
        }
        
    }
});


// Adding a new item to the list
const languageInput = document.getElementById('language-id');
const addButton = document.getElementById('add-btn');

addButton.addEventListener('click', function() {
    if(languageInput.value.trim() === '') {
        alert('Please enter a language');
        return;
    }
    const newItem = document.createElement('li');
    newItem.textContent = languageInput.value;
    list.appendChild(newItem);
    languageInput.value = ''; 

    
})