Algoritmo "Menor-de-tres"
// Disciplina  : L�gica de Programa��o
// Curso       : Udemy
// Descri��o   : Fazer um programa para ler tr�s n�mero inteiros e mostrar
//               qual o menor dentre os tr�s.
// Autor(a)    : Rodrigo Regis
// Data atual  : 14-07-2021
Var

    a, b, c, menor : inteiro

Inicio

   escreval("Digire os n�meros")
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