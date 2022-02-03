// Faça um programa que leia as notas referentes às duas avaliações de um aluno. Calcule e imprima a
// média semestral. Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao
// intervalo [0,10]). Cada nota deve ser validada separadamente.

let nota1, nota2, media;

nota1 = parseFloat(prompt('Digite a primeira nota'));
debugger;
while(nota1 < 0) {

    if(nota1 < 0 && nota1 > 10) {
        nota1 = parseFloat(prompt('Valor Invalido! Tente Novamente'));
    }
}

nota2 = parseFloat(prompt('Digite a segunda nota'));
while(nota2 < 0) {

    if(nota2 < 0 && nota2 > 10) {
        nota2 = parseFloat(prompt('Valor Invalido! Tente Novamente'));
    }
}

media = (nota1 + nota2) / 2;

console.log('Média semestral = ' + media.toFixed(2));