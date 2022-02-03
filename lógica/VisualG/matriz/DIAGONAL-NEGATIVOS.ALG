algoritmo "diagonal-negativos"
// Disciplina  : [Linguagem e Lógica de programaçao] 
// Professor(a): Nelio Alves
// Curso       : Udemy
// Descrição   : Fazer um programa para ler um número inteiro N (máximo = 10)
//               e uma matriz quadrada de ordem N contendo números inteiros.
//               Em seguida, mostrar a diagonal principal e a quantidade de
//               valores negativos da matriz.
// Autor(a)    : Rodrigo Regis
// Data atual  : 02/09/2021
var
   N, i, j, cont : inteiro
   mat : vetor [0..9, 0..9] de inteiro

inicio

   escreva("Quantos numeros voce vai digitar? ")
   leia(N)
   
   para i de 0 ate N-1 faca
      para j de 0 ate N-1 faca
          escreva("Elemento [",i,",",j,"]: ")
          leia(mat[i,j])
      fimpara
   fimpara
   
   escreval("Diagonal Principal:")
   para i de 0 ate N-1 faca
      escreva(mat[i, i], " ")
   fimpara
   escreval
   
   cont <- 0
   para i de 0 ate N-1 faca
      para j de 0 ate N-1 faca
         se mat[i,j] < 0 entao
            cont <- cont + 1
         fimse
      fimpara
   fimpara
   escreva("Quantidade negativos: ", cont)

fimalgoritmo