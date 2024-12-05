// Array de ejemplo con juegos expandido con más información
const juegos = [
    {
        nombre: 'Grand Theft Auto V',
        categoria: 'Acción',
        requisitos: 'Altos',
        precio: 59.99,
        plataforma: ['PC', 'PS5', 'Xbox Series X'],
        url: 'juegos/gta-v.html',
        descripcion: 'Juego de mundo abierto con acción y aventura'
    },
    {
        nombre: 'The Witcher 3',
        categoria: 'RPG',
        requisitos: 'Altos',
        precio: 39.99,
        plataforma: ['PC', 'PS5', 'Xbox Series X'],
        url: 'juegos/witcher-3.html',
        descripcion: 'RPG de fantasía con mundo abierto'
    },
    {
        nombre: 'FIFA 24',
        categoria: 'Deportes',
        requisitos: 'Medios',
        precio: 69.99,
        plataforma: ['PC', 'PS5', 'Xbox Series X', 'PS4', 'Xbox One'],
        url: 'juegos/fifa-24.html',
        descripcion: 'Simulador de fútbol'
    },
    {
        nombre: 'Minecraft',
        categoria: 'Aventura',
        requisitos: 'Bajos',
        precio: 29.99,
        plataforma: ['PC', 'PS4', 'Xbox One', 'Switch', 'Mobile'],
        url: 'juegos/minecraft.html',
        descripcion: 'Juego de construcción y aventura'
    },
    {
        nombre: 'Counter-Strike 2',
        categoria: 'Acción',
        requisitos: 'Medios',
        precio: 0,
        plataforma: ['PC'],
        url: 'juegos/cs2.html',
        descripcion: 'Shooter táctico en primera persona'
    }
];

// Función para crear y mostrar el contenedor de resultados
function crearContenedorResultados() {
    const existente = document.getElementById('resultados-busqueda');
    if (!existente) {
        const contenedor = document.createElement('div');
        contenedor.id = 'resultados-busqueda';
        contenedor.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            max-height: 400px;
            overflow-y: auto;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            z-index: 1000;
            display: none;
        `;
        document.querySelector('.search-container').appendChild(contenedor);
    }
    return document.getElementById('resultados-busqueda');
}

// Función para formatear el precio
function formatearPrecio(precio) {
    return precio === 0 ? 'Gratis' : `$${precio.toFixed(2)}`;
}

// Función para mostrar los resultados de la búsqueda
function mostrarResultados(resultados) {
    const contenedor = crearContenedorResultados();
    contenedor.style.display = resultados.length ? 'block' : 'none';

    if (resultados.length === 0) return;

    contenedor.innerHTML = resultados.map(juego => `
        <div class="resultado-item" style="
            padding: 10px;
            border-bottom: 1px solid #eee;
            cursor: pointer;
            transition: background-color 0.2s;
        " onmouseover="this.style.backgroundColor='#f0f0f0'"
           onmouseout="this.style.backgroundColor='transparent'"
           onclick="seleccionarJuego('${juego.url}')">
            <div style="font-weight: bold;">${juego.nombre}</div>
            <div style="font-size: 0.8em; color: #666;">
                ${juego.categoria} | Requisitos: ${juego.requisitos} | ${formatearPrecio(juego.precio)}
            </div>
            <div style="font-size: 0.8em; color: #888;">
                Plataformas: ${juego.plataforma.join(', ')}
            </div>
            <div style="font-size: 0.8em; color: #888;">
                ${juego.descripcion}
            </div>
        </div>
    `).join('');
}

// Función para manejar la selección de un juego
function seleccionarJuego(url) {
    document.getElementById('resultados-busqueda').style.display = 'none';
    // Redirigir a la página del juego
    window.location.href = url;
}

// Función para realizar la búsqueda con múltiples campos
function buscarJuegos(query) {
    if (!query) {
        mostrarResultados([]);
        return;
    }

    query = query.toLowerCase();
    const resultados = juegos.filter(juego => {
        // Búsqueda en múltiples campos
        return (
            juego.nombre.toLowerCase().includes(query) ||
            juego.categoria.toLowerCase().includes(query) ||
            juego.requisitos.toLowerCase().includes(query) ||
            juego.descripcion.toLowerCase().includes(query) ||
            juego.plataforma.some(plat => plat.toLowerCase().includes(query)) ||
            formatearPrecio(juego.precio).toLowerCase().includes(query)
        );
    });

    // Ordenar resultados por relevancia
    resultados.sort((a, b) => {
        // Priorizar coincidencias exactas en el nombre
        const aNameMatch = a.nombre.toLowerCase().startsWith(query) ? 2 :
                          a.nombre.toLowerCase().includes(query) ? 1 : 0;
        const bNameMatch = b.nombre.toLowerCase().startsWith(query) ? 2 :
                          b.nombre.toLowerCase().includes(query) ? 1 : 0;
        return bNameMatch - aNameMatch;
    });

    mostrarResultados(resultados);
}

// Inicializar la funcionalidad de búsqueda cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const inputBusqueda = document.querySelector('.search-container input');
    const btnBusqueda = document.querySelector('.search-container button');

    // Manejar la entrada de texto
    inputBusqueda.addEventListener('input', (e) => {
        buscarJuegos(e.target.value);
    });

    // Manejar el clic en el botón de búsqueda
    btnBusqueda.addEventListener('click', () => {
        buscarJuegos(inputBusqueda.value);
    });

    // Manejar la tecla Enter
    inputBusqueda.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            buscarJuegos(inputBusqueda.value);
        }
    });

    // Cerrar los resultados cuando se hace clic fuera
    document.addEventListener('click', (e) => {
        const contenedor = document.getElementById('resultados-busqueda');
        const searchContainer = document.querySelector('.search-container');

        if (!searchContainer.contains(e.target) && contenedor) {
            contenedor.style.display = 'none';
        }
    });
});
