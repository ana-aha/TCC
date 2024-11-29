window.addEventListener('DOMContentLoaded', event => {
    let fontSize = 16;

    // Função para atualizar o tamanho da fonte
    function updateFontSize() {
        document.querySelectorAll('h2, h3, h4, p, background-color').forEach(element => {
            element.style.fontSize = fontSize + 'px';
        });
    }

    // Aumentar o tamanho da fonte
    document.getElementById('increaseFont').addEventListener('click', () => {
        fontSize += 2; // Aumenta o tamanho da fonte
        updateFontSize(); // Aplica o novo tamanho
    });

    // Diminuir o tamanho da fonte
    document.getElementById('decreaseFont').addEventListener('click', () => {
        if (fontSize > 10) { // Limita o tamanho mínimo
            fontSize -= 2; // Diminui o tamanho da fonte
            updateFontSize(); // Aplica o novo tamanho
        }
    });

    // Inicializa o tamanho da fonte
    updateFontSize();

    // Mudar para modo escuro ou claro
    document.getElementById('toggleMode').addEventListener('click', () => {
        // Verifica se o modo escuro está ativado
        const isDarkMode = document.body.style.backgroundColor === 'black';

        // Alterna entre modo claro e escuro
        document.body.style.backgroundColor = isDarkMode ? 'white' : 'black';
        document.body.style.color = isDarkMode ? 'black' : 'white';

        // Muda a cor do texto no div específico
        const infoDiv = document.querySelector('.col-lg-4.text-lg-end');
        infoDiv.style.color = isDarkMode ? 'black' : 'white';

        const modeButton = document.getElementById('toggleMode');
        const img = modeButton.querySelector('img');

        // Muda o texto alternativo e a imagem do botão
        if (img.alt === 'Modo Escuro') {
            img.alt = 'Modo Claro';
            img.src = 'assets/img/acessbilidade/contraste.png'; // Imagem para modo claro
        } else {
            img.alt = 'Modo Escuro';
            img.src = 'assets/img/acessbilidade/contraste.png'; // Imagem para modo escuro
        }
    });

    // Função para aplicar o encolhimento da navbar na inicialização
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };
    document.querySelector('.navbar-toggler').addEventListener('click', function () {
        window.location.href = 'index.html';  // Redireciona para a página inicial
    });
    // Inicializa a função navbarShrink
    navbarShrink();

    // Ativa o scrollspy do Bootstrap na navegação principal
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Fecha a navbar responsiva quando um item do menu é clicado
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));

    // Adiciona o evento de clique para cada item de navegação
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();  // Simula um clique no botão de toggle para fechar o menu
            }
        });
    });
});
// Função para aplicar o encolhimento da navbar na inicialização
var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    } else {
        navbarCollapsible.classList.add('navbar-shrink');
    }
};

// Inicializa a função navbarShrink
navbarShrink();

// Ativa o scrollspy do Bootstrap na navegação principal
const mainNav = document.body.querySelector('#mainNav');
if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
    });
}

// Fecha a navbar responsiva quando um item do menu é clicado
const navbarToggler = document.body.querySelector('.navbar-toggler');
const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));

// Adiciona o evento de clique para cada item de navegação
responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();  // Simula um clique no botão de toggle para fechar o menu
        }
    });
});

// Adiciona o evento de clique ao botão de alternância para redirecionar para a página inicial
navbarToggler.addEventListener('click', function() {
    // Verifica se o menu está aberto (o que pode ser útil para evitar redirecionamento indesejado)
    if (document.body.classList.contains('navbar-collapse')) {
        window.location.href = 'index.html'; // Redireciona para a página inicial
    }
});
