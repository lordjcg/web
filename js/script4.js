// Array de ejemplo con juegos (esto se podría cargar desde una base de datos)
const juegos = [
    { nombre: 'Grand Theft Auto V', categoria: 'Acción', requisitos: 'Altos' },
    { nombre: 'Resident Evil 2', categoria: 'RPG', requisitos: 'Altos' },
    { nombre: 'Motogp 22', categoria: 'Deportes', requisitos: 'Medios' },
    { nombre: 'Uncharted 4 Legacy of Thieves', categoria: 'Aventura', requisitos: 'Bajos' },
    { nombre: 'Batman Arkham Origins', categoria: 'Acción', requisitos: 'Medios' },
    { nombre: 'Call of Duty World at war 2', categoria: 'Acción', requisitos: 'Altos' },
    { nombre: 'The Witcher 3', categoria: 'RPG', requisitos: 'Altos' },
    { nombre: 'watch Dogs', categoria: 'Acción', requisitos: 'Medios' },
    { nombre: 'Rocket League', categoria: 'Carreras', requisitos: 'Medios' },
    { nombre: 'Company of Heroes 3', categoria: 'Estrategia', requisitos: 'Medios' },
    { nombre: 'Mafia III Definitive Edition', categoria: 'Acción', requisitos: 'Altos' },
    { nombre: 'Left 4 Dead 2', categoria: 'RPG', requisitos: 'Bajos' },
    { nombre: 'Forza Horizon 5', categoria: 'Carreras', requisitos: 'Altos' },
    { nombre: 'ELDEN RING', categoria: 'Aventura', requisitos: 'Medios' },
    { nombre: 'Marvels SpiderMan Miles Morales', categoria: 'Acción', requisitos: 'Medios' },
    { nombre: 'Battlefield 2042', categoria: 'Acción', requisitos: 'Altos' },
    { nombre: 'Lords of the Fallen', categoria: 'RPG', requisitos: 'Altos' },
    { nombre: 'The Last Of Us', categoria: 'Aventura', requisitos: 'Altos' },
    { nombre: 'God of War', categoria: 'Aventura', requisitos: 'Altos' },
    { nombre: 'Cyberpunk 2077', categoria: 'Acción', requisitos: 'Altos' },
    { nombre: 'Battlefied 1', categoria: 'Acción', requisitos: 'Altos' },
    { nombre: 'Dying Light', categoria: 'Terror', requisitos: 'Altos' },
    { nombre: 'God of War Ragnarok', categoria: 'Aventura', requisitos: 'Altos' },
    { nombre: 'State of Decay 2', categoria: 'Aventura', requisitos: 'Bajos' },
    { nombre: 'Need for speed Most wanted', categoria: 'Carreras', requisitos: 'Bajos' },
    { nombre: 'Call of Duty Black Ops Cold War', categoria: 'Acción', requisitos: 'Altos' },
    { nombre: 'Rise of the Tomb Raider', categoria: 'Aventura', requisitos: 'Altos' },
    { nombre: 'Back 4 Blood Ultimate', categoria: 'Estrategia', requisitos: 'Bajos' },
    { nombre: 'Metro Exodus', categoria: 'Aventura', requisitos: 'Altos' },
    { nombre: 'Need for Speed: Most Wanted 2012', categoria: 'Carreras', requisitos: 'Medios' },
    { nombre: 'Call Of Duty Black Ops 3', categoria: 'Acción', requisitos: 'Altos' },
    { nombre: 'The Witcher 3', categoria: 'RPG', requisitos: 'Altos' },
    { nombre: 'Resident Evil 4 2023 Remake', categoria: 'Terror', requisitos: 'Medios' },
    { nombre: 'Daymare 1994 Sandcastle', categoria: 'Aventura', requisitos: 'Bajos' },
    { nombre: 'Call of Duty 4: Modern Warfare', categoria: 'Acción', requisitos: 'Bajos' },
    // Añade más juegos según necesites
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
            max-height: 300px;
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
           onclick="seleccionarJuego('${juego.nombre}')">
            <div style="font-weight: bold;">${juego.nombre}</div>
            <div style="font-size: 0.8em; color: #666;">
                ${juego.categoria} | Requisitos: ${juego.requisitos}
            </div>
        </div>
    `).join('');
}

// Función para manejar la selección de un juego
function seleccionarJuego(nombreJuego) {
    const inputBusqueda = document.querySelector('.search-container input');
    inputBusqueda.value = nombreJuego;
    document.getElementById('resultados-busqueda').style.display = 'none';
    // Aquí puedes añadir la lógica para redirigir a la página del juego
    console.log(`Juego seleccionado: ${nombreJuego}`);
}

// Función para realizar la búsqueda
function buscarJuegos(query) {
    if (!query) {
        mostrarResultados([]);
        return;
    }

    query = query.toLowerCase();
    const resultados = juegos.filter(juego =>
        juego.nombre.toLowerCase().includes(query) ||
        juego.categoria.toLowerCase().includes(query)
    );

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

    // Cerrar los resultados cuando se hace clic fuera
    document.addEventListener('click', (e) => {
        const contenedor = document.getElementById('resultados-busqueda');
        const searchContainer = document.querySelector('.search-container');

        if (!searchContainer.contains(e.target) && contenedor) {
            contenedor.style.display = 'none';
        }
    });
});
