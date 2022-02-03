// Problema "numeros_pares" 
// Faça um programa que leia N números inteiros e armazene-os em um vetor. Em seguida, mostre na 
// tela todos os números pares, e também a quantidade de números pares. 

var N, cont;
var pares = [];

N = parseInt(prompt('Quantos números você vai digitar ?'));

for(let i = 0; i < N; i++) {
    pares[i] = parseInt(prompt('Digite outro número:'));
}

cont = 0;
console.log('Números Pares');
for(let i = 0; i < pares.length; i++) {
    if(pares[i] % 2 === 0) {
        console.log(pares[i]);
        cont = cont + 1;
    }
}
console.log('Quantidade de pares: ', cont);