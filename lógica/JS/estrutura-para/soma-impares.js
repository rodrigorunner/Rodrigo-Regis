// Leia 2 valores inteiros X e Y (em qualquer ordem). A seguir, calcule e mostre a soma dos números
// impares entre eles.
let x, y, soma, troca

x = 6
y = -5

if(x > y) {
    troca = x
    x = y
    y = troca
}

soma = 0
for(let i = x+1; i < y; i++) {
    if(i % 2 !== 0) {
        soma = soma + i
    }
}

console.log('Soma dos ímpares = ' + soma)