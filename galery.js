fetch("http://localhost:3000/read")
    .then(info => {
        if (info.ok) {
            return info.json()
        } else {
            throw new Error("Não foi possivl obter a informação, Código " + resp.status)
        }
    })
    .then(data => {
        console.log(data)
        let infoVeiculos = []
        data.veiculos.forEach(veiculo => {
            infoVeiculos.push({
                marca: veiculo.marca,
                modelo: veiculo.modelo,
                km: veiculo.km,
                ano: veiculo.ano,
                cor: veiculo.cor,
                cambio: veiculo.cambio,
                valor: veiculo.valor,
                id: veiculo._id,
            })
        })
        console.log(infoVeiculos)
        createList(infoVeiculos);
    })
    
    function deleteVeiculo(id){
        console.log(id)
        var url = 'http://localhost:3000/delete/'+id;
    console.log(url)
    
        fetch(url, {
            method: 'GET', // or 'PUT'
            headers:{
            'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log.response
            let section = document.querySelector("#projeto")
            let card = document.getElementById(`${id}`)
            console.log(section)
            console.log(card)
            section.removeChild(card)
        });
    }

    function createList(infoVeiculos) {
        let section = document.querySelector("#projeto")
        for ( let list of infoVeiculos ) {
            let listVeiculos = document.createElement("article")
            listVeiculos.id = list.id
            listVeiculos.className = "card"
        
            listVeiculos.innerHTML = `
            <span class="value">R$${list.valor}</span>
            <div style="text-align:center"><img src="https://autolivraria.com.br/bc/wp-content/uploads/2012/06/twingo2-7-470x313.jpg"
                 alt="Projeto1"
                 class="card__image"
                 width="100%"></div>
            <div class="card__info">
            <h3 class="card__title">${list.marca}</h3>
            <h4 class="card__lista">${list.modelo}</h4>
            <h4 class="card__lista">${list.km} km</h4>
            <h4 class="card__lista">${list.ano}</h4>
            <h4 class="card__lista">${list.cor}</h4>
            <h4 class="card__lista">${list.cambio}</h4>
            <div class="ancoras">
                <button class="form-submit-button-cadas" onclick="deleteVeiculo('${list.id}')">Excluir</button>
                <a href="/item.html?_id=${list.id}" class="projeto__ancora">Atualizar</a>
            </div>`;
            section.appendChild(listVeiculos);
            
            
        }  
    };