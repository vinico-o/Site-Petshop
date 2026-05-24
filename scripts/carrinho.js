const abrir = document.getElementById('abrirCarrinho');
const fechar = document.getElementById('fecharCarrinho');
const sidebar = document.getElementById('sidebarCarrinho');
const overlay = document.getElementById('overlay');

const toggle = (on) => {
    sidebar.classList.toggle('ativo', on);
    overlay.classList.toggle('ativo', on);
};

abrir.onclick = () => toggle(true);
fechar.onclick = () => toggle(false);
overlay.onclick = () => toggle(false);

document.onkeydown = (e) => {
    if (e.key === 'Escape') toggle(false);
};