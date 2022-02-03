// Leia um valor inteiro N. Este valor será a quantidade de números inteiros que serão lidos em seguida.
// Para cada valor lido, mostre uma mensagem dizendo se este valor lido é PAR ou IMPAR, e também
// se é POSITIVO ou NEGATIVO. No caso do valor ser igual a zero (0), seu programa deverá imprimir
// apenas NULO.

let N, X 

N = parseInt(prompt('Quantos números você vai digitar?'))

for(let i = 0; i < N; i++) {

    X = parseInt(prompt('Digite um número'))

    if(X % 2 !== 0 && X < 0) {
        console.log('Ímpar Negativo')
    } else if(X === 0) {
        console.log('Nulo')
    } else if(X % 2 !== 0 && X > 0) {
        console.log('Ímpar Positivo')
    } else if(X % 2 === 0 && X < 0 ) {
        console.log('Par Negativo')
    } else {
        console.log('Par Positivo')
    }
}