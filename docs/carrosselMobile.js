let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carroselMobile-images img').length;

function moveCarroselMobile(direction) {
    const slides = document.querySelector('.carroselMobile-images');

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // Calcula o novo índice de slide

    // Cada imagem ocupa 100vw, então o deslocamento é proporcional ao número de imagens
    const offset = currentSlide * -100;
    slides.style.transform = `translateX(${offset}vw)`;
}

// Identifica o botão clicado com base nas novas classes
document.querySelector('.carroselMobile-prev').addEventListener('click', function() {
    moveCarroselMobile(-1);
});

document.querySelector('.carroselMobile-next').addEventListener('click', function() {
    moveCarroselMobile(1);
});

// Função para implementar o swipe em dispositivos móveis
let startX;

document.querySelector('.carroselMobile').addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
});

document.querySelector('.carroselMobile').addEventListener('touchend', function(event) {
    let endX = event.changedTouches[0].clientX;
    let difference = startX - endX;

    if (difference > 50) {
        moveCarroselMobile(1); // Deslizar para esquerda
    } else if (difference < -50) {
        moveCarroselMobile(-1); // Deslizar para direita
    }
});

// Função para mover automaticamente para o próximo slide
function autoMoveCarrosel() {
    moveCarroselMobile(1);
}

// Inicia o movimento automático a cada 3 segundos (3000 ms)
setInterval(autoMoveCarrosel, 3000);
