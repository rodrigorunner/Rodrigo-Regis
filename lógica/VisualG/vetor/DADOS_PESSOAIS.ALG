algoritmo "dados_pessoais"
// Disciplina  : [Linguagem e Lógica de programaçao] 
// Professor(a): Nelio Aves
// Descrição : Tem-se um conjunto de dados contendo a altura e o gênero(M,F)
//               de N pessoas. Fazer um programa que calcule e escreva a
//               maior e a menor altura do grupo, a média de altura das
//               mulheres, e o número de homens.
// Autor(a)    : Rodrigo Regis
// Data atual  : 15/08/2021
var

   N, i: inteiro
   generos: vetor[0..4] de caractere
   altura: vetor[0..4] de real
   maior, menor, media, contF, contM, cont: real

inicio

   escreva("Quantas pessoas serao digitadas? ")
   leia(N)


   para i de 0 ate N-1 faca
     escreva("Altura da ", i+1, "a", " pessoa: ")
     leia(altura[i])
     escreva("Genero da ", i+1, "a", " pessoa: ")
     leia(generos[i])
   fimpara
   
   maior <- altura[0]
   menor <- altura[0]
   para i de 0 ate N-1 faca
     se altura[i] > maior entao
        maior <- altura[i]
     senao
       se altura[i] < menor entao
          menor <- altura[i]
       fimse
     fimse
   fimpara
   escreval("Menor Altura = ", menor)
   escreval("Maior Altura = ", maior)
   
   contF <- 0
   cont <- 0
   para i de 0 ate N-1 faca
     se generos[i] = "F" entao
       contF <- contF + altura[i]
       cont <- cont + 1
     senao
       se generos[i] = "M" entao
         contM <- contM + 1
       fimse
     fimse
   fimpara
   
   media <- contF / cont
   escreval("Media de altua das mulheres: ", media:3:1)
   escreva("Quantidade de homens: ", contM)
   
fimalgoritmo