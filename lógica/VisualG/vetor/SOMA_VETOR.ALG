algoritmo "soma_vetor"
// Disciplina  : [Linguagem e Lógica de programaçao] 
// Curso       : Udemy
// Descrição   : Faça um programa que leia N números reais e
//               armazene-os em um vetor. Em seguida:
//               - Imprimir todos os elementos do vetor
//               - Mostrar na tela a soma e a média dos elementos do vetor

// Autor(a)    : Rodrigo Regis
// Data atual  : 12/08/2021
var

  i, n, soma: inteiro
  media: real
  vet: vetor[0..9] de inteiro

inicio

  escreva("Quantos numeros voce vai digitar? ")
  leia(n)
  
  para i de 0 ate n-1 faca
     escreva("Digite um numero: ")
     leia(vet[i])
  fimpara
  
  soma <- 0
  escreva("Valor = ")
  para i de 0 ate n-1 faca
     escreva(vet[i], " ")
     soma <- soma + vet[i]
  fimpara
     media <- soma / n
     escreval
     escreval("Soma = ", soma:2:2)
     escreva("Media = ", media:2:2)

fimalgoritmo