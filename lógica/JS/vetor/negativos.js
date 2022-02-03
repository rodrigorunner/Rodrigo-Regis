// Problema "negativos" 
// Faça um programa que leia um número inteiro positivo N (máximo = 10) e depois N números inteiros e armazene-os em um vetor. Em seguida, mostrar na tela todos os números negativos lidos. 
var N, num;
var vet = [];

N = parseInt(prompt('Quantos números você vai digitar ?'));

for(let i = 0; i < N; i++) {
    vet[i] = parseInt(prompt('Digite um número:'));
}

console.log("NÚMEROS NEGATIVOS:");
for(let i = 0; i < vet.length; i++) {
    if(vet[i] < 0) {
        console.log(vet[i]);
    }
}

