Algoritmo "Operadora"
// Disciplina  : L�gica de Programa��o
// Curso       : Udemy
// Descri��o   : Fazer um programa para ler o consumo de liga��o de um operadora
// Autor(a)    : Rodrigo Regis
// Data atual  : 14-07-2021
Var

   plano, minutos, valor : real

Inicio

   escreval("Digite a quantidade de minutos")
   leia(minutos)
   
   plano <- 50.00
   
   se minutos > 100 entao
     valor <- plano + ((minutos - 100) * 2)
     escreval("Valor a ser pago R$", valor)
   senao
     escreval("Valor a ser pago R$", plano)
   fimse

Fimalgoritmo