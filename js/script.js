// Show button when user scrolls down 100px from the top
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll smoothly to the top when button is clicked
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const burgerIcon = document.getElementById("nav-burger-icon");
    const closeIcon = document.getElementById("nav-close-icon");
    const navBar = document.getElementsByClassName("mobile-menu")[0]; // Ensure to select the first element if there are multiple

    // Function to show the navigation menu
    function showMenu() {
        burgerIcon.style.display = "none"; // Hide burger icon
        closeIcon.style.display = "block"; // Show close icon
        navBar.style.display = "block";    // Show navigation menu
    }

    // Function to hide the navigation menu
    function hideMenu() {
        burgerIcon.style.display = "block"; // Show burger icon
        closeIcon.style.display = "none";   // Hide close icon
        navBar.style.display = "none";      // Hide navigation menu
    }

    // Add click event listeners to icons
    if (burgerIcon) {
        burgerIcon.addEventListener("click", showMenu);
    }
    if (closeIcon) {
        closeIcon.addEventListener("click", hideMenu);
    }

    const servicesLink = document.querySelector('.dropdown > a');
    const dropdownMenu = document.querySelector('.dropdown-list');

    // Ensure the dropdown menu is positioned correctly
    if (servicesLink && dropdownMenu) {
        const servicesWidth = servicesLink.offsetWidth;
        dropdownMenu.style.width = `${servicesWidth}px`;

        const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.style.width = `${servicesWidth}px`;
        });
    }
});