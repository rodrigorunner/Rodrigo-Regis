// Problema "soma_vetor" 
// Faça um programa que leia N números reais e armazene-os em um vetor. Em seguida: 
// - Imprimir todos os elementos do vetor 
// - Mostrar na tela a soma e a média dos elementos do vetor 

var N, soma, media;
var numeros = [];

N = parseInt(prompt('Quantos números você vai digitar ?'));

soma = 0;
for(let i = 0; i < N; i++) {
    numeros[i] = parseInt(prompt('Digite um número:'));
    soma = soma + numeros[i];
}

console.log('Valores: ')
for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

media = soma / N;

console.log('SOMA = ', soma.toFixed(2));
console.log('MEDIA = ', media.toFixed(2));