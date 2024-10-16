/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {


    let fontSize = 16;

    function updateFontSize() {
        document.querySelectorAll('h2, h3, h4, p, background-color').forEach(element => {
            element.style.fontSize = fontSize + 'px';
        });
    }
    
    document.getElementById('increaseFont').addEventListener('click', () => {
        fontSize += 2; // Aumenta o tamanho da fonte
        updateFontSize(); // Aplica o novo tamanho a todos os h1, h2, h3, h4, p
    });
    
    document.getElementById('decreaseFont').addEventListener('click', () => {
        if (fontSize > 10) { // Limita o tamanho mínimo
            fontSize -= 2; // Diminui o tamanho da fonte
            updateFontSize(); // Aplica o novo tamanho a todos os h1, h2, h3, h4
        }
    });
    
    // Inicializa o tamanho da fonte
    updateFontSize();
    
    document.getElementById('toggleMode').addEventListener('click', () => {
        // Alterna a cor de fundo e do texto
        const isDarkMode = document.body.style.backgroundColor === 'black';
        document.body.style.backgroundColor = isDarkMode ? 'white' : 'black';
        document.body.style.color = isDarkMode ? 'black' : 'white';

        // Acessa a div específica
        const infoDiv = document.querySelector('.col-lg-4.text-lg-end');
        infoDiv.style.color = isDarkMode ? 'black' : 'white'; // Altera a cor do texto na div

        const modeButton = document.getElementById('toggleMode');
        const img = modeButton.querySelector('img');

        // Altera o texto alternativo e a imagem do botão
        if (img.alt === 'Modo Escuro') {
            img.alt = 'Modo Claro';
            img.src = 'assets/img/acessbilidade/contraste.png'; // Imagem para modo claro
        } else {
            img.alt = 'Modo Escuro';
            img.src = 'assets/img/acessbilidade/contraste.png'; // Imagem para modo escuro
        }
    });
    
    
    
    
    

    //carrosel
    let index = 0;

    const items = document.querySelectorAll('.carrossel-item');
    const totalItems = items.length;

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % totalItems;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    function updateCarousel() {
        const newTransformValue = -index * 1300; // Largura do carrossel
        document.querySelector('.carrossel-inner').style.transform = `translateX(${newTransformValue}px)`;
    }

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {

        }
       else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


});


