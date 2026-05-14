// --- LÓGICA DO HERO SLIDER ---

let slideIndex = 0;
// Seleciona todas as divs que contêm as imagens
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Função que atualiza a posição do slider no ecrã
function updateSlider() {
    const slider = document.getElementById('slider');
    // Move o contentor das fotos para a esquerda consoante o index da foto atual
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Função para avançar ou recuar nas fotos
function moveSlide(direction) {
    slideIndex += direction;
    
    // Lógica para criar um "loop infinito" (se passar da última, volta à primeira e vice-versa)
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    
    updateSlider();
}

// Autoplay: O slider muda de foto automaticamente a cada 5 segundos (5000 milissegundos)
setInterval(() => {
    moveSlide(1);
}, 5000);

// --- LÓGICA DO CONTADOR DE DIAS ---

function calculateDays() {
    // ATENÇÃO: Substitui pela vossa data real! (Ano, Mês - 1, Dia)
    // Exemplo: Se começaram a namorar a 15 de Setembro de 2023 -> (2023, 8, 15)
    const startDate = new Date(2022, 9, 9); 
    const today = new Date();
    
    // Calcula a diferença em milissegundos
    const differenceInTime = today.getTime() - startDate.getTime();
    
    // Converte de milissegundos para dias
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    
    // Procura o elemento HTML e injeta o número
    const counterElement = document.getElementById('days-counter');
    if (counterElement) {
        counterElement.innerText = differenceInDays;
    }
}

// Executa a função
calculateDays();



function abrirModal() {
    document.getElementById('modalOfertas').classList.add('active');
}
function fecharModal() {
    document.getElementById('modalOfertas').classList.remove('active');
}
// Fechar ao clicar fora do card
document.getElementById('modalOfertas').addEventListener('click', function(e) {
    if (e.target === this) fecharModal();
});
