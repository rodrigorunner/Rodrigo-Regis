// Fazer um programa o nome de um(a) funcionário(a), o valor que ele(a) recebe por hora, e a quantidade
// de horas trabalhadas por ele(a). Ao final, mostrar o valor do pagamento do funcionário com uma
// mensagem explicativa

var nome, valorHrs, qntdHrs, valor

nome = prompt('Nome do funcionário')
valorHrs = parseFloat(prompt('Valor por hora'))
qntdHrs = parseFloat(prompt('Quantidade de horas trabalhadas'))

valor = valorHrs * qntdHrs

console.log('O pagamento para ' + nome + ' deve ser ' + 'R$' + valor.toFixed(2))
