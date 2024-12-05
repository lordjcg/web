// Función principal para navegación entre páginas
function navegarA(pagina) {
    try {
        // Validar que la página exista en nuestro listado de páginas permitidas
        const paginasPermitidas = [
            'inicio.html',
            'juegos.html',
            'noticias.html'
        ];

        if (!paginasPermitidas.includes(pagina)) {
            console.error('Página no permitida:', pagina);
            return;
        }

        // Añadir lógica para guardar el estado actual si es necesario
        guardarEstado();

        // Redirigir a la página solicitada
        window.location.href = pagina;

    } catch (error) {
        console.error('Error al navegar:', error);
    }
}

// Función para guardar el estado actual antes de navegar
function guardarEstado() {
    // Aquí puedes añadir lógica para guardar el estado actual
    // Por ejemplo, guardar la posición del scroll o datos del formulario
    const estadoActual = {
        scrollPos: window.scrollY,
        ultimaPagina: window.location.href
    };

    sessionStorage.setItem('estadoNavegacion', JSON.stringify(estadoActual));
}

// Función para restaurar el estado cuando se carga una nueva página
function restaurarEstado() {
    try {
        const estadoGuardado = sessionStorage.getItem('estadoNavegacion');
        if (estadoGuardado) {
            const estado = JSON.parse(estadoGuardado);
            // Restaurar la posición del scroll u otros estados guardados
            window.scrollTo(0, estado.scrollPos);
        }
    } catch (error) {
        console.error('Error al restaurar estado:', error);
    }
}
