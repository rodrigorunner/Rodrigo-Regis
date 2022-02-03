// Fazer um programa para ler a quantidade de glicose
// no sangue de uma pessoa e depois mostrar na tela a
// classificação desta glicose de acordo com a tabela de
// referência ao lado.

let glicose = 143;

if(glicose <= 100) {
    console.log('Normal');
} else if(glicose > 100 && glicose <= 140) {
    console.log('Elevado');
} else {
    console.log('Diabetes');
}