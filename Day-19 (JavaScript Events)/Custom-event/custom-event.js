// Step 1: Create a Custom Event
    const myEvent = new CustomEvent('userLoggedIn', {
        detail: {
            userName: 'Saiful',
            role: 'admin'
        }
    })

// Step 2: Listen to the Custom Event
document.addEventListener('userLoggedIn', (e) => {
    console.log(`User login detected ${e.detail.userName} role is ${e.detail.role}`);
    
})

// Step 3: Dispatching the Custom Event / Registering the Event
document.dispatchEvent(myEvent);

//*********************** */

function loginUser(userName){
    const event = new CustomEvent('userLoggedIn', {
        detail: {userName}
    });

    document.dispatchEvent(event);
}

document.addEventListener('userLoggedIn', (e) => {
    document.getElementById('welcome').textContent = `Welcome, ${e.detail.userName}!`;
})



// create custom events
const catFound = new CustomEvent('animalFound', {
    detail: {
        name: 'Cat',
    }
})

const dogFound = new CustomEvent('animalFound', {
    detail: {
        name: 'Dog',
    }
})

const element = document.createElement('div');

element.addEventListener('animalFound', (e) => {
    console.log(`You have found a ${e.detail.name}`);
})

// dispatch the custom events
element.dispatchEvent(catFound);
element.dispatchEvent(dogFound);