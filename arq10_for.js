//estrutura de laço com for

const listaDeDestinos = new Array(
    'São Paulo',
    'Paraná',
    'Rio de Janeiro',
    'Espirito Santo',
    'Santa catarina',
    'Bahia',
    'Pernambuco'
    
)

const destinoDesejado = 'Pernambuco'
const idade = 18

let destinoEncontrado = ''

for(let indice = 0; indice < listaDeDestinos.length; indice++){
if(listaDeDestinos[indice] == destinoDesejado){
    destinoEncontrado = true
    break
}else{
    destinoEncontrado = false
}
}



if(idade >= 18 && destinoEncontrado){
    console.log('Viagem autorizada')
}else{
    console.log('Viagem nao autorizada')
}


const valor = 4

for (let multiplo = 1; multiplo <= 10; multiplo ++){
    console.log(valor * multiplo)

    
}