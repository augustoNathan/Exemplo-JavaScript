//Estruturas condicionais com operador logico OU (&&)

//para que a pessoa possa viajar sozinha ela deve 
//=> ter a idade maior ou igual a 18
//ou
//=> Estar acompanhada do responsavel

const idade = 17
const acompanhadoDeRespoansavel = true
const temCNH = false

if(idade >= 18 || acompanhadoDeRespoansavel){
    console.log('Autorizado a viajar')
}else{
    console.log('NÃO está autorizado a viajar')
}


if(idade >= 18 && temCNH){
    console.log('Autorizado a dirigir')
}else{
    console.log('NÃO está autorizado a dirigir')
}