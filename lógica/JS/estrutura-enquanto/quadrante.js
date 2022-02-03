// Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no
// sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence (Q1, Q2, Q3 ou Q4). O
// algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem
// escrever mensagem alguma

let x, y;

x = parseInt(prompt('Digite o valor de X'));
y = parseInt(prompt('Digite o valor de Y'));

while(x != 0) {
    debugger

    if(x == y) {
        console.log('QUADRANTE 1');
    } else if(x > 0 && y < 0) {
        console.log('QUADRANTE 4');
    } else if(x < 0 && y < 0) {
        console.log('QUADRANTE 3');
    } else if(x < 0 && y > 0) {
        console.log('QUADRANTE 2');
    } 

    x = parseInt(prompt('Digite o valor de X'));
    y = parseInt(prompt('Digite o valor de Y'));

}