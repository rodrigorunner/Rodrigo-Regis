// Fazer um programa para ler dois números inteiros, e dizer se um número é múltiplo do outro. Os
// números podem ser digitados em qualquer ordem.

let a, b;
a = 5;
b = 2;

if(a % b == 2 || b % a == 2) {
    console.log('São multiplos');
} else {
    console.log('Não são múltiplos')
}