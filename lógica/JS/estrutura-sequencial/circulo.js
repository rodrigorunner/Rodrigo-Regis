// Fazer um programa para ler o valor "r" do raio de um círculo, e depois mostrar o valor da área do
// círculo com três casas decimais. A fórmula da área do círculo é a seguinte: area = π. r . Você pode
// usar o valor de π fornecido pela biblioteca da sua linguagem de programação, ou então, se preferir, use
// diretamente o valor 3.14159.

var r, area

r = parseFloat(prompt('Digite o valor do raio do circulo'))

area = Math.PI * Math.pow(r, 2)

console.log('Área: ' + area.toFixed(3))