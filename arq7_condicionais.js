//Estruturas condicionais com operador logico e (&&)

const nota = 70
const faltas = 2
const quantidadeAulasCurso = 10

//Para que o aluno seja aprovado a nota deve ser maior que 50 e as faltas menores ou iguais a 25% do total de aulas

//sem o operador e

if(nota >= 50){
    if(faltas <= 0.25 * quantidadeAulasCurso){
    console.log('APROVADO!!')
 }else{
    console.log('REPROVADO por faltas')
 }
}else{
    console.log('REPROVADO por Notas')
}

//com operador e

if(nota >= 50 && faltas <= 0.25 * quantidadeAulasCurso){
    console.log("Voce esta APROVADO")
}else{
    console.log('voce esta REPROVADO')
}
