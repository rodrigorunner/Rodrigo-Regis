// Fazer um programa para ler três números inteiros. Em seguida, mostrar qual o menor dentre os três
// números lidos. Em caso de empate, mostrar apenas uma vez.

let a, b, c, menor; 

a = 5;
b = 12;
c = 5;

if(a < b && a < c) {
    menor = a;
} else if(b < c) {
    menor = b;
} else {
    menor = c;
}

console.log('Menor = ' + menor);