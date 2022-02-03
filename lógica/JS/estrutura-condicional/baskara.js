// Fazer um programa para ler os três coeficientes de uma equação do segundo grau. Usando a fórmula
// de Baskara, calcular e mostrar os valores das raízes x1 e x2 da equação com quatro casas decimais.
// Se a equação não possuir raízes reais, mostrar uma mensagem.
// Delta não pode ser negativo
// Coeficiente "a" não pode ser zero

let a, b, c , delta, x1, x2;

a = 1;
b = 3;
c = 4;

delta = (b * b) - (4 * a * c);

if(delta < 0) {
    console.log('Equaçao não possui raízes reais');
} else {
    x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
    x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
    console.log('X1: ' + x1.toFixed(4));
    console.log('X2: ' + x2.toFixed(4));
}
