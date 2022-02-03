// Uma operadora de telefonia cobra R$ 50.00 por um plano básico que dá direito a 100 minutos de
// telefone. Cada minuto que exceder a franquia de 100 minutos custa R$ 2.00. Fazer um programa para
// ler a quantidade de minutos que uma pessoa consumiu, daí mostrar o valor a ser pago.

let planoBasico, minutos, valor;

planoBasico = 50.00;
minutos = 103;

if(minutos > 100) {
    valor = planoBasico + ((minutos - 100) * 2);
    console.log('Valor: R$ ' + valor);
} else {
    console.log('Valor: R$ ' + planoBasico);
}
