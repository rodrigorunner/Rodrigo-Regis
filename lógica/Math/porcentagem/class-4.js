// A embalagem de um pacote de pão contém a informação de que foi 
// acrescentado, promocionalmente, 20% do produto grátis. Sabendo-se que a 
// embalagem original contém 300 g de pão, qual o peso do produto na embalagem promocional ?
const porcentagem = 20
const cento = 100
const valor = 300

const calc = (porcentagem / cento) * valor

const peso = valor + calc

console.log(peso, 'g')