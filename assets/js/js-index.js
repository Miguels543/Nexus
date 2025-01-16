document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.ver-mas').forEach(button => {
        button.addEventListener('click', function() {
            const parentPlan = this.closest('.pricing-plan');
            const serviceList = parentPlan.querySelector('.service-list');
            serviceList.classList.toggle('show-all');
            this.textContent = serviceList.classList.contains('show-all') ? 'Ver menos' : 'Ver más';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.reseñas-carousel');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const cardWidth = 620; // Ancho de la tarjeta + margen

    leftArrow.addEventListener('click', () => {
        carousel.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        carousel.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });
});

document.querySelector('.contact-toggle').addEventListener('click', function() {
    const contactGrid = document.querySelector('.contact-grid');
    const contactForm = document.querySelector('.contact-form');

    contactGrid.classList.toggle('active');
    contactForm.classList.toggle('active');

    if (contactGrid.classList.contains('active')) {
        this.innerHTML = '<img src="https://res.cloudinary.com/dnw35uxqn/image/upload/v1732912583/down-arrow-svgrepo-com_sfhymh.png" alt="Desplegar" style="height: 1em; vertical-align: middle; margin-left: 70%;">';
    } else {
        this.innerHTML = '<img src="https://res.cloudinary.com/dnw35uxqn/image/upload/v1732912583/down-arrow-svgrepo-com_sfhymh.png" alt="Desplegar" style="height: 1em; vertical-align: middle; margin-left: 70%;">';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const textareas = document.querySelectorAll('.auto-resize');
    
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    });
});