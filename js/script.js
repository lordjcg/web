
document.addEventListener('DOMContentLoaded', function() {
    // Búsqueda de Juegos
    const searchForm = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (searchInput.value.trim() !== '') {
            alert('Buscando: ' + searchInput.value);
            // Aquí iría la lógica real de búsqueda
            searchInput.value = '';
        }
    });

    // Validación del Formulario de Iniciar Sesión

    const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function(e) {
 e.preventDefault();
 const username = this.querySelector('input[type="text"]').value;
 const password = this.querySelector('input[type="password"]').value;
 if (username && password) {
     alert('Iniciando sesión para: ' + username);
     // Aquí iría la lógica real de inicio de sesión
     this.reset();
 } else {
     alert('Por favor, introduce usuario y contraseña.');
 }
});

    // Mostrar/Ocultar Categorías Populares con un Botón
    const categoriesSection = document.querySelector('.aside-section .tags-cloud');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Mostrar/Ocultar Categorías';
    toggleButton.addEventListener('click', function() {
        categoriesSection.style.display = categoriesSection.style.display === 'none' ? 'block' : 'none';
    });
    categoriesSection.parentNode.insertBefore(toggleButton, categoriesSection);

    // Animación de Desplazamiento Suave al Hacer Clic en Enlaces del Menú
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Recomendación Aleatoria de un Juego en el Aside


    const games = [
        { name: 'God of War Ragnarok', genre: 'Acción/Aventura' },
        { name: 'Call of Duty: Black Ops Cold War', genre: 'FPS' },
        { name: 'DRAGON BALL Sparking ZERO', genre: 'Lucha' },
        { name: 'Elden Ring', genre: 'RPG de Acción' },
        { name: 'FIFA 23', genre: 'Deportes' }
    ];

    function getRandomGame() {
        return games[Math.floor(Math.random() * games.length)];
    }

    const recommendationSection = document.createElement('div');
    recommendationSection.className = 'aside-section';
    recommendationSection.innerHTML = '<h3>Recomendación del Día</h3><p id="random-game"></p>';
    document.querySelector('.sidebar').appendChild(recommendationSection);

    function updateRandomGame() {
        const game = getRandomGame();
        document.getElementById('random-game').textContent = `${game.name} - ${game.genre}`;
    }

    updateRandomGame();
    setInterval(updateRandomGame, 24 * 60 * 60 * 1000); // Cambia cada 24 horas





    // Sistema de Valoración de Juegos


    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        const ratingSystem = document.createElement('div');
        ratingSystem.className = 'rating-system';
        ratingSystem.innerHTML = `
            <span>Valoración: </span>
            <span class="stars">
                <i class="far fa-star" data-rating="1"></i>
                <i class="far fa-star" data-rating="2"></i>
                <i class="far fa-star" data-rating="3"></i>
                <i class="far fa-star" data-rating="4"></i>
                <i class="far fa-star" data-rating="5"></i>
            </span>
        `;
        card.querySelector('.game-info').appendChild(ratingSystem);

        const stars = ratingSystem.querySelectorAll('.fa-star');
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-rating');
                stars.forEach(s => {
                    s.className = parseInt(s.getAttribute('data-rating')) <= rating ? 'fas fa-star' : 'far fa-star';
                });
                alert(`Has valorado este juego con ${rating} estrellas.`);
            });
        });
    });
});

 // funcionalidades para el slide

  document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.slider-dot');
            const prevBtn = document.querySelector('.slider-prev');
            const nextBtn = document.querySelector('.slider-next');
            let currentSlide = 0;

            function showSlide(n) {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));

                currentSlide = (n + slides.length) % slides.length;
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            }

            function nextSlide() {
                showSlide(currentSlide + 1);
            }

            function prevSlide() {
                showSlide(currentSlide - 1);
            }

            // Event listeners
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => showSlide(index));
            });

            // Auto slide
            setInterval(nextSlide, 5000);
        });

   // funcionalidades para la seccion noticias

document.addEventListener('DOMContentLoaded', function() {
            // Elementos DOM
            const gridViewBtn = document.getElementById('gridView');
            const listViewBtn = document.getElementById('listView');
            const newsContainer = document.getElementById('newsContainer');
            const categoryFilter = document.getElementById('categoryFilter');
            const sortFilter = document.getElementById('sortFilter');

            // Cambio de vista
            gridViewBtn.addEventListener('click', function() {
                newsContainer.className = 'new-grid';
                gridViewBtn.classList.add('active');
                listViewBtn.classList.remove('active');
            });

            listViewBtn.addEventListener('click', function() {
                newsContainer.className = 'news-list';
                listViewBtn.classList.add('active');
                gridViewBtn.classList.remove('active');
            });

            // Filtrado por categoría
            categoryFilter.addEventListener('change', function() {
                const selectedCategory = this.value.toLowerCase();
                const articles = document.querySelectorAll('.news-article');

                articles.forEach(article => {
                    const category = article.querySelector('.news-category').textContent.toLowerCase();
                    if (selectedCategory === '' || category === selectedCategory) {
                        article.style.display = '';
                    } else {
                        article.style.display = 'none';
                    }
                });
            });

            // Ordenamiento
            sortFilter.addEventListener('change', function() {
                const articles = Array.from(document.querySelectorAll('.news-article'));
                const container = document.getElementById('newsContainer');

                switch(this.value) {
                    case 'recent':
                        articles.sort((a, b) => {
                            const dateA = new Date(a.querySelector('.news-date').textContent);
                            const dateB = new Date(b.querySelector('.news-date').textContent);
                            return dateB - dateA;
                        });
                        break;
                    case 'popular':
                        articles.sort((a, b) => {
                            const likesA = parseInt(a.querySelector('.fa-heart').parentNode.textContent);
                            const likesB = parseInt(b.querySelector('.fa-heart').parentNode.textContent);
                            return likesB - likesA;
                        });
                        break;
                    case 'commented':
                        articles.sort((a, b) => {
                            const commentsA = parseInt(a.querySelector('.fa-comment').parentNode.textContent);
                            const commentsB = parseInt(b.querySelector('.fa-comment').parentNode.textContent);
                            return commentsB - commentsA;
                        });
                        break;
                }

                // Limpiar y reordenar
                articles.forEach(article => container.appendChild(article));
            });

            // Implementar interacciones
            document.querySelectorAll('.interaction-button').forEach(button => {
                button.addEventListener('click', function() {
                    const icon = this.querySelector('i');
                    if (icon.classList.contains('far')) {
                        icon.classList.replace('far', 'fas');
                        const count = parseInt(this.textContent);
                        this.textContent = ' ' + (count + 1);
                        this.prepend(icon);
                    } else {
                        icon.classList.replace('fas', 'far');
                        const count = parseInt(this.textContent);
                        this.textContent = ' ' + (count - 1);
                        this.prepend(icon);
                    }
                });
            });
            // Paginación
            document.querySelectorAll('.page-button').forEach(button => {
                button.addEventListener('click', function() {
                    document.querySelectorAll('.page-button').forEach(btn => {
                        btn.style.background = 'white';
                    });
                    this.style.background = '#0066cc';
                    this.style.color = 'white';
                });
            });
        });


 // Slide para la seccion de noticias
 document.addEventListener('DOMContentLoaded', function() {
            const slide = document.querySelector('.slidE');
            const items = document.querySelectorAll('.item');
            const prev = document.querySelector('.prev');
            const next = document.querySelector('.next');

            let currentIndex = 0;
            let isAnimating = false;

            function updateSlide() {
                if (isAnimating) return;
                isAnimating = true;

                items.forEach(item => {
                    const content = item.querySelector('.conten');
                    if (content) {
                        content.style.display = 'none';

                        const name = content.querySelector('.name');
                        const des = content.querySelector('.des');
                        const button = content.querySelector('button');

                        if (name) name.style.animation = 'none';
                        if (des) des.style.animation = 'none';
                        if (button) button.style.animation = 'none';
                    }
                });

                void items[0].offsetWidth;

                items.forEach((item, index) => {
                    let position = index - currentIndex;
                    if (position < 0) position += items.length;

                    item.style.transition = '0.5s';

                    if (position === 0) {
                        item.style.transform = 'translate(0, 0)';
                        item.style.left = '0';
                        item.style.width = '100%';
                        item.style.height = '100%';
                        item.style.opacity = '1';
                        item.style.borderRadius = '0';
                        item.style.zIndex = '1';

                        const content = item.querySelector('.conten');
                        if (content) {
                            content.style.display = 'block';

                            const name = content.querySelector('.name');
                            const des = content.querySelector('.des');
                            const button = content.querySelector('button');

                            if (name) name.style.animation = 'animate 1s ease-in-out forwards';
                            if (des) des.style.animation = 'animate 1s ease-in-out 0.3s forwards';
                            if (button) button.style.animation = 'animate 1s ease-in-out 0.6s forwards';
                        }
                    } else {
                        const transformY = position === 1 ? '-50%' : '-50%';
                        const leftPos = position === 1 ? '50%' :
                                      position === 2 ? 'calc(50% + 220px)' :
                                      position === 3 ? 'calc(50% + 440px)' : 'calc(50% + 660px)';

                        item.style.transform = `translate(0, ${transformY})`;
                        item.style.left = leftPos;
                        item.style.width = '200px';
                        item.style.height = '300px';
                        item.style.opacity = position >= 4 ? '0' : '1';
                        item.style.zIndex = '0';
                    }
                });

                setTimeout(() => {
                    isAnimating = false;
                }, 500);
            }

            next.addEventListener('click', () => {
                if (!isAnimating) {
                    currentIndex = (currentIndex + 1) % items.length;
                    updateSlide();
                }
            });

            prev.addEventListener('click', () => {
                if (!isAnimating) {
                    currentIndex = (currentIndex - 1 + items.length) % items.length;
                    updateSlide();
                }
            });

            let autoplayInterval = setInterval(() => {
                if (!isAnimating) {
                    currentIndex = (currentIndex + 1) % items.length;
                    updateSlide();
                }
            }, 5000);

            document.querySelector('.game-showcase').addEventListener('mouseenter', () => {
                clearInterval(autoplayInterval);
            });

            document.querySelector('.game-showcase').addEventListener('mouseleave', () => {
                autoplayInterval = setInterval(() => {
                    if (!isAnimating) {
                        currentIndex = (currentIndex + 1) % items.length;
                        updateSlide();
                    }
                }, 5000);
            });

            updateSlide();
        });
