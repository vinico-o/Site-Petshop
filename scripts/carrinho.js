// ==================== ELEMENTOS ====================
const abrir = document.getElementById('abrirCarrinho');
const fechar = document.getElementById('fecharCarrinho');
const sidebar = document.getElementById('sidebarCarrinho');
const overlay = document.getElementById('overlay');
// ==================== TOGGLE ====================
const toggle = (on) => {
    sidebar?.classList.toggle('ativo', on);
    overlay?.classList.toggle('ativo', on);
};
abrir?.addEventListener("click", () => toggle(true));
fechar?.addEventListener("click", () => toggle(false));
overlay?.addEventListener("click", () => toggle(false));
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
        toggle(false);
});
// ==================== CARRINHO ====================
const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}
const limite = 3;
const conteudo = document.querySelector('.carrinho-conteudo');
// ==================== EVENTOS ====================
document.addEventListener("click", (e) => {
    const target = e.target;
    const btn = target.closest(".add-to-cart");
    // ADD PRODUTO
    if (btn) {
        const id = btn.dataset.id;
        if (!id) {
            console.warn("Produto sem ID");
            return;
        }
        const produto = {
            id,
            nome: btn.dataset.nome || "Produto",
            img: btn.dataset.img || "",
            qtd: 1
        };
        const existente = carrinho.find(p => p.id === produto.id);
        if (existente) {
            if (existente.qtd < limite)
                existente.qtd++;
        }
        else {
            carrinho.push(produto);
        }
        salvarCarrinho();
        render();
        toggle(true);
        return;
    }
    // MAIS
    if (target.classList.contains("mais")) {
        const id = target.dataset.id;
        if (!id)
            return;
        const item = carrinho.find(p => p.id === id);
        if (item && item.qtd < limite)
            item.qtd++;
        salvarCarrinho();
        render();
        return;
    }
    // MENOS
    if (target.classList.contains("menos")) {
        const id = target.dataset.id;
        if (!id)
            return;
        const item = carrinho.find(p => p.id === id);
        if (!item)
            return;
        item.qtd--;
        if (item.qtd <= 0)
            remover(id);
        salvarCarrinho();
        render();
        return;
    }
    // REMOVER
    if (target.classList.contains("remover")) {
        const id = target.dataset.id;
        if (!id)
            return;
        remover(id);
        salvarCarrinho();
        render();
    }
});
// ==================== FUNÇÕES ====================
function remover(id) {
    const i = carrinho.findIndex(p => p.id === id);
    if (i !== -1)
        carrinho.splice(i, 1);
}
function render() {
    if (!conteudo)
        return;
    if (carrinho.length === 0) {
        conteudo.innerHTML = '<p class="carrinho-vazio">Seu carrinho está vazio</p>';
        return;
    }
    let html = "";
    carrinho.forEach(p => {
        const dentroDePages = window.location.pathname.includes("/pages/");
        const srcFinal = dentroDePages ? p.img : p.img.replace("../", "");
        html += `
      <div class="item">
        <div class="info">
          <img src="${srcFinal}">
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
    conteudo.innerHTML = html;
}
render();
// evita escopo global
export {};
