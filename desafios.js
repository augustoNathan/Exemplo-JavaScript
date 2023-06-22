const meuPeso = 70
const minhaAltura = 1.70

function calculaIMC(peso, altura){
    const IMC = peso / (altura * altura)
   
    if(IMC < 18.5){
        return "Baixo peso"
    }if(IMC < 25){
        return "Normal"
    }if(IMC < 30){
        return "Sobrepeso"
    }else{
        return "Obeso"
    }
}

console.log(calculaIMC(meuPeso, minhaAltura))


const n1 = 10
const n2 = 8

function comparaNumero(valor1, valor2){

    if(valor1 > valor2){
        return `${valor1} e maior que ${valor2}`
    }if(valor1 < valor2){
        return `${valor1} e menor que ${valor2}`
    }else{
        return `${valor1} e igual a ${valor2}`
    }
}
console.log(comparaNumero(n1, n2))