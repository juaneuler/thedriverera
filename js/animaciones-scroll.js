// Este archivo hace que se vayan ejecutando las animaciones a medida que se hace scroll. Una vez que se muestra el 20% de la sección, se dispara.
// Funciona de la siguiente manera: se carga X clase en el HTML, y esa clase es la condición que dispara la animación desde JavaScript

document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                let animClasses = ['animate__animated', 'animate__slower'];
                if (entrada.target.classList.contains('fade-in')) {
                    animClasses.push('animate__fadeIn');
                } else if (entrada.target.classList.contains('slide-up')) {
                    animClasses.push('animate__fadeInUp');
                } else if (entrada.target.classList.contains('zoom-in')) {
                    animClasses.push('animate__zoomIn');
                } else {
                    animClasses.push('animate__fadeInUp');
                }
                entrada.target.classList.add(...animClasses);
                entrada.target.style.opacity = 1; // Hace visible el elemento oculto cuando se dispara la animación
                observer.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elementos.forEach((el) => observer.observe(el));
});