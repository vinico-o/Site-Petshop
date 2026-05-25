const produtos = [

    // ================= Rações Cachorro =================

    {
        id: 1,
        nome: "Ração Golden Special Frango e Carne",
        animal: "cachorro",
        tipo: "ração",
        marca: "Golden",
        preco: 159.90,
        estoque: 10,
        imagem: "../imgs/lista-produtos/Ração Golden Special Frango e Carne.jpg"
    },

    {
        id: 2,
        nome: "Ração Premier Formula Adultos",
        animal: "cachorro",
        tipo: "ração",
        marca: "Premier",
        preco: 189.90,
        estoque: 8,
        imagem: "../imgs/lista-produtos/Ração Premier Formula Adultos.jpg"
    },

    {
        id: 3,
        nome: "Ração Pedigree Carne e Vegetais",
        animal: "cachorro",
        tipo: "ração",
        marca: "Pedigree",
        preco: 124.90,
        estoque: 12,
        imagem: "../imgs/lista-produtos/Ração Pedigree Carne e Vegetais.jpg"
    },

    // ================= Recipientes Cachorro =================

    {
        id: 4,
        nome: "Comedouro Inox Antiderrapante",
        animal: "cachorro",
        tipo: "recipiente",
        marca: "Chalesco",
        preco: 39.90,
        estoque: 20,
        imagem: "../imgs/lista-produtos/Comedouro Inox Antiderrapante.jpg"
    },

    {
        id: 5,
        nome: "Bebedouro Automático Azul",
        animal: "cachorro",
        tipo: "recipiente",
        marca: "Furacão Pet",
        preco: 59.90,
        estoque: 15,
        imagem: "../imgs/lista-produtos/Bebedouro Automático Azul.jpg"
    },

    {
        id: 6,
        nome: "Kit Comedouro e Bebedouro",
        animal: "cachorro",
        tipo: "recipiente",
        marca: "Durapets",
        preco: 79.90,
        estoque: 10,
        imagem: "../imgs/lista-produtos/Kit Comedouro e Bebedouro.jpg"
    },

    // ================= Casinhas e Camas =================

    {
        id: 7,
        nome: "Cama Fofinha Redonda Cinza",
        animal: "cachorro",
        tipo: "casinha e cama",
        marca: "Baw Waw",
        preco: 99.90,
        estoque: 8,
        imagem: "../imgs/lista-produtos/Cama Fofinha Redonda Cinza.jpg"
    },

    {
        id: 8,
        nome: "Casinha Plástica Nº 3",
        animal: "cachorro",
        tipo: "casinha e cama",
        marca: "MecPet",
        preco: 199.90,
        estoque: 5,
        imagem: "../imgs/lista-produtos/Casinha Plástica Nº 3.jpg"
    },

    {
        id: 9,
        nome: "Cama Retangular Impermeável",
        animal: "cachorro",
        tipo: "casinha e cama",
        marca: "São Pet",
        preco: 149.90,
        estoque: 7,
        imagem: "../imgs/lista-produtos/Cama Retangular Impermeável.jpg"
    },

    // ================= Brinquedos Cachorro =================

    {
        id: 10,
        nome: "Mordedor Osso de Borracha",
        animal: "cachorro",
        tipo: "brinquedo",
        marca: "Kong",
        preco: 49.90,
        estoque: 18,
        imagem: "../imgs/lista-produtos/Mordedor Osso de Borracha.jpg"
    },

    {
        id: 11,
        nome: "Bola Interativa Vermelha",
        animal: "cachorro",
        tipo: "brinquedo",
        marca: "Pet Games",
        preco: 34.90,
        estoque: 25,
        imagem: "../imgs/lista-produtos/Bola Interativa Vermelha.jpg"
    },

    {
        id: 12,
        nome: "Corda Trançada para Cães",
        animal: "cachorro",
        tipo: "brinquedo",
        marca: "Furacão Pet",
        preco: 24.90,
        estoque: 30,
        imagem: "../imgs/lista-produtos/Corda Trançada para Cães.jpg"
    },

    // ================= Petiscos Cachorro =================

    {
        id: 13,
        nome: "Bifinho Sabor Carne",
        animal: "cachorro",
        tipo: "petisco",
        marca: "Keldog",
        preco: 12.90,
        estoque: 40,
        imagem: "../imgs/lista-produtos/Bifinho Sabor Carne.jpg"
    },

    {
        id: 14,
        nome: "Snack Dental Médio Porte",
        animal: "cachorro",
        tipo: "petisco",
        marca: "Pedigree Dentastix",
        preco: 18.90,
        estoque: 25,
        imagem: "../imgs/lista-produtos/Snack Dental Médio Porte.jpg"
    },

    {
        id: 15,
        nome: "Petisco Natural Frango",
        animal: "cachorro",
        tipo: "petisco",
        marca: "Natural Life",
        preco: 22.90,
        estoque: 20,
        imagem: "../imgs/lista-produtos/Petisco Natural Frango.jpg"
    },

    // ================= Guias e Coleiras =================

    {
        id: 16,
        nome: "Coleira Ajustável Azul",
        animal: "cachorro",
        tipo: "guia e coleira",
        marca: "ZeeDog",
        preco: 69.90,
        estoque: 15,
        imagem: "../imgs/lista-produtos/Coleira Ajustável Azul.jpg"
    },

    {
        id: 17,
        nome: "Guia Premium Preto",
        animal: "cachorro",
        tipo: "guia e coleira",
        marca: "ZeeDog",
        preco: 79.90,
        estoque: 12,
        imagem: "../imgs/lista-produtos/Guia Premium Preto.jpg"
    },

    {
        id: 18,
        nome: "Peitoral Confort Walk",
        animal: "cachorro",
        tipo: "guia e coleira",
        marca: "Chalesco",
        preco: 89.90,
        estoque: 10,
        imagem: "../imgs/lista-produtos/Peitoral Confort Walk.jpg"
    },

    // ================= Rações Gato =================

    {
        id: 19,
        nome: "Whiskas Carne Adultos",
        animal: "gato",
        tipo: "ração",
        marca: "Whiskas",
        preco: 29.90,
        estoque: 25,
        imagem: "../imgs/lista-produtos/Whiskas Carne Adultos.jpg"
    },

    {
        id: 20,
        nome: "GranPlus Gourmet Salmão",
        animal: "gato",
        tipo: "ração",
        marca: "GranPlus",
        preco: 42.90,
        estoque: 18,
        imagem: "../imgs/lista-produtos/GranPlus Gourmet Salmão.jpg"
    },

    {
        id: 21,
        nome: "Golden Gatos Castrados",
        animal: "gato",
        tipo: "ração",
        marca: "Golden",
        preco: 37.90,
        estoque: 22,
        imagem: "../imgs/lista-produtos/Golden Gatos Castrados.jpg"
    },

    // ================= Recipientes Gato =================

    {
        id: 22,
        nome: "Comedouro Cat Bowl Rosa",
        animal: "gato",
        tipo: "recipiente",
        marca: "Furacão Pet",
        preco: 24.90,
        estoque: 20,
        imagem: "../imgs/lista-produtos/Comedouro Cat Bowl Rosa.jpg"
    },

    {
        id: 23,
        nome: "Fonte Bebedouro Elétrica",
        animal: "gato",
        tipo: "recipiente",
        marca: "Amicus",
        preco: 139.90,
        estoque: 8,
        imagem: "../imgs/lista-produtos/Fonte Bebedouro Elétrica.jpg"
    },

    {
        id: 24,
        nome: "Kit Alimentação para Gatos",
        animal: "gato",
        tipo: "recipiente",
        marca: "Durapets",
        preco: 49.90,
        estoque: 12,
        imagem: "../imgs/lista-produtos/Kit Alimentação para Gatos.jpg"
    },

    // ================= Arranhadores =================

    {
        id: 25,
        nome: "Arranhador Poste Sisal",
        animal: "gato",
        tipo: "arranhador",
        marca: "São Pet",
        preco: 89.90,
        estoque: 10,
        imagem: "../imgs/lista-produtos/Arranhador Poste Sisal.jpg"
    },

    {
        id: 26,
        nome: "Arranhador Torre com Plataforma",
        animal: "gato",
        tipo: "arranhador",
        marca: "Pet Star",
        preco: 249.90,
        estoque: 5,
        imagem: "../imgs/lista-produtos/Arranhador Torre com Plataforma.jpg"
    },

    {
        id: 27,
        nome: "Arranhador Ondulado Papelão",
        animal: "gato",
        tipo: "arranhador",
        marca: "CatMyPet",
        preco: 39.90,
        estoque: 18,
        imagem: "../imgs/lista-produtos/Arranhador Ondulado Papelão.jpg"
    },

    // ================= Brinquedos Gato =================

    {
        id: 28,
        nome: "Varinha com Penas",
        animal: "gato",
        tipo: "brinquedo",
        marca: "Chalesco",
        preco: 19.90,
        estoque: 30,
        imagem: "../imgs/lista-produtos/Varinha com Penas.jpg"
    },

    {
        id: 29,
        nome: "Ratinho de Pelúcia",
        animal: "gato",
        tipo: "brinquedo",
        marca: "Pet Games",
        preco: 14.90,
        estoque: 35,
        imagem: "../imgs/lista-produtos/Ratinho de Pelúcia.jpg"
    },

    {
        id: 30,
        nome: "Bolinha com Guizo",
        animal: "gato",
        tipo: "brinquedo",
        marca: "Furacão Pet",
        preco: 9.90,
        estoque: 50,
        imagem: "../imgs/lista-produtos/Bolinha com Guizo.jpg"
    },

    // ================= Petiscos Gato =================

    {
        id: 31,
        nome: "Dreamies Sabor Frango",
        animal: "gato",
        tipo: "petisco",
        marca: "Dreamies",
        preco: 12.90,
        estoque: 40,
        imagem: "../imgs/lista-produtos/Dreamies Sabor Frango.jpg"
    },

    {
        id: 32,
        nome: "Snack Cremoso Atum",
        animal: "gato",
        tipo: "petisco",
        marca: "Churu",
        preco: 17.90,
        estoque: 25,
        imagem: "../imgs/lista-produtos/Snack Cremoso Atum.jpg"
    },

    {
        id: 33,
        nome: "Petisco Funcional Hairball",
        animal: "gato",
        tipo: "petisco",
        marca: "Origens",
        preco: 15.90,
        estoque: 18,
        imagem: "../imgs/lista-produtos/Petisco Funcional Hairball.jpg"
    },

    // ================= Areias =================

    {
        id: 34,
        nome: "Areia Pipicat Floral",
        animal: "gato",
        tipo: "areia",
        marca: "Pipicat",
        preco: 21.90,
        estoque: 30,
        imagem: "../imgs/lista-produtos/Areia Pipicat Floral.jpg"
    },

    {
        id: 35,
        nome: "Areia Viva Verde Biodegradável",
        animal: "gato",
        tipo: "areia",
        marca: "Viva Verde",
        preco: 39.90,
        estoque: 20,
        imagem: "../imgs/lista-produtos/Areia Viva Verde Biodegradável.jpg"
    },

    {
        id: 36,
        nome: "Areia Katbom Premium",
        animal: "gato",
        tipo: "areia",
        marca: "Katbom",
        preco: 34.90,
        estoque: 15,
        imagem: "../imgs/lista-produtos/Areia Katbom Premium.jpg"
    }
];

const lista = document.getElementById("lista-produtos")

function renderizar_produtos(produtos) {
    //limpa a lista anterior para atualizar posteriormente
    lista.innerHTML = "";

    produtos.forEach(produto => {
        // cria uma div (será o card)

        lista.innerHTML += `
            <div class="card-product">
                <div class="card-image-container">
                    <img class="image-product" src="${produto.imagem}">
                    <button id="cart-button">
                        <img src="../imgs/buttons/plus_symbol.png" alt="Adicionar ao carrinho">
                    </button>
                </div>
                <p class="card-name">${produto.nome}</p>
                <p class="card-price">R$ ${produto.preco.toFixed(2)}</p>
            </div>
        `
    })
}

// coleta todos os checkboxes da área de filtros
const filtros = document.querySelectorAll(
    ".products-filter-text input[type='checkbox']"
);

function get_filtros_selecionados() {
    const selecionados = []

    //percorre o array de filtros
    filtros.forEach(filtro => {

        if(filtro.checked) {
            selecionados.push(filtro.value)
        }
    })

    return selecionados;
}

function aplicar_filtros() {

    const filtros_selecionados = get_filtros_selecionados();

    //caso nenhum filtro for escolhido
    if(filtros_selecionados.length === 0) {
        renderizar_produtos(produtos);
        return;
    }

    // cria uma nova lista com os filtros aplicados
    const produtos_filtrados = produtos.filter(produto => {
        return filtros_selecionados.includes(produto.animal) || filtros_selecionados.includes(produto.tipo);
    });

    renderizar_produtos(produtos_filtrados);

}

// aplica os filtros quando um checkboxé clicado
filtros.forEach(filtro => {
    filtro.addEventListener("change", aplicar_filtros);
});

renderizar_produtos(produtos);