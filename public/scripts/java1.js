// JavaScript para desplazamiento suave al hacer clic en el enlace "Login"
document.querySelector('.nav-item a').addEventListener('click', function (event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto (salto directo)

    // Obtener la ubicación de la sección a la que nos queremos desplazar
    const targetId = this.getAttribute('href').substring(1);  // 'href' devuelve #login, eliminamos el '#'
    const targetElement = document.getElementById(targetId);

    // Desplazamiento suave hacia el formulario
    targetElement.scrollIntoView({
        behavior: 'smooth',  // Desplazamiento suave
        block: 'start'       // Aseguramos que el formulario esté en la parte superior de la ventana
    });
});
