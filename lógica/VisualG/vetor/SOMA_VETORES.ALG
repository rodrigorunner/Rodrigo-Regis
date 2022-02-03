algoritmo "soma_vetores"
// Disciplina  : [Linguagem e Lógica de programaçao] 
// Professor(a):  Nelio Alves
// Plataforma  : Udemy
// Descrição   : Faça um programa para ler dois vetores A e B, contendo N
//               elementos cada. Em seguida, gere um  terceiro vetor C onde
//               cada elemento de C é a soma dos elementos correspondentes
//               de A e B. Imprima o vetor C gerado.
// Autor(a)    : Rodrigo Regis
// Data atual  : 14/08/2021
var

   N, i: inteiro
   A: vetor[0..5] de inteiro
   B: vetor[0..5] de inteiro
   C: vetor[0..5] de inteiro

inicio

    escreva("Quantos valores voce vai digitar? ")
    leia(N)
    
    escreval("Digite os valores do vetor A: ")
    para i de 0 ate N-1 faca
      leia(A[i])
      C[i] <- A[i]
    fimpara
    
    escreval("Digite os valores do vetor B: ")
    para i de 0 ate N-1 faca
      leia(B[i])
      C[i] <- A[i] + B[i]
    fimpara
    
    escreval("VETOR RESULTANTE:")
    para i de 0 ate N-1 faca
      escreval(C[i])
    fimpara


fimalgoritmo