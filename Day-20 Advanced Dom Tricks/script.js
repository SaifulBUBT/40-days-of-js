// Traverse up to parent <ul> Remove .active class from all <li> Add .active only to the clicked <li>const menuItems = document.querySelectorAll('.nav-menu li');

const menuItems = document.querySelectorAll('.nav-menu li');
menuItems.forEach(item => {
  item.addEventListener('click', function () {
    
    // Traverse up to parent <ul>
    const parentUl = this.parentElement;

    // Remove active class from all <li>
    parentUl.querySelectorAll('li').forEach(li => {
      li.classList.remove('active');
    });

    // Add active class to clicked <li>
    this.classList.add('active');
  });
});




// const navMenu = document.querySelector('.nav-menu');

// navMenu.addEventListener('click', function (e) {
//   if (e.target.tagName === 'LI') {

//     // Remove active from all li
//     this.querySelectorAll('li').forEach(li => {
//       li.classList.remove('active');
//     });

//     // Add active to clicked li
//     e.target.classList.add('active');
//   }
// });