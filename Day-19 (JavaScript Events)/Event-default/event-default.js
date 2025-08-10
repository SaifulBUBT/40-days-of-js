document.getElementById('websiteLink').addEventListener('click', (e)=> {
    e.preventDefault(); // Prevents the default action of the event, which is navigating to the link
    console.log('Link clicked, but default action prevented');
})


document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the default form submission action
    console.log('Form submitted, but default action prevented');
    // You can add your custom form handling logic here 
})