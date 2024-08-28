/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
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

// script.js
document.addEventListener('DOMContentLoaded', () => {
    function animateNumber(id, start, end, duration) {
        const numberElement = document.getElementById(id);
        let count = start;
        const interval = 50; // Atualiza a cada 50 milissegundos
        const steps = Math.floor(duration / interval);
        const stepValue = (end - start) / steps;

        function updateNumber() {
            count += stepValue;
            if (count >= end) {
                count = end;
                clearInterval(intervalId);
            }
            numberElement.textContent = Math.floor(count).toString().padStart(2, '0');
        }

        const intervalId = setInterval(updateNumber, interval);
    }

    // Exemplo de animação para diferentes elementos
    animateNumber('number1', 0, 100, 7000); // 7 segundos para ir de 00 a 100:00
    animateNumber('number2', 0, 100, 7000); // 7 segundos para ir de 00:00 a 100:00
    animateNumber('number3', 0, 100, 7000); // 7 segundos para ir de 00:00 a 100:00
});
