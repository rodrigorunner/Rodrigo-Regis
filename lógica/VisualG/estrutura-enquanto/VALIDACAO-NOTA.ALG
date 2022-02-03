Algoritmo "validacao-nota"
// Disciplina  : Lógica de Programaçã
// Curso       : Udemy
// Descrição   : Faça um programa que leia as notas referentes às duas
//               avaliações de um aluno. Calcule e imprima a média semestral.
//               Faça com que o algoritmo só aceite notas válidas
//               (uma nota válida deve pertencer ao intervalo [0,10]).
// Autor(a)    : Rodrigo Regis
// Data atual  : 28-07-2021
Var

 nota1, nota2, media: real

Inicio

 escreva("Digite a primeira nota:")
 leia(nota1)
 
 enquanto (nota1 < 0) ou (nota1 > 10) faca
   escreva("Valor Invalido! Tente novamente:")
   leia(nota1)
 fimenquanto

 escreva("Digite a segunda nota:")
 leia(nota2)

 enquanto (nota2 < 0) ou (nota2 > 10) faca
   escreva("Valor Invalido! Tente novamente:")
   leia(nota2)
 fimenquanto
 
 media <- (nota1 + nota2) / 2
 
 escreva("MEDIA = ", media:3:2)

Fimalgoritmo