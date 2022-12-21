// O preço de um carro novo é R$ 50.000,00. Sabendo-se que ele desvaloriza 10% a cada 
// ano, qual será o preço desse carro ao final do terceiro ano de uso?

const porcentagem = 10
const cento = 100
const valor = 50000

const calc = (porcentagem / cento) * valor 

const segundoAno = valor - calc 

const calcSeg = (porcentagem / cento) * segundoAno

const terceiroAno = segundoAno - calcSeg

const calcTer = (porcentagem / cento) * terceiroAno

const soma = calc + calcSeg + calcTer 

const valorFinal = valor - soma 

console.log('Valor Final:', valorFinal.toFixed(2))
console.log('Desvalorização:', soma.toFixed(2))
console.log('Primeiro Ano:', calc.toFixed(2))
console.log('Segundo Ano:', calcSeg.toFixed(2))
console.log('Terceiro Ano:', calcTer.toFixed(1))