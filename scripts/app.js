const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");
hamburger.addEventListener("click", () => nav.classList.toggle("active"));

const pesquisa = document.querySelector(".pesquisa");
const botaopesquisa = document.querySelector(".botaopesquisa");

botaopesquisa.addEventListener("click", () => {
    pesquisa.classList.toggle("active");
});