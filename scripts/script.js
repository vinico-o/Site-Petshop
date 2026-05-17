const track = document.querySelector(".track");
const prevButton = document.getElementById("preview-button");
const nextButton = document.getElementById("next-button");

const cards = document.querySelectorAll(".card-servico");

let paginaAtual = 0;
let totalPaginas = cards.length / 2;

function carrossel(){
    track.style.transform = `translateX(-${paginaAtual * 98}%)`;
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