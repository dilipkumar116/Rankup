// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Scroll animation for service items
    const serviceItems = document.querySelectorAll('.service-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    serviceItems.forEach(item => {
        observer.observe(item);
    });

    // Form container expansion
    const formContainer = document.querySelector('.form-container');
    const formIndicator = document.querySelector('.form-indicator');
    let startY = 0;
    let isDragging = false;

    formContainer.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isDragging = true;
    });

    formContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const currentY = e.touches[0].clientY;
        const diff = startY - currentY;

        if (diff > 50 && !formContainer.classList.contains('expanded')) {
            // Swipe up - expand
            formContainer.classList.add('expanded');
            formIndicator.textContent = 'Swipe down to minimize ↓';
        } else if (diff < -50 && formContainer.classList.contains('expanded')) {
            // Swipe down - minimize
            formContainer.classList.remove('expanded');
            formIndicator.textContent = 'Swipe up to expand form ↑';
        }
    });

    formContainer.addEventListener('touchend', () => {
        isDragging = false;
    });
});