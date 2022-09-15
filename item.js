function getValueForm() {
    var marcaf = document.getElementById("marca").value;
    var modelof = document.getElementById("modelo").value;
    var kmf = document.getElementById("km").value;
    var anof = document.getElementById("ano").value;
    var corf = document.getElementById("cor").value;
    var cambiof = document.getElementById("cambio").value;
    var valorf = document.getElementById("valor").value;
  
    var carro =  new Object();
      carro.marca = marcaf;
      carro.modelo = modelof;
      carro.km = kmf;
      carro.ano = anof
      carro.cor = corf;
      carro.cambio = cambiof;
      carro.valor = valorf;
    return  carro
  }
    
function datosUpdate() {
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let value = params._id; // "some_value"
return value
}


function updateVeiculo(){
    var url = 'http://localhost:3000/update/'+datosUpdate()

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(getValueForm()), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}
  
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
}); 

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
        window.location.href = '/galery.html'
    });
}

function getVeiculo() {
    var url = 'http://localhost:3000/read/'+datosUpdate()

    fetch(url, {
        method: 'GET', // or 'PUT'
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        document.getElementById("marca").value = response.veiculo.marca
        document.getElementById("modelo").value = response.veiculo.modelo
        document.getElementById("km").value = response.veiculo.km
        document.getElementById("ano").value = response.veiculo.ano
        document.getElementById("cor").value = response.veiculo.cor
        document.getElementById("cambio").value = response.veiculo.cambio
        document.getElementById("valor").value = response.veiculo.valor
    
        let section = document.querySelector("#item")
        
            let dadosVeiculo = document.createElement("article")
            dadosVeiculo.className = "card"
        
            dadosVeiculo.innerHTML = `
            <p id= "precio" class="valor1">R$ ${response.veiculo.valor}</p>
            <p id= "nome" class="valor1">${response.veiculo.modelo} - ${response.veiculo.marca}</p>
            <img id= "foto" src="" 
                    alt=""
                    class="card__imagem"
                    width="100%"><!-- desde API--> 
            <button class="form-submit-button-cadas" onclick="deleteVeiculo('${response.veiculo._id}')">Excluir</button>`;
        section.appendChild(dadosVeiculo);

    }); 
}

getVeiculo()


document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
  });