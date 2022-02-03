// Problema "alturas" 
// Fazer um programa para ler nome, idade e altura de N pessoas. Depois, mostrar na tela a altura média das pessoas, e mostrar também a porcentagem de pessoas com menos de 16 anos, bem como os nomes dessas pessoas caso houver.

var N, media, soma, porc, cont;
var nome = [];
var altura = [];
var idade = [];

N = parseInt(prompt('Quantas pessoas serão digitadas ?'));

for(let i = 0; i < N; i++) {
    nome = prompt('Nome:');
    idade[i] = parseInt(prompt('Idade:'));
    altura[i] = parseFloat(prompt('Altura:'));
}

soma = 0;
for(let i = 0; i < altura.length; i++) {
    soma = soma + altura[i]; 
}
media = soma / N;
console.log('Altura média: ', media.toFixed(2));

cont = 0;
for(let i = 0; i < idade.length; i++) {
    if(idade[i] < 16) {
        cont = cont + 1;
    }
}
porc = cont * 100 / N;
console.log('Pessoas com menos de 16 anos: ', porc.toFixed(2), '%')

for(let i = 0; i < idade.length; i++) {
    if(idade[i] < 16) {
        console.log(nome);
    }
}