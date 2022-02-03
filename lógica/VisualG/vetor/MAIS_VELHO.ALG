algoritmo "mais_velho"
// Disciplina  : [Linguagem e Lógica de programaçao] 
// Professor(a):  Nelio Alves
// Descrição   : Fazer um programa para ler um conjunto de nomes
//               de pessoas e suas respectivas idades. Os nomes
//               devem ser armazenados em um vetor, e as idades em um
//               outro vetor. Depois, mostrar na tela o nome da
//               pessoa mais velha.
// Autor(a)    : Rodrigo Regis
// Data atual  : 15/08/2021
var

     N, i, contIdade: inteiro
     nomes: vetor[0..4] de caractere
     idades: vetor[0..4] de inteiro
     nome: caractere

inicio

     escreva("Quantaas pessoas voce vai digitar? ")
     leia(N)
     
     para i de 0 ate N-1 faca
       escreval("Dados da ", i+1,"a", " pessoa:")
       escreva("Nome: ")
       leia(nomes[i])
       escreva("Idade: ")
       leia(idades[i])
     fimpara

     contIdade <- idades[0]
     nome <- nomes[0]
     para i de 0 ate N-1 faca
       se idades[i] > contIdade entao
          contIdade <- idades[i]
          nome <- nomes[i]
       fimse
     fimpara

     escreva("Pessoa mais Velha: ", nome)
fimalgoritmo