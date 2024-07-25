// script.js

// Add an event listener to the window object to detect scrolling
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar'); // Get the navbar element
    if (window.scrollY > 50) { // Check if the scroll position is greater than 50 pixels
        navbar.classList.add('nav-scrolled'); // Add the class to change the background color
    } else {
        navbar.classList.remove('nav-scrolled'); // Remove the class if the scroll position is less than 50 pixels
    }
});

// Add an event listener for the active link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-link.active').classList.remove('active');
        this.classList.add('active');
    });
});
