// TypeScript for Scroll Animations, Button Clicks
document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll<HTMLElement>('.service'); // Specify type for querySelectorAll

    const options: IntersectionObserverInit = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('style', 'opacity: 1; animation: fadeInUp 0.5s forwards;'); // Fade in and apply animation
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    services.forEach(service => {
        observer.observe(service); // Observe each service item
    });
});


// Change header background color on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header') as HTMLElement | null;
    if (header) { // Ensure header is not null
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#222';
        } else {
            header.style.backgroundColor = '#333';
        }
    }
});

// Get Started Button Click Functionality
const getStartedBtn = document.getElementById('getStartedBtn') as HTMLButtonElement | null;

if (getStartedBtn) { // Check if button exists
    getStartedBtn.addEventListener('click', () => {
        const servicesSection = document.querySelector('.services-section') as HTMLElement | null;

        if (servicesSection) { // Ensure servicesSection is not null
            window.scrollTo({
                top: servicesSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// Get elements
const hamburger = document.getElementById('hamburger') as HTMLElement | null;
const navLinks = document.getElementById('nav-links') as HTMLElement | null;

// Add click event listener to the hamburger button
hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('active'); // Toggle nav links
    hamburger?.classList.toggle('active'); // Toggle hamburger to cross
});

// Add click event listener to nav links
const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks?.classList.remove('active'); // Close nav links
        // Ensure hamburger is not null before modifying
        if (hamburger) {
            hamburger.classList.remove('active'); // Change hamburger back to lines
        }
    });
});
