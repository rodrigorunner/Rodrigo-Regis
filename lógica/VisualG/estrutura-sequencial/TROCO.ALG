Algoritmo "Troco"
// Disciplina  : Lógica de Programação
// Curso       : Udemy
// Descrição   : Ler quantidade unitária de um produto, quantidade e
//               calcular o troco do cliente.
// Autor(a)    : Rodrigo Regis
// Data atual  : 14-07-2021
Var

   precoUnitario, quantidade, cliente, total : real
   

Inicio

  escreval("Preco unitario do produto")
  leia(precoUnitario)
  
  escreval("Quantidade do produto")
  leia(quantidade)
  
  escreval("Dinheiro recebido")
  leia(cliente)
  
  total <- cliente - (precoUnitario * quantidade)
  
  
  escreva("Troco R$",total:2:2)


Fimalgoritmo