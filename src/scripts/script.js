document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-contacto');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const motivo = document.getElementById('motivo').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validar campos
        if (!validarNombre(nombre)) {
            alert('Por favor, ingresa un nombre válido');
            return;
        }

        if (!validarEmail(email)) {
            alert('Por favor, ingresa un email válido');
            return;
        }

        if (!motivo) {
            alert('Por favor, selecciona un motivo de contacto');
            return;
        }

        if (mensaje.length < 10) {
            alert('El mensaje debe tener al menos 10 caracteres');
            return;
        }

        // Si todo está correcto, mostrar mensaje de éxito
        alert('¡Mensaje enviado con éxito!');
        formulario.reset();
    });

    // Funciones de validación
    function validarNombre(nombre) {
        return nombre.length >= 2;
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}); 