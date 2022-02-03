// Problema "abaixo_da_media" 
// Fazer um programa para ler um número inteiro N e depois um vetor de N números reais. Em seguida, mostrar na tela a média aritmética de todos elementos com três casas decimais. Depois mostrar todos os elementos do vetor que estejam abaixo da média, com uma casa decimal cada. 
var N, vet = [], media, soma;

N = parseInt(prompt('Quantos elementos vão ter o vetor ?'));

soma = 0;
for(let i = 0; i < N; i ++) {
    vet[i] = parseFloat(prompt('Digite um número'));
    soma = soma + vet[i];
}
media = soma / N;
console.log('Média = ', media);

console.log('Elementos abaixo da média:');
for(let i = 0; i < vet.length; i++) {
    if(vet[i] <= 10) {
         console.log(vet[i]);
    }
}

