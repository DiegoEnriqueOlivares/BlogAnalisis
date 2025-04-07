// Función para abrir la pestaña correspondiente
function openTab(evt, tabName) {
    // Ocultar todas las pestañas de contenido
    let tabContents = document.querySelectorAll(".tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Elimina la clase active de todas las pestañas
    let tabLinks = document.querySelectorAll(".tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Mostramos el contenido de la pestaña activa
    document.getElementById(tabName).classList.add("active");

    // Añadir la clase active al botón de la pestaña seleccionada
    evt.currentTarget.classList.add("active");
}
// Mostramos el contenido por default
window.onload = function() {
    document.getElementById('btnInicio').click(); 
};