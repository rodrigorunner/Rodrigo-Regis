algoritmo "abaixo_da_media"
// Disciplina  : [Linguagem e L�gica de programa�ao] 
// Professor(a): Nelio Alves
// Plataforma  : Udemy
// Descri��o   : Fazer um programa para ler um n�mero inteiro N e depois um
//               vetor de N n�meros reais. Em seguida, mostrar na tela a
//               m�dia aritm�tica de todos elementos com tr�s casas decimais.
//               Depois mostrar todos os elementos do vetor que estejam
//               abaixo da m�dia, com uma casa decimal cada.
// Autor(a)    : Rodrigo Regis
// Data atual  : 14/08/2021
var

 N, i: inteiro
 media, soma: real
 numeros: vetor[0..9] de real

inicio

  escreva("Quanto elementos vai ter o vetor? ")
  leia(N)
  
  soma <- 0
  para i de 0 ate N-1 faca
    escreva("Digite um numero: ")
    leia(numeros[i])
    soma <- soma + numeros[i]
  fimpara
  
  media <- soma / N
  escreval("Media do Vetor = ", media:5:3)

  escreval("Elementos abaixo da media:")
  para i de 0 ate N-1 faca
     se numeros[i] < 11 entao
        escreval(numeros[i]:3:1)
     fimse
  fimpara

fimalgoritmo