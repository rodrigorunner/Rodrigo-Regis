// Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma
// casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida,
// o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com
// duas casas decimais

var largura, comprimento, valor, area, total

largura = parseFloat(prompt('Digite a largura do terreno:'))
comprimento = parseFloat(prompt('Digite o comprimento do terreno'))
valor = parseFloat(prompt('Digite o valor do metro quadrado'))

area = largura * comprimento
total = valor * area

console.log('Área do terreno: ' + area.toFixed(2))
console.log('Valor do terreno: ' + total.toFixed(2))
