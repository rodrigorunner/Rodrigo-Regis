// Ler um número inteiro N, daí mostrar na tela a tabuada de N para 1 a 10.

let numero, tabuada;
numero = parseInt(prompt('Digite o valor da tabuada'));

for(let i = 1; i < 11; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`);
}