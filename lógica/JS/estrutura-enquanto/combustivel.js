// Um posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes.
// Escreva um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma:
// 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a
// 4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o
// código informado for o número 4, devendo então mostrar a mensagem "MUITO OBRIGADO", bem
// como as quantidades de cada combustível.

let alcool, gasolina, diesel, codigo;

codigo = parseInt(prompt('Informe um código (1, 2, 3) ou 4 para parar'));

alcool = 0;
gasolina = 0;
diesel = 0;
while(codigo != 4) {
    debugger;
    if(codigo == 1) {
        alcool++;
    } else if(codigo == 2) {
        gasolina++;
    } else if(codigo == 3) {
        diesel++;
    } 

    codigo = parseInt(prompt('Informe um código (1, 2, 3) ou 5 para parar'));
}

console.log('Álcool: ' + alcool);
console.log('Gasolina: ' + gasolina);
console.log('Diesel: ' + diesel);
console.log('Muito Obrigado');