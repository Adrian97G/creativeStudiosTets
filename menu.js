// Select elements
const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.navbar ul');

// Toggle menu visibility on click
menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('show'); // Add or remove 'show' class
});