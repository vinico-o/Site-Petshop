const hamburger = document.querySelector(".hamburger") as HTMLElement;
const nav = document.querySelector(".navbar") as HTMLElement;

hamburger.addEventListener("click", (): void => {
    nav.classList.toggle("active");
});

const pesquisa = document.querySelector(".pesquisa") as HTMLElement;
const botaopesquisa = document.querySelector(".botaopesquisa") as HTMLElement;

botaopesquisa.addEventListener("click", (): void => {
    pesquisa.classList.toggle("active");
});