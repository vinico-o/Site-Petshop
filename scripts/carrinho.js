const abrir = document.getElementById('abrirCarrinho');
const fechar = document.getElementById('fecharCarrinho');
const sidebar = document.getElementById('sidebarCarrinho');
const overlay = document.getElementById('overlay');

const toggle = (on) => {
  sidebar.classList.toggle('ativo', on);
  overlay.classList.toggle('ativo', on);
};

if (abrir) abrir.onclick = () => toggle(true);
if (fechar) fechar.onclick = () => toggle(false);
if (overlay) overlay.onclick = () => toggle(false);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") toggle(false);
});


// ==================== sist4ma CARRINHO ====================

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho)); 
} 


const limite = 3;
const conteudo = document.querySelector('.carrinho-conteudo');

document.addEventListener("click", (e) => {

  const btn = e.target.closest(".add-to-cart");

  if (btn) {
    if (!btn.dataset.id) {
      console.warn("Produto sem ID");
      return;
    }

    const produto = {
      id: btn.dataset.id,
      nome: btn.dataset.nome || "Produto",
      img: btn.dataset.img || "",
      qtd: 1
    };

    const existente = carrinho.find(p => p.id === produto.id);

    if (existente) {
      if (existente.qtd < limite) existente.qtd++;
    } else {
      carrinho.push(produto);
    }

    salvarCarrinho();
    render();
    toggle(true);
  };

  if (e.target.classList.contains("mais")) {
    const item = carrinho.find(p => p.id === e.target.dataset.id);
    if (item && item.qtd < limite) item.qtd++;
    salvarCarrinho();
    render();
  }

  if (e.target.classList.contains("menos")) {
    const item = carrinho.find(p => p.id === e.target.dataset.id);
    if (!item) return;

    item.qtd--;
    if (item.qtd <= 0) remover(item.id);

    salvarCarrinho();
    render();
  }

  if (e.target.classList.contains("remover")) {
    remover(e.target.dataset.id);
    salvarCarrinho();
    render();
  }
});

function remover(id) {
  const i = carrinho.findIndex(p => p.id === id);
  if (i !== -1) carrinho.splice(i, 1);
}

function render() {

  if (!conteudo) return;

  if (carrinho.length === 0) {
    conteudo.innerHTML = '<p class="carrinho-vazio">Seu carrinho está vazio</p>';
    return;
  }

  conteudo.innerHTML = "";

  carrinho.forEach(p => {
    conteudo.innerHTML += `
  <div class="item">
    
    <div class="info">
      ${p.img ? `<img src="${p.img}">` : ""}
      <p>${p.nome}</p>
    </div>

    <div class="acoes">
      <div class="qtd">
        <button class="menos" data-id="${p.id}">-</button>
        <span>${p.qtd}</span>
        <button class="mais" data-id="${p.id}">+</button>
      </div>

      <button class="remover" data-id="${p.id}">✕</button>
    </div>

  </div>
`;
  });
}

render();