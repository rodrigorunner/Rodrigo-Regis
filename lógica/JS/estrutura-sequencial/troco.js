// Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
// O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto,
// e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu programa deve
// mostrar o valor do troco a ser devolvido ao cliente.

var troco, precoUnitario, qntd, pagoCliente 

precoUnitario = parseFloat(prompt('Preço unitário do produto'))
qntd = parseInt(prompt('Quantidade comprada'))
pagoCliente = parseFloat(prompt('Dinheiro recebido'))

troco = pagoCliente - (precoUnitario * qntd)

console.log('Troco: ' + troco.toFixed(2))