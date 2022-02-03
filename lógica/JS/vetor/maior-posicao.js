// Problema "maior_posicao" 
// Faça um programa que leia N números reais e armazene-os em um vetor. Em seguida, mostrar na tela o maior número do vetor (supor não haver empates). Mostrar também a posição do maior elemento, considerando a primeira posição como 0 (zero).

var N, maior, ind;
var num = [];

N = parseInt(prompt('Quantos números você vai digitar ?'));

for(let i = 0; i < N; i++) {
    num[i] = parseInt(prompt('Digite um número:'))
}

maior = num[0];
for(let i = 0; i < num.length; i++) {
    if(num[i] > maior) {
        maior = num[i];
        ind = i;
    }
}

console.log('Maior = ', maior);
console.log('Posição = ', ind);