// Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com os
// nomes e a idade média entre essas pessoas, com uma casa decimal.

var nome1, idade1, nome2, idade2, media 

nome1 = prompt('Nome da primeira pessoa')
idade1 = parseFloat(prompt('Idade da primeira pessoa'))

nome2 = prompt('Nome da segunda pessoa')
idade2 = parseFloat(prompt('Idade da segunda pessoa'))

media = (idade1 + idade2) / 2

console.log('A idade média entre ' + nome1 + ' e ' + nome2 + ' é ' + media + ' anos')