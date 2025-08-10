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

// Step 3: Dispatching the Custom Event
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


