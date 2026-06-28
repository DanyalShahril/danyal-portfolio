document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll for Nav Links
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Intersection Observer for Fade-in Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger CSS transition
                entry.target.classList.add('visible');
                // Unobserve so it only animates once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Grab all sections with the fade-section class
    const sections = document.querySelectorAll('.fade-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});