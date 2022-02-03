// Problema "media_pares " 
// Fazer um programa para ler um vetor de N números inteiros. Em seguida, mostrar na tela a média 
// aritmética somente dos números pares lidos, com uma casa decimal. Se nenhum número par for 
// digitado, mostrar a mensagem "NENHUM NUMERO PAR" .
var N, pares = [], soma, media, cont;

N = parseInt(prompt('Quantos elementos vão ter o vetor ?'));

for(let i = 0; i < N; i++) {
    pares[i] = parseFloat(prompt('Digite um número:'));
}

soma = 0;
cont = 0;
for(let i = 0; i < pares.length; i++) {
    if(pares[i] % 2 === 0) {
        soma = soma + pares[i];
        cont = cont + 1;
    } 
}
media = soma / cont;
console.log('Média dos pares = ', media.toFixed(1));