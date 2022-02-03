Algoritmo "Terreno"
// Disciplina   : Lógica de Programação
// Curso        : Udemy
// Descrição   : Calcular a largura, comprimento e o valor do metro quadrado.
// Autor(a)    : Rodrigo Regis
// Data atual  : 14-07-2021
Var

  largura, comprimento, area : inteiro
  preco, total : real

Inicio

  escreval("Digite o comprimento do terreno:")
  leia(comprimento)
  
  escreval("Digite a largura do terreno:")
  leia(largura)
  
  escreval("Digite o valor do metro quadrado:")
  leia(preco)
  
  area <- largura * comprimento
  total <- area * preco
  
  escreval("Area do terreno ", area:4:1)
  escreva("Preco do terreno ", total:4:2)
  

Fimalgoritmo