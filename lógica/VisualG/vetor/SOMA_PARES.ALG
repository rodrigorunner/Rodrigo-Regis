algoritmo "soma_pares"
// Disciplina  : [Linguagem e L�gica de programa�ao] 
// Professor(a): Nelio Alves
// Curso       : Udemy
// Descri��o   : Fa�a um programa que leia N n�meros inteiros e armazene-os
//               em um vetor. Em seguida, mostre na
//               tela todos os n�meros pares, e tamb�m a quantidade de
//               n�meros pares.

// Autor(a)    : Rodrigo Regis
// Data atual  : 13/08/2021
var

  N, i, cont: inteiro
  numeros: vetor[0..5] de inteiro

inicio

  escreva("Quantidade de numeros digitados? ")
  leia(N)
  
  para i de 0 ate N-1 faca
    escreva("Digite um numero: ")
    leia(numeros[i])
  fimpara
  
  escreva("Valores = ")
  para i de 0 ate N-1 faca
    se numeros[i] % 2 = 0 entao
       escreva(numeros[i], " ")
    fimse
  fimpara
  
  cont <- 0
  para i de 0 ate N-1 faca
    se numeros[i] % 2 = 0 entao
      cont <- cont + 1
    fimse
  fimpara
  escreval
  escreva("Quantidade de pares = ", cont)

fimalgoritmo