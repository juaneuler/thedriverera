// Este archivo hace que se pinte de naranja la página activa en la barra de navegación

document.addEventListener("DOMContentLoaded", function () {
    let paginaActual = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll(".navbar-nav a");

    navLinks.forEach(link => {
        let pagina = link.getAttribute("href").split("/").pop();
        if (pagina === paginaActual) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});