// Uma lanchonete possui vários produtos. Cada produto possui um código
// e um preço. Você deve fazer um programa para ler o código e a
// quantidade comprada de um produto (suponha um código válido), e daí
// informar qual o valor a ser pago, com duas casas decimais.

let codigo, qtde, valor;

codigo = 5;
qtde = 4;

if(codigo === 1) {
    valor = qtde * 5;
} else if(codigo === 2) {
    valor = qtde * 3.50;
} else if(codigo === 3) {
    valor = qtde * 4.80;
} else if(codigo === 4) {
    valor = qtde * 8.90;
} else {
    valor = qtde * 7.32;
}

console.log('Valor a pagar: R$ ' + valor.toFixed(2));


