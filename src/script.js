var Carros = []

function addcarro() {
    const modelo = document.getElementById("modelo-text");
    const cor = document.getElementById("cor-text");
    const ano = document.getElementById("ano-text");
    const preco = document.getElementById("preco-text");
    const foto = document.getElementById("foto-text");
    const vendido = document.getElementById("vendido-checkbox");

    const novoCarro = {
        id: Math.floor(Math.random() * 10000000),
        modelo: modelo.value,
        cor: cor.value,
        ano: ano.value,
        preco: preco.value,
        foto: foto.value,
        vendido: vendido.checked
    }
    Carros.push(novoCarro);
    modelo.value = "";
    cor.value = "";
    ano.value = "";
    preco.value = "";
    foto.value = "";
    vendido.checked = false;
    modelo.focus();
    render();
}
function render() {
    localStorage.setItem("Carros", JSON.stringify(Carros));
    const listaCarros = document.getElementById("carro-lista")
    listaCarros.innerHTML = ""
    Carros.forEach(carro => {
        const li = document.createElement("li");
        li.classList.add('carro-item')

        const img = document.createElement('img');
        img.src = carro.foto;
        const div = document.createElement("div");

        const modelop = document.createElement("h3");
        modelop.textContent = carro.modelo;

        const corp = document.createElement("p");
        corp.textContent = 'Cor: ' + carro.cor;
        const anop = document.createElement("p");
        anop.textContent = 'Ano: ' + carro.ano;
        const precop = document.createElement("p");
        precop.textContent = 'Preço: R$ ' + carro.preco;
        const vendidop = document.createElement("p");
        if(carro.vendido){
        vendidop.textContent = 'Vendido: Sim';
        }else{
            vendidop.textContent = 'Vendido: Não';
        }

        const delet = document.createElement("Button");
        delet.textContent = "Remover"
        delet.classList.add("remove-button")
        delet.setAttribute("onclick", `Delete(${carro.id});`)

        div.appendChild(modelop)
        div.appendChild(corp)
        div.appendChild(anop)
        div.appendChild(precop)
        div.appendChild(vendidop)        
        div.appendChild(delet)
        li.appendChild(img)
        li.appendChild(div)
        listaCarros.appendChild(li)

    })
}

function Onload() {    
    const carroStorage = localStorage.getItem("Carros");
    if (carroStorage) {
        Carros = JSON.parse(carroStorage);
        console.log("Tarefas recuperadas: ");
        render();
    }
}

function Delete(id) {
    Carros = Carros.filter(carro => carro.id !== id)
    render();
}

// <li class="carro-item">
// <img src="fiat-mobi-2023.jpg" alt="Carro">
// <div>
// <h3>Polo</h3>
// <p>Cor: Branco</p>
// <p>Ano: 2020</p>
// <p>Preço: 20000</p>
// <p>Vendido: Sim</p>
// <a href="#" class="remove-button">Remover</a>
// </div>
// </li>

