window.addEventListener('DOMContentLoaded', event => {
    let fontSize = 16;

    function updateFontSize() {
        document.querySelectorAll('h2, h3, h4, p, background-color').forEach(element => {
            element.style.fontSize = fontSize + 'px';
        });
    }

    document.getElementById('increaseFont').addEventListener('click', () => {
        fontSize += 2; // Increase font size
        updateFontSize(); // Apply new size
    });

    document.getElementById('decreaseFont').addEventListener('click', () => {
        if (fontSize > 10) { // Limit minimum size
            fontSize -= 2; // Decrease font size
            updateFontSize(); // Apply new size
        }
    });

    // Initialize font size
    updateFontSize();

    document.getElementById('toggleMode').addEventListener('click', () => {
        // Toggle background and text color
        const isDarkMode = document.body.style.backgroundColor === 'black';
        document.body.style.backgroundColor = isDarkMode ? 'white' : 'black';
        document.body.style.color = isDarkMode ? 'black' : 'white';

        // Access specific div
        const infoDiv = document.querySelector('.col-lg-4.text-lg-end');
        infoDiv.style.color = isDarkMode ? 'black' : 'white'; // Change text color in the div

        const modeButton = document.getElementById('toggleMode');
        const img = modeButton.querySelector('img');

        // Change alt text and image of the button
        if (img.alt === 'Modo Escuro') {
            img.alt = 'Modo Claro';
            img.src = 'assets/img/acessbilidade/contraste.png'; // Image for light mode
        } else {
            img.alt = 'Modo Escuro';
            img.src = 'assets/img/acessbilidade/contraste.png'; // Image for dark mode
        }
    });

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when the page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
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

