// Compareceram a um exame, 240 candidatos, sendo aprovados 156. Qual é a 
// porcentagem de candidatos reprovados ?

const totalAlunos = 240
const aprovados = 156 
const cento = 100

const reprovados = totalAlunos - aprovados

const multiply = reprovados * cento

const calc = multiply / totalAlunos

console.log(calc,'%')