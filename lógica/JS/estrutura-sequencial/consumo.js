// Fazer um programa para ler a distância total (em km) percorrida por um carro, bem como o total de
// combustível gasto por este carro ao percorrer tal distância. Seu programa deve mostrar o consumo
// médio do carro, com três casas decimais.

var distancia, combustivel, total

distancia = parseFloat(prompt('Distância percorrida'))
combustivel = parseFloat(prompt('Combustível gasto'))

total = distancia / combustivel

console.log('Consumo médio ' + total.toFixed(3))