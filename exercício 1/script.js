let lista = [2, 5, 9, 4] //array

let nomes = ['Jaderson', 'Lucas', 'Kauã', 'Hiury', 'Diego','Vitor'] //array

console.log(lista[0])
console.log(nomes)
console.log(`O tamanho da lista é: ${lista.length}`)// o método length retorna o tamanho da lista.
console.log(`O tamanho da lista de nomes é: ${nomes.length}`)

for (let i = 0; i < 6; i++){
    console.log(nomes[i])
}

/* nomes.forEach(function (nome) {
    console.log(nome)
}) */

    nomes.unshift('Julius') //adiciona um valor no início da lista.
    console.log(nomes)
    nomes.push('Aloy') //adiciona um valor no final da lista. 
    console.log(nomes)
    nomes.pop() //remove o último elemento da lista.
    console.log(nomes)
    nomes.shift() //remove o primeiro elemento da lista.
    console.log(nomes)
    nomes.sort() //Classifica em ordem crescente.
    console.log(nomes)
    nomes.reverse() //classifica em ordem decrescente.
    console.log

    console.log(nomes.indexOf('Hiury'))

    nomes.splice(0, 2, 'Wallas', 'Ricardo') //a partir do indice 0, vai remover um valor e acrescentar o wallas e o ricardo.
    console.log(nomes)

    let cadastro = ['Hiury', 35, 67, ['Pai', 'Mãe']]
    console.log(cadastro[3][1])





 