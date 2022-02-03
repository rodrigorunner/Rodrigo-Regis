// Fazer um programa para ler um número natural N (valor máximo: 15), e depois calcular e mostrar o
// fatorial de N.

var N, fat

N = parseInt(prompt('Digite o valor de N'))

fat = 1
for(var i = N; i > 0; i--) {
    fat = fat * i 
}
console.log('Fatorial = ' + fat)