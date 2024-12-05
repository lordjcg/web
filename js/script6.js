// Array de juegos con sus categorías
const games = [
    {
        id: 1,
        title: "The walking dead",
        image: "imagenes css/the-walking-dead-juegos-de-zombies-para-pc-cke.jpg",
        categories: ["accion", "aventura", "terror"],
        requirements: "altos"
    },
    {
        id: 2,
        title: "Need for Speed Heat",
        image: "imagenes css/need.jpg",
        categories: ["carreras", "accion"],
        requirements: "altos"
    },
    {
        id: 3,
        title: "STAR WARS",
        image: "imagenes css/STAR-WARS.jpg",
        categories: ["accion", "aventura"],
        requirements: "medios"
    },
    {
        id: 3,
        title: "Grand Theft Auto V",
        image: "imagenes css/gta-v-e1589898861821.jpg",
        categories: ["accion", "aventura"],
        requirements: "altos"
    },
    {
        id: 5,
        title: "The Last Of Us",
        image: "imagenes css/The-Last-of-Us-Part-I-Deluxe-Edition-1-193x288.jpg",
        categories: ["accion", "aventura"],
        requirements: "altos"
    },
    {
        id: 6,
        title: "Rocket League",
        image: "imagenes css/Rockt league.jpeg",
        categories: ["accion", "carreras"],
        requirements: "medios"
    },
    {
        id: 7,
        title: "Forza Horizon 5",
        image: "imagenes css/forza horizon 5.jpeg",
        categories: ["accion", "carreras"],
        requirements: "altos"
    },
    {
        id: 8,
        title: "watch Dogs",
        image: "imagenes css/watch.jpeg",
        categories: ["accion", "aventura"],
        requirements: "medios"
    },
    {
        id: 9,
        title: "God of War",
        image: "imagenes css/god-of-war-en-pc_862x485.jpg",
        categories: ["accion", "aventura"],
        requirements: "altos"
    },
    {
        id: 10,
        title: "Forza Horizon 4",
        image: "imagenes css/forza horizon 4.jpeg",
        categories: ["accion", "carreras"],
        requirements: "altos"
    },
    {
        id: 11,
        title: "Battlefield 2042",
        image: "imagenes css/battlefield.jpeg",
        categories: ["accion", "aventura"],
        requirements: "altos"
    },
    {
        id: 12,
        title: "Need for speed Most wanted",
        image: "imagenes css/needf.jpeg",
        categories: ["accion", "carreras"],
        requirements: "bajos"
    },
    {
        id: 13,
        title: "Battlefied 1",
        image: "imagenes css/battlefield1.jpeg",
        categories: ["accion", "aventura"],
        requirements: "altos"
    },
    {
        id: 14,
        title: "Dying Light",
        image: "imagenes css/dying-light-juegos-de-zombies-para-pc-cke.jpg",
        categories: ["terror", "aventura"],
        requirements: "medios"
    },
    {
        id: 15,
        title: "Dying Light 2 Stay Human",
        image: "imagenes css/Dying-Light-2-Stay-Human.jpeg",
        categories: ["terror", "aventura"],
        requirements: "medios"
    },
    {
        id: 16,
        title: "Metro 2033",
        image: "imagenes css/metro 2033.jpg",
        categories: ["accion", "aventura"],
        requirements: "altos"
    },
    {
        id: 17,
        title: "Left 4 Dead 2",
        image: "imagenes css/left 4 dead.jpg",
        categories: ["rpg", "aventura"],
        requirements: "bajos"
    },
    {
        id: 18,
        title: "Call Of Duty Black Ops 3",
        image: "imagenes css/blac.jpeg",
        categories: ["accion", "aventura"],
        requirements: "altos"
    },
    {
        id: 19,
        title: "Call of Duty Black Ops Cold War",
        image: "imagenes css/call of duty cold war.jpg",
        categories: ["accion", "aventura"],
        requirements: "altos"
    },
    {
        id: 20,
        title: "Chernobylite",
        image: "imagenes css/Chernobylite-193x288.jpg",
        categories: ["accion", "aventura"],
        requirements: "medios"
    },
    {
        id: 21,
        title: "God of War Ragnarok",
        image: "imagenes css/God-of-War-Ragnarok-1.jpg",
        categories: ["accion", "aventura"],
        requirements: "altos"
    },
    {
        id: 22,
        title: "Batman Arkham Origins",
        image: "imagenes css/batman-arkham-origins-complete-edition-10250-poster-193x288.jpg",
        categories: ["accion", "aventura"],
        requirements: "medios"
    },
    {
        id: 23,
        title: "STAR WARS",
        image: "imagenes css/hq720.jpg",
        categories: ["accion", "aventura"],
        requirements: "medios"
    },
    {
        id: 24,
        title: "Dead Island",
        image: "imagenes css/STAR-WARS.jpg",
        categories: ["terror", "aventura"],
        requirements: "altos"
    },
    {
        id: 25,
        title: "Resident Evil 2",
        image: "imagenes css/resident-evil-2-juegos-de-zombies-para-pc-0-cke.jpg",
        categories: ["accion", "aventura"],
        requirements: "medios"
    },
    {
        id: 26,
        title: "STAR WARS",
        image: "imagenes css/STAR-WARS.jpg",
        categories: ["accion", "aventura"],
        requirements: "medios"
    },
    {
        id: 27,
        title: "Metro Exodus",
        image: "imagenes css/metro.jpeg",
        categories: ["accion", "aventura"],
        requirements: "altos"
    },
    {
        id: 28,
        title: "Call of Duty World at war 2",
        image: "imagenes css/call-of-duty-world-at-war.jpg",
        categories: ["accion", "aventura"],
        requirements: "altos"
    },
    {
        id: 29,
        title: "Daymare 1994 Sandcastle",
        image: "imagenes css/Daymare-1994-Sandcastle-193x288.jpg",
        categories: [ "aventura"],
        requirements: "bajos"
    },
    {
        id: 30,
        title: "Back 4 Blood Ultimate",
        image: "imagenes css/Back-4-Blood-Ultimate-Edition-193x288.jpg",
        categories: [ "estrategia"],
        requirements:  "bajos"
    }


];

// Función para filtrar juegos por categoría y requisitos
function filterGames(category, requirements) {
    return games.filter(game =>
        game.categories.includes(category.toLowerCase()) &&
        (requirements === 'todos' || game.requirements === requirements.toLowerCase())
    );
}

// Función para crear una tarjeta de juego
function createGameCard(game) {
    return `
        <div class="game-card">
            <img src="${game.image}" alt="${game.title}" class="game-image">
            <div class="game-info">
                <h3>${game.title}</h3>
                <a href="#download" class="download-button">Descargar</a>
            </div>
        </div>
    `;
}

// Función para actualizar la grid de juegos
function updateGamesGrid(filteredGames) {
    const gamesGrid = document.querySelector('.games-grid');
    if (gamesGrid) {
        gamesGrid.innerHTML = filteredGames.map(game => createGameCard(game)).join('');
    }
}

// Función para inicializar los event listeners
function initializeCategoryFilters() {
    // Seleccionar todos los enlaces de categorías en el menú desplegable
    const categoryLinks = document.querySelectorAll('.submenu-column ul li a');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Obtener la categoría del texto del enlace (ignorando el ícono)
            const category = this.textContent.trim();

            // Obtener los requisitos de la columna padre
            const requirements = this.closest('.submenu-column')
                                   .querySelector('h3')
                                   .textContent
                                   .toLowerCase()
                                   .replace(' requisitos', '');

            // Filtrar los juegos
            const filteredGames = filterGames(category, requirements);

            // Actualizar el título de la sección
            const sectionTitle = document.querySelector('.section-title');
            if (sectionTitle) {
                sectionTitle.textContent = `Juegos de ${category} - ${requirements} requisitos`;
            }

            // Actualizar la grid de juegos
            updateGamesGrid(filteredGames);
        });
    });
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initializeCategoryFilters);

// Agregar estilos CSS para mejorar la interacción
const styles = `
    .submenu-container {
        display: none;
        position: absolute;
        background: white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        z-index: 1000;
    }

    .nav-links li:hover .submenu-container {
        display: block;
    }

    .games-grid {
        transition: all 0.3s ease;
    }

    .game-card {
        transition: transform 0.2s ease;
    }

    .game-card:hover {
        transform: translateY(-5px);
    }
`;

// Agregar los estilos al documento
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
