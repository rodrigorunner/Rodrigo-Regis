algoritmo "maior_posicao"
// Disciplina  : [Linguagem e L�gica de programa�ao] 
// Professor(a):  Nelio Alves
// Descri��o   : Fa�a um programa que leia N n�meros reais e armazene-os
//               em um vetor. Em seguida, mostrar na tela
//               o maior n�mero do vetor (supor n�o haver empates).
//               Mostrar tamb�m a posi��o do maior elemento,
//               considerando a primeira posi��o como 0 (zero).
// Autor(a)    : Rodrigo Regis
// Data atual  : 13/08/2021
var

  N, i, posicao: inteiro
  maior: real
  numeros: vetor[0..5] de real

inicio

    escreva("Quantos numeros voce vai digitar? ")
    leia(N)
    
    para i de 0 ate N-1 faca
      escreva("Digite um numero: ")
      leia(numeros[i])
    fimpara
    
    maior <- numeros[0]
    posicao <- 0
    para i de 1 ate N-1 faca
        se numeros[i] > maior entao
           maior <- numeros[i]
           posicao <- i
        fimse
    fimpara
    
    escreval("MAIOR VALOR = ", maior)
    escreva("Posicao do maior valor = ", posicao)
fimalgoritmo