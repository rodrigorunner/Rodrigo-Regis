// Fazer um programa para ler a quantidade de glicose
// no sangue de uma pessoa e depois mostrar na tela a
// classificação desta glicose de acordo com a tabela de
// referência ao lado.

let a, b, c, maior;

a = 83.21;
b = 87.53;
c = 83.21;

if(a > b && a > c) {
    maior = a;
} else if(b > c) {
    maior = b;
} else {
    maior = c;
}

console.log('Maior = ' + maior);