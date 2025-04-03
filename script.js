 // Usamos $(document).ready de jQuery
 $(document).ready(function(){

    // --- Script Reproductor de Video ---
    $('.video-list video').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var src = $(this).attr('src');
        $('.main-video').attr('src', src);
         $('.main-video')[0].load();
         $('.main-video')[0].play().catch(error => console.log("Autoplay prevenido:", error));
    });

    // --- Script Smooth Scroll ---
    $('a.nav-link[href*="#"]:not([href="#"])').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 60 // Offset navbar
                }, 800);

                 if ($('.navbar-toggler').is(':visible')) {
                    $('.navbar-collapse').collapse('hide');
                }
                $('.navbar-nav .nav-link').removeClass('active');
                $(this).addClass('active');
            }
        }
    });

    // --- Script Carrusel Canales YouTube (SwiperJS) ---
    const youtubeSwiper = new Swiper('.youtube-swiper', {
        loop: false,
        spaceBetween: 20,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            576: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            992: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 30 }
        }
    });

    // --- Script Modal Galería (NUEVO) ---
    const imageModalElement = document.getElementById('imageModal');
    if (imageModalElement) {
        imageModalElement.addEventListener('show.bs.modal', function (event) {
            const triggerElement = event.relatedTarget;
            const imageSrc = triggerElement.getAttribute('data-img-src');
            const imageAlt = triggerElement.getAttribute('data-img-alt') || 'Imagen Ampliada';
            const modalImage = imageModalElement.querySelector('#modalImage');
            const modalTitle = imageModalElement.querySelector('#imageModalLabel');
            modalImage.src = imageSrc;
            modalImage.alt = imageAlt;
            if (modalTitle) { modalTitle.textContent = imageAlt; }
        });
        imageModalElement.addEventListener('hidden.bs.modal', function () {
            const modalImage = imageModalElement.querySelector('#modalImage');
            modalImage.src = ''; // Limpiar al cerrar
        });
    }
    // --- Fin Script Modal Galería ---


    // --- Inicializar AOS ---
    AOS.init({
         duration: 800,
         once: true
    });

     // --- Año actual en Footer ---
     $('#currentYear').text(new Date().getFullYear());

}); // Fin $(document).ready