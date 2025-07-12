// Preloader
$(window).on('load', function() {
    $('#preloader').fadeOut('slow');
});

// Efecto de scroll suave para enlaces internos
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    
    const target = $(this.getAttribute('href'));
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top - 80
        }, 800);
    }
});

// Cambiar clase de navbar al hacer scroll
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});

// Activar elementos de navegación al desplazar
$(window).on('scroll', function() {
    const scrollPos = $(document).scrollTop();
    
    $('nav a').each(function() {
        const currLink = $(this);
        const refElement = $(currLink.attr('href'));
        
        if (refElement.position().top <= scrollPos + 100 && 
            refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass('active');
            currLink.addClass('active');
        } else {
            currLink.removeClass('active');
        }
    });
});

// Animaciones al desplazar
$(document).ready(function() {
    // Inicializar animaciones
    function initAnimations() {
        $('.animate-on-scroll').each(function() {
            const element = $(this);
            const position = element.offset().top;
            const scrollPosition = $(window).scrollTop() + $(window).height();
            
            if (position < scrollPosition) {
                element.addClass('visible');
            }
        });
    }
    
    // Ejecutar al cargar y al desplazar
    initAnimations();
    $(window).on('scroll', initAnimations);
    
    // Animación para contadores
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    // Validación de formulario de contacto
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Validación simple
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();
        
        if (name && email && message) {
            // Simulación de envío exitoso
            const alertHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    ¡Gracias por tu mensaje! Te responderemos a la brevedad.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            
            $('#contactForm').prepend(alertHTML);
            $('#contactForm')[0].reset();
        } else {
            const alertHTML = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Por favor completa todos los campos obligatorios.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            
            $('#contactForm').prepend(alertHTML);
        }
    });
    
    // Tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();
    
    // Popovers
    $('[data-bs-toggle="popover"]').popover();
});

// Efecto de hover para tarjetas de características
$('.feature-card').hover(
    function() {
        $(this).find('.icon-box').css('transform', 'scale(1.1)');
    },
    function() {
        $(this).find('.icon-box').css('transform', 'scale(1)');
    }
);