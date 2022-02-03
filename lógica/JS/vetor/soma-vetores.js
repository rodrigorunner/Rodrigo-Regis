// Problema "soma_vetores" 
// Faça um programa para ler dois vetores A e B, contendo N elementos cada. Em seguida, gere um terceiro vetor C onde cada elemento de C é a soma dos elementos correspondentes de A e B. Imprimaco vetor C gerado.

var N, vetA = [], vetB = [], vetC = [], soma;

N = parseInt(prompt('Quantos valores vão ter em cada vetor ?'));

for(let i = 0; i < N; i++) {
    vetA[i] = parseInt(prompt('Digite os valores do Vetor A:'));
}

for(let i = 0; i < N; i++) {
    vetB[i] = parseInt(prompt('Digite os valores do Vetor B:'));
}

console.log('Vetor Resultante:')
for(let i = 0; i < N; i++) {
   soma = vetA[i] + vetB[i];
   console.log(soma); 
}