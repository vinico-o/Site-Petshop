const track = document.querySelector(".track");
const prevButton = document.getElementById("preview-button");
const nextButton = document.getElementById("next-button");

const cards = document.querySelectorAll(".card-servico");

let paginaAtual = 0;
let totalPaginas = 0;

if (window.innerWidth <= 768) {
    totalPaginas = cards.length;
} else {
    totalPaginas = cards.length / 2;
}

function carrossel(){
    const largura = cards[0].getBoundingClientRect().width;
    const gap = 20;
    let deslocamento;
    //calculando o deslocamento baseado no tamanho do cerd
    //para nao ter problema com o card ser cortado em algumas partes
    if (window.innerWidth <= 768) {
        deslocamento = paginaAtual * (largura + gap);
    } else {
        deslocamento = paginaAtual * ((largura * 2) + gap * 2);
    }

    track.style.transform = `translateX(-${deslocamento}px)`;
}

nextButton.addEventListener("click", () => {

    if(paginaAtual < totalPaginas - 1){
        paginaAtual++;
    } else {
        paginaAtual = 0;
    }
    carrossel();
});

prevButton.addEventListener("click", () => {
    if(paginaAtual > 0){
        paginaAtual--;
    } else {
        paginaAtual = totalPaginas - 1;
    }
    carrossel();
});