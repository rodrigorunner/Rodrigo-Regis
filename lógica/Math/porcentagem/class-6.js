// Comprei um produto e obtive como desconto 10% de valor publicado no 
// encarte. Se eu acrescentar 10% ao valor efetivamente pago, obterei:

// 10% de X (100) + 10%
const porcentagem = 10
const cento = 100
const valor = 100

const calc = (porcentagem / cento) * valor

const desconto = valor - calc 

const calcDesc = (porcentagem / cento) * desconto

const valorFinal = desconto + calcDesc

console.log(valorFinal)