// estrutura de laço com while


const listaDeDestinos = new Array(
    'São Paulo',
    'Paraná',
    'Rio de Janeiro',
    'Espirito Santo',
    'Santa catarina',
    'Bahia',
    'Pernambuco'
    
)
console.log(listaDeDestinos.length)

const destinoDesejado = 'Espirito Santo'

//console.table(listaDeDestinos)
//console.log(listaDeDestinos[1])

let indice = 0

let encontrouDestino = true

//while(condiçaõ){

   // Açaõ(IF)
//
 // indice ++
//}

while(indice < listaDeDestinos.length){
if(listaDeDestinos[indice] == destinoDesejado){
//console.log('Destino Encontrado!')
encontrouDestino = true
break
}else{
//console.log('Destino Não Encontrado')
encontrouDestino = false
}
    indice++
}
if(encontrouDestino){
    console.log('Destino Encontrado')
}else{
    console.log('Destino NÃO encontrado')
}

//const multiplicador = 7
//let contador = 1


//while (contador <= 10){
   // console.log(multiplicador * contador)

   // contador ++
//}