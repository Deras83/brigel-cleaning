document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.getElementById('menuHamburger');
    const navLinks = document.getElementById('navLinks');
    const contactForm = document.getElementById('contactForm');

    // Toggle menú móvil
    if (menuHamburger && navLinks) {
        menuHamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al presionar cualquier enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Manejo básico de envío de formulario
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }
});