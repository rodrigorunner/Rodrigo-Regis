Algoritmo "Consumo"
// Disciplina  : L�gica de Programa��o
// Curso       : Udemy
// Descri��o   : Calcular o consumo m�dio de combust�vel de um carro.
// Autor(a)    : Rodrigo Regis
// Data atual  : 14-07-2021
Var

   distancia, combustivel, total : real

Inicio

   escreval("Digite a distancia percorrida")
   leia(distancia)

   escreval("Quantidade de combustivel")
   leia(combustivel)
   
   total <- distancia / combustivel
   
   escreva("Consumo medio = ", total:2:3)

Fimalgoritmo