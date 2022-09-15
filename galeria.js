fetch("http://localhost:3000/read/")
.then(info => {
    if (info.ok) {
        console.log('json()')
        return info.json()
    } else {
        throw new Error("Não foi possivl obter a informação, Código " + resp.status)
    }
})
.then(data => {
    console.log(data)
    let inforepos = []
    data.forEach(repos => {
        inforepos.push({
            marca: repos.marca,
            modelo: repos.modelo
        })
    })
    createList(inforepos);
})

function createList(inforepos) {
    let section = document.querySelector("#projeto")
    for ( let list of inforepos ) {
        if (list.descricao === null) {
            list.descricao = "Descrição indisponível"
        }
        let listRepos = document.createElement("article")
        listRepos.className = "card"
        if (list.fork === false) {
            list.fork = '';
        } else {
            list.fork = '<span class="badge badge-pill badge-dark">Fork</span>';
        }
        listRepos.innerHTML = `
        <div class="card__info">
            <h3 class="card__title">${list.marca}</h3>
            <h4 class="card__lista">${list.modelo}</h4>
            <h4 class="card__lista">${list.km} km</h4>
            <h4 class="card__lista">${list.ano}</h4>
            <h4 class="card__lista">${list.cor}</h4>
            <h4 class="card__lista">${list.cambio}</h4>
            <div class="ancoras">
                <a href="/deletado.html" class="projeto__ancora">Excluir</a>
                <a href="/item.html" class="projeto__ancora">Atualizar</a>
            </div>`;
        section.appendChild(listRepos);
        
        
    }  
};



/*

var url = 'http://localhost:3000/read/'

fetch(url, {
    method: 'GET', // or 'PUT'
    headers:{
        'Content-Type': 'application/json'
    }
})
.then(res => res.json())
.catch(error => console.error('Error:', error))
.then(data => {
    console.log(data)
    let infoveiculo =  []
        data.forEach(veiculo => {
            infoveiculo.push({
            marca: veiculo.marca,
            modelo: veiculo.modelo,
            km: veiculo.km,
            ano: veiculo.ano,
            cor: veiculo.cor,
            cambio: veiculo.cambio,
            valor:veiculo.valor
        })
    });
    createList(infoveiculo);
});
  



function createList(infoveiculo) {
    let section = document.querySelector("#projeto")
    for ( let list of infoveiculo ) {
        if (list.marca === null) {
            list.marca = "Marca indisponível"
        }
        let listVeiculo = document.createElement("div")
        listVeiculo.className = "card"
        listRepos.innerHTML = `
        <span class="value"> R$ ${list.valor}</span>
        <div style="text-align:center">
            <img src="https://autolivraria.com.br/bc/wp-content/uploads/2012/06/twingo2-7-470x313.jpg"
                 alt="Projeto1"
                 class="card__image"
                 width="100%">
        </div>
        <div class="card__info">
            <h3 class="card__title">${list.marca}</h3>
            <h4 class="card__lista">${list.modelo}</h4>
            <h4 class="card__lista">${list.km} km</h4>
            <h4 class="card__lista">${list.ano}</h4>
            <h4 class="card__lista">${list.cor}</h4>
            <h4 class="card__lista">${list.cambio}</h4>
            <div class="ancoras">
                <a href="/deletado.html" class="projeto__ancora">Excluir</a>
                <a href="/item.html" class="projeto__ancora">Atualizar</a>
            </div>`;
        section.appendChild(listRepos);
        
        
    }  
};




*/