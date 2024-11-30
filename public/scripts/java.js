document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario si se realizan validaciones

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (nombre && apellido && email && password) {
        alert('Registro exitoso!');
        // Aquí podrías redirigir o hacer alguna otra acción
        // Por ejemplo:
        // window.location.href = "Contenidos/contenido.html";
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
