// Escreva um algoritmo que leia dois números e imprima o resultado da divisão do primeiro pelo
// segundo. Caso não for possível, mostre a mensagem “DIVISAO IMPOSSIVEL”.

let N, numerador, denominador, divisao 

N = parseInt(prompt('Quantos casos voce vai digitar?'))

for(let i = 0; i < N; i++) {
    numerador = parseInt(prompt('Digite o numerador'))
    denominador = parseInt(prompt('Digite o denominador'))

    if(denominador === 0) {
        console.log('Impossível Calcular')
    }

    divisao = numerador / denominador
    console.log('DIVISÂO = ', divisao)
}

