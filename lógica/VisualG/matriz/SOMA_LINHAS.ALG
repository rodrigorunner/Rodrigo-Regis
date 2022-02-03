algoritmo "soma_linhas"
// Disciplina  : Linguagem e Lógica de programaçao
// Professor(a): Nélio Alves
// Descrição   : Fazer um programa para ler dois números inteiros M e N(máximo = 10).
//               Em seguida, ler uma matriz de M linhas e N colunas
//               contendo números reais. Gerar um vetor de modo que cada
//               elemento do vetor seja a soma dos elementos da linha
//               correspondente da matriz. Mostrar o vetor gerado.
// Autor(a)    : Rodrigo Regis
// Data atual  : 14/09/2021
var
  M, N, i, j : inteiro
  mat: vetor[0..9, 0..9] de real
  vet: vetor[0..9] de real

inicio

   escreva("Digite a quantidade de linha da matriz? ")
   leia(M)
   escreva("Digite a quantidade de coluna da matriz? " )
   leia(N)
   
   para i de 0 ate M-1 faca
        escreval("Digite os elementos da ", i+1 , "a linha: ")
      para j de 0 ate N-1 faca
        leia(mat[i, j])
      fimpara
   fimpara
   
   para i de 0 ate M-1 faca
         vet[i] <- 0
      para j de 0 ate N-1 faca
         vet[i] <- vet[i] + mat[i, j]
      fimpara
   fimpara

   escreval("VALORES GERADOS:")
   para i de 0 ate M-1 faca
      escreval(vet[i]:3:1)
   fimpara
fimalgoritmo