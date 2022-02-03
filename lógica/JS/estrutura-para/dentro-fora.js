// Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
// Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo.

let N, x , dentro, fora 

N = parseInt(prompt('Quantos numeros voce vai digitar?'))

dentro = 0
fora = 0
for(let i = 0; i < N; i++) {

    x = parseInt(prompt('Digite um número'))

    if(x >= 10 && x <= 20) {
        dentro = dentro + 1
    } else {
        fora = fora + 1
    }
}
console.log(dentro + ' Dentro')
console.log(fora + ' Fora')