const receitas = [
    {
        titulo: "Arroz com Couve-Flor",
        imagem: "Image/bolo.jpg",
        preparo: "Deixe a Couve-Flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
        ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"]
    },
    {
        titulo: "Arroz com Couve-Flor",
        imagem: "Image/bolo.jpg",
        preparo: "Deixe a Couve-Flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
        ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"]
    },
    {
        titulo: "Arroz com Couve-Flor",
        imagem: "Image/bolo.jpg",
        preparo: "Deixe a Couve-Flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
        ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"]
    },
    {
        titulo: "Arroz com Couve-Flor",
        imagem: "Image/bolo.jpg",
        preparo: "Deixe a Couve-Flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
        ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"]
    },

];

function getListaIngredientes(receita) {
    return `<ul class="list-unstyled">${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}</ul>`;
}

function getCard(receita) {
    return `
        <div class="col-md-4 col-lg-4">
            <div class="card receita">
                <img class="card-img-top" src="${receita.imagem}" alt="${receita.titulo}" style="height: 150px" />
                <div class="card-body">
                    <h5 class="card-title">${receita.titulo}</h5>
                    ${getListaIngredientes(receita)}
                    <hr />
                    <p class="card-text">${receita.preparo}</p>
                </div>
            </div>
        </div>`;
}


function preencheCatalogo() {
    const pnlCatalogo = document.getElementById('pnlCatalogo');
    const catalogoHTML = receitas.map(receita => getCard(receita)).join('');
    pnlCatalogo.innerHTML = catalogoHTML;
}


window.onload = preencheCatalogo;