algoritmo "negativos"
// Disciplina  : [Linguagem e L�gica de programa�ao] 
// Curso       : Udemy
// Descri��o   : Fa�a um programa que leia um n�mero inteiro positivo N (m�ximo = 10)
//               e depois N n�meros inteiros  e armazene-os em um vetor.
//             Em seguida, mostrar na tela todos os n�meros negativos lidos.
// Autor(a)    : Rodrigo Regis
// Data atual  : 12/08/2021
var

   vet: vetor [0..9] de inteiro
   i, n: inteiro

inicio

   escreva("Quantos numeros voce vai digitar? ")
   leia(n)

   para i de 0 ate n-1 faca
      escreva("Digite um numero: ")
      leia(vet[i])
   fimpara
   
   escreval("Numeros Negativos:")
   para i de 0 ate n-1 faca
      se vet[i] < 0 entao
         escreval(vet[i])
      fimse
   fimpara
fimalgoritmo