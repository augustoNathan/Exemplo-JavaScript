//declaracao e execucao de funcoes


//function nomeFuncao (parametros){

    //Ação da função


  //  retorno
//}

//executar funcao declarada

//nomeFuncao(parametros)

function escreveTexto (texto){
console.log(texto)
}

escreveTexto("Olá mundo")

function soma (){
    return 5 + 3
}

//escreveTexto(soma())

function soma2 (n1, n2){
    return n1 + n2
}

//escreveTexto(soma2(9, 5))

function disivao (n1, n2){
    return n1 / n2
}

escreveTexto(disivao(9, 3))

//escreveTexto(disivao(3, 9))
escreveTexto(disivao(3, 9).toFixed())