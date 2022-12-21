// Num outdoor de 20𝑚2 de área, 30% são ocupados por ilustrações e metade das 
// ilustrações é azul. Assim, a área ocupada pelas ilustrações azuis é igual a:

// 30% de 20m2

const area = 20
const percentual = 30
const cento = 100

const calc = (percentual / cento) * area 

const areaAzul = calc / 2

console.log(areaAzul,'m2')