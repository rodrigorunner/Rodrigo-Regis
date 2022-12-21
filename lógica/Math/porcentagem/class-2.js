// Um objeto metálico, pesando 750g, contém 34%, desse peso em prata. A quantidade de prata que esse objeto contém é:
const porcentagem = 34
const cento = 100
const valor = 750

const calc = (porcentagem / cento) * valor

console.log(calc.toFixed(0),'g')