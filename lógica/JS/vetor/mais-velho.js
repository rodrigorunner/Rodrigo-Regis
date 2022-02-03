// Problema "mais_velho" 
// Fazer um programa para ler um conjunto de nomes de pessoas e suas respectivas idades. Os nomes devem ser armazenados em um vetor, e as idades em um outro vetor. Depois, mostrar na tela o nome da pessoa mais velha. 
var N, nomes = [], idades = [], maisVelho, pessoa;

N = parseInt(prompt('Quantos elementos vão ter o vetor ?'));

for(let i = 0; i < N; i++) {
    nomes[i] = prompt('Nome:');
    idades[i] = parseInt(prompt('Idade:'))
}

maisVelho = idades[0];
for(let i = 0; i < idades.length; i++) {
    if(idades[i] > maisVelho) {
        maisVelho = idades[i]
        pessoa = nomes[i];
    }
}
console.log('Pessoa mais velha: ', pessoa);
