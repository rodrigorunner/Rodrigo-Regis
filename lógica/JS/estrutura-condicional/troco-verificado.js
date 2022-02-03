// Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
// O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto,
// e o valor em dinheiro dado pelo cliente. Seu programa deve mostrar o valor do troco a ser devolvido
// ao cliente. Se o dinheiro dado pelo cliente não for suficiente, mostrar uma mensagem informando o
// valor restante.

let troco, precoUnitario, qtde, valorPago;

precoUnitario = 8;
qtde = 2;
valorPago = 20;

if(precoUnitario * qtde > valorPago) {
    troco = (precoUnitario * qtde) - valorPago;
    console.log('DIinheiro Insuficiente, faltam R$' + troco.toFixed(2) + ' reais');
} else {
    troco = valorPago - (precoUnitario * qtde);
    console.log('Troco = R$ ' + troco.toFixed(2));
}



