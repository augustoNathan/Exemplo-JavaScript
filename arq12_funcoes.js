//a funcao deve receber uma nota e retornar aprovado para notas maiores ou iguais a 70 recuperacao para notas maiores ou iguais a 50 e reprovado para notas menores que 50

const nomeAluno = 'Marivaldo'
const notaAluno = 70

function avaliaNota(nota, nome){
    if(nota >= 70){
        return `${nome} está APROVADO`
    }if(nota >= 50){
        return `${nome} está de RECUPERACAO`               
    }else{
        return `${nome} está REPROVADO`
    }
}

//console.log(avaliaNota(notaAluno, nomeAluno))

//a funcao deve receber uma lista de nomes e um nome especifico e verificar se este nome consta no array

const listaNomes = new Array(   
    "João",
    "Maria",
    "Carlos",
    "Carla",
    "Ricardo"
)

const nomeProcurado = "Marivaldo"                                                            
let encontrouNome = ''

function procuraNome (nomes, nome){

for(let i = 0; i < nomes.length; i++){ 
    if(nomes[i] == nome){
        encontrouNome = true
        break
    }else{
        encontrouNome = false
    }
}

if(encontrouNome == true){
    console.log(`${nome} foi encontrado`)
}else{
    console.log(`${nome} nao foi encontrado`)
}

}

procuraNome(listaNomes, nomeProcurado)





