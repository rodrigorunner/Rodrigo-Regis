algoritmo "media_pares"
// Disciplina  : [Linguagem e L�gica de programa�ao] 
// Professor(a): Nelio Alves
// Plataforma  : Udemy
// Descri��o   : Fazer um programa para ler um vetor de N n�meros inteiros.
//               Em seguida, mostrar na tela a m�dia aritm�tica somente
//               dos n�meros pares lidos, com uma casa decimal.
//               Se nenhum n�mero par for digitado, mostrar a mensagem
//              "NENHUM NUMERO PAR"
// Autor(a)    : Rodrigo Regis
// Data atual  : 14/08/2021
var

 N, i, soma, pares: inteiro
 vet: vetor[0..9] de inteiro
 media: real
 

inicio

 escreva("Quantos elementos vai ter o vetor? ")
 leia(N)
 
 para i de 0 ate N-1 faca
    escreva("Digite um numero: ")
    leia(vet[i])
 fimpara
 
 soma <- 0
 pares <- 0
 
 para i de 0 ate N-1 faca
     se vet[i] % 2 = 0 entao
       soma <- soma + vet[i]
       pares <- pares + 1
     fimse
 fimpara
 
 se pares = 0 entao
    escreva("Nenhum par encontrado")
 senao
    media <- soma / pares
    escreva("Media dos pares = ", media:3:1)
 fimse

fimalgoritmo