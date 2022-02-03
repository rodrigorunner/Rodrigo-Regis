algoritmo "maior_posicao"
// Disciplina  : [Linguagem e Lógica de programaçao] 
// Professor(a):  Nelio Alves
// Descrição   : Faça um programa que leia N números reais e armazene-os
//               em um vetor. Em seguida, mostrar na tela
//               o maior número do vetor (supor não haver empates).
//               Mostrar também a posição do maior elemento,
//               considerando a primeira posição como 0 (zero).
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