Algoritmo "Menor-de-tres"
// Disciplina  : Lógica de Programação
// Curso       : Udemy
// Descrição   : Fazer um programa para ler três número inteiros e mostrar
//               qual o menor dentre os três.
// Autor(a)    : Rodrigo Regis
// Data atual  : 14-07-2021
Var

    a, b, c, menor : inteiro

Inicio

   escreval("Digire os números")
   leia(a)
   leia(b)
   leia(c)
   
   se (a < b) e (a < c) entao
       menor <- a
    senao
      se b < c entao
       menor <- b
      senao
       menor <- c
      fimse
  fimse
   
   escreva("Menor = ", menor)
Fimalgoritmo