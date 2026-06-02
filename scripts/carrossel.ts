const track = document.querySelector<HTMLDivElement>(".track")!; // o ! indica que com certeza o elemento existe
const prevButton = document.getElementById("preview-button") as HTMLButtonElement;
const nextButton = document.getElementById("next-button") as HTMLButtonElement;
const cards = document.querySelectorAll<HTMLDivElement>(".card-servico");

let paginaAtual: number = 0;
let totalPaginas: number = 0;

if (window.innerWidth <= 768) {
    totalPaginas = cards.length;
} else {
    totalPaginas = cards.length / 2;
}

function carrossel(): void {
    const largura: number = cards[0].getBoundingClientRect().width;
    const gap: number = 20;
    let deslocamento: number;

    if (window.innerWidth <= 768) {
        deslocamento = paginaAtual * (largura + gap);
    } else {
        deslocamento = paginaAtual * ((largura * 2) + gap * 2);
    }

    track.style.transform = `translateX(-${deslocamento}px)`;
}

nextButton?.addEventListener("click", () => {

    if(paginaAtual < totalPaginas - 1){
        paginaAtual++;
    } else {
        paginaAtual = 0;
    }
    carrossel();
});

prevButton?.addEventListener("click", () => {
    if(paginaAtual > 0){
        paginaAtual--;
    } else {
        paginaAtual = totalPaginas - 1;
    }
    carrossel();
});


//evita o escopo global (remove o erro de variavel declarada duas vezes ou algo do tipo)
export {};