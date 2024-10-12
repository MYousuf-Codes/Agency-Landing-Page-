// TypeScript for Scroll Animations, Button Clicks
document.addEventListener('DOMContentLoaded', function () {
    var services = document.querySelectorAll('.service'); // Specify type for querySelectorAll
    var options = {
        root: null,
        threshold: 0.1,
    };
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.setAttribute('style', 'opacity: 1; animation: fadeInUp 0.5s forwards;'); // Fade in and apply animation
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);
    services.forEach(function (service) {
        observer.observe(service); // Observe each service item
    });
});
// Change header background color on scroll
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (header) { // Ensure header is not null
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#222';
        }
        else {
            header.style.backgroundColor = '#333';
        }
    }
});
// Get Started Button Click Functionality
var getStartedBtn = document.getElementById('getStartedBtn');
if (getStartedBtn) { // Check if button exists
    getStartedBtn.addEventListener('click', function () {
        var servicesSection = document.querySelector('.services-section');
        if (servicesSection) { // Ensure servicesSection is not null
            window.scrollTo({
                top: servicesSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
}
// Get elements
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('nav-links');
// Add click event listener to the hamburger button
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('click', function () {
    navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.toggle('active'); // Toggle nav links
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.toggle('active'); // Toggle hamburger to cross
});
// Add click event listener to nav links
var links = document.querySelectorAll('.nav-links li a');
links.forEach(function (link) {
    link.addEventListener('click', function () {
        navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.remove('active'); // Close nav links
        // Ensure hamburger is not null before modifying
        if (hamburger) {
            hamburger.classList.remove('active'); // Change hamburger back to lines
        }
    });
});
