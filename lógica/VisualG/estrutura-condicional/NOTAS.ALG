Algoritmo "Notas"
// Disciplina  : L�gica de Programa��o
// Curso       : Udemy
// Descri��o   : Fazer um programa para ler duas notas semestrais e caso seja
//               abaixo de 60pts mostrar, "Reprovado"
// Autor(a)    : Rodrigo Regis
// Data atual  : 14-07-2021
Var

   nota1, nota2, media : real


Inicio

  escreval("Digite primeira nota")
  leia(nota1)
  
  escreval("Digite segunda nota")
  leia(nota2)
  
  media <- nota1 + nota2
  
  escreval("Media = ", media:2:2)
  
  se media < 60 entao
    escreva("Reprovado")
  fimse

Fimalgoritmo