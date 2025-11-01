// Get the DOM elements for the hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Add a click event listener to the hamburger icon
hamburger.addEventListener("click", () => {
    // Toggle the 'active' class on both the hamburger and the nav menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close the mobile menu when a navigation link is clicked
// This is good for user experience on single-page-apps or when jumping to sections
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

