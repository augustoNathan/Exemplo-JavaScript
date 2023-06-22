//trabalhando com arrays

const cidades = new Array(
    'São paulo',
    'cotia',
    'Itapevi',
    'carapicuiba'
)

cidades.push('Osasco', 'vargem grande') //metodo push adiciona elementos ao array

cidades.splice(2,1) //metodo splice remove elementos do array


console.log(typeof(cidades))
console.table(cidades)
console.log(cidades[1]) //exibe so o elemento de indice 1 do array cidades
