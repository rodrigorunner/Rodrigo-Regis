// Numa população em que o número de usuários da internet é de 2 milhões de pessoas, 
// 15% a utilizam para fins educacionais. O número de pessoas que utilizam a internet 
// para outros fins é de:

// 15% de 2000000

const populacaoGeral = 2000000
const percentual = 15
const cento = 100

const calc = (percentual / cento) * populacaoGeral

const outrosFins = populacaoGeral - calc

console.log(outrosFins)