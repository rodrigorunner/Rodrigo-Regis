// Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor
// da área, perímetro e diagonal deste retângulo, com quatro casas decimais.

var base, altura, area, perimetro, diagonal

base = parseFloat(prompt('Base do retângulo'))
altura = parseFloat(prompt('Altura do retângulo'))

area = base * altura
perimetro = 2 * (base + altura)
diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2))

console.log('Área: ' + area.toFixed(4))
console.log('Perímetro: ' + perimetro.toFixed(4))
console.log('Diagonal: ' + diagonal.toFixed(4))