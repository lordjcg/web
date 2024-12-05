document.addEventListener('DOMContentLoaded', function() {
           const slide = document.querySelector('.slidE');
           const prevButton = document.querySelector('.button .prev');
           const nextButton = document.querySelector('.button .next');
           const progressBar = document.querySelector('.progress-bar');
           const items = document.querySelectorAll('.slidE .item');
           let currentIndex = 0;
           const slideInterval = 5000; // 5 segundos por slide

           function showSlide(index) {
               // Reiniciar animación de barra de progreso
               progressBar.style.width = '0%';
               setTimeout(() => {
                   progressBar.style.width = '100%';
               }, 50);

               // Desplazar slides
               slide.style.transform = `translateX(-${index * 100}%)`;
           }

           function nextSlide() {
               currentIndex = (currentIndex + 1) % items.length;
               showSlide(currentIndex);
           }

           function prevSlide() {
               currentIndex = (currentIndex - 1 + items.length) % items.length;
               showSlide(currentIndex);
           }

           // Configurar auto-slide
           let autoSlideInterval = setInterval(nextSlide, slideInterval);

           // Botones de navegación manual
           nextButton.addEventListener('click', () => {
               clearInterval(autoSlideInterval);
               nextSlide();
               autoSlideInterval = setInterval(nextSlide, slideInterval);
           });

           prevButton.addEventListener('click', () => {
               clearInterval(autoSlideInterval);
               prevSlide();
               autoSlideInterval = setInterval(nextSlide, slideInterval);
           });

           // Iniciar primera barra de progreso
           progressBar.style.width = '100%';
       });
