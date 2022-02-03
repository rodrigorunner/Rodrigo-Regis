// Leia um valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de
// teste consiste de 3 valores reais, para os quais você deverá calcular e mostrar a média ponderada, sendo
// que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5. Vale lembrar
// que a média ponderada é a soma de todos os valores multiplicados pelo seu respectivo peso, dividida
// pela soma dos pesos.

let N, media, peso, n1, n2, n3

N = parseInt(prompt('Quantos casos você vai digitar?'))
debugger
for(let i = 0; i < N; i++) {
    n1 = parseFloat(prompt('Digite um número'))
    n2 = parseFloat(prompt('Digite um número'))
    n3 = parseFloat(prompt('Digite um número'))

    n1 = n1 * 2
    n2 = n2 * 3
    n3 = n3 * 5

    media = (n1 + n2 + n3) / (2 + 3 + 5)

    console.log('Média = ' + media.toFixed(2))
}